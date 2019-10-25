<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\DropItem;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\Quests\Chapter;
use GameBundle\Quests\Requirements\AbstractRequirement;
use GameBundle\Quests\Requirements\KillMonster;
use GameBundle\Quests\SkeletonCamp;
use GameBundle\SpecialItems\AbstractSpecialItem;
use GameBundle\SpecialItems\Gold;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnAttack extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @DI\Inject("manager.special_item")
     *
     * @var SpecialItemManager
     */
    public $specialItemManager;

    /**
     * @DI\Inject("app.server.socket")
     *
     * @var ServerSocket
     **/
    public $socketIOServer;

    /**
     * @DI\Observe("connection.established.event")
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self   = $this;
        $socket->on(
            'attack',
            function ($data) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $roomId            = $socketSessionData->getActiveRoom()->getId();
                $player            = $socketSessionData->getActivePlayer();
                $playerEnergy      = $socketSessionData->getActivePlayer()->getStatistics()->getEnergy();
                $scene             = $socketSessionData->getActiveRoom()->getActiveScene();
                $monsterKey        = null;

                if($socketSessionData->getActiveSkill() && !$socketSessionData->getActiveSkill()->used) {
                    foreach ($socketSessionData->getActiveRoom()->getMonsters() as $monsterSceneKey => $monster) {
                        foreach ($monster->getAvailableAttacksFromCharacters() as $attackedPlayerId => $isAttacked) {
                            if ($player->getId() == $attackedPlayerId) {
                                $monsterKey = $monsterSceneKey;
                            }
                        }
                    }

                    if($monsterKey === null) {
                        return;
                    }
                } else {
                    //TODO: check time
                    if ($socketSessionData->getLastPlayerAttack()*1000 > microtime(true)*1000 - 650) {
                        return;
                    }

                    $socketSessionData
                        ->setAttack($data['attack'])
                        ->setTargetPoint($data['targetPoint'])
                        ->setLastPlayerAttack(microtime(true));

                    if($playerEnergy+3 <= $socketSessionData->getActivePlayer()->getStatistics()->getEnergyMax()) {
                        $socketSessionData->getActivePlayer()->getStatistics()->setEnergy($playerEnergy + 3);
                    }

                    $monsterKey = $data['attack'];
                }

                $monster    = $socketSessionData->getActiveRoom()->getMonsters()[$monsterKey];
                /** @var AbstractMonster $monster */
                var_dump($monster->getAvailableAttacksFromCharacters());
                foreach ($monster->getAvailableAttacksFromCharacters() as $attackedPlayerId => $isAttacked) {
                    if ($player->getId() == $attackedPlayerId) {
                        $randomDamage = random_int($player->getAllStatistics()->getDamageMin(), $player->getAllStatistics()->getDamageMax());
                        $damage = $randomDamage - $monster->getStatistics()->getArmor();
                        if($socketSessionData->getActiveSkill() && !$socketSessionData->getActiveSkill()->used) {
                            $socketSessionData->getActiveSkill()->useSkill($damage, $monster, $player);
                            $socketSessionData->setActiveSkill(null);
                        }

                        if ($damage < 1) {
                            $damage = 1;
                        }
                        $monster->getStatistics()->setHp($monster->getStatistics()->getHp() - $damage);

                        $emitData = [
                            'enemy'    => $self->serializer->normalize($monster),
                            'enemyKey' => $monsterKey,
                            'roomId'   => $roomId,
                        ];

                        $socket->emit('updateEnemy', $emitData);
                        $socket->in($roomId)->emit('updateEnemy', $emitData);
                        $socket->to($self->socketIOServer->monsterServerId)->emit('updateEnemy', $emitData);

                        if ($monster->getStatistics()->getHp() <= 0) {
                            //Add special Item
                            $specialItems = $monster->getSpecialItemsToDrop();
                            if (count($specialItems)) {
                                foreach ($specialItems as $specialItem) {
                                    $manager = ($specialItem instanceof Gold) ?
                                        $this->playerManager :
                                        $this->specialItemManager;

                                    /** @var AbstractSpecialItem $specialItem */
                                    $specialItem->addItem(
                                        $player,
                                        $manager
                                    );
                                    $socket->emit('addSpecialItem', $specialItem);
                                }

                            }

                            //Add Item
                            $itemsToDrop = $monster->getItemsToDrop();
                            if (count($itemsToDrop)) {
                                $randomItem  = $itemsToDrop[array_rand($itemsToDrop)];
                                $droppedItem = $randomItem['item'];
                                $chance      = $randomItem['chance'];
                                if (random_int(1, 100) < $chance) {
                                    $showDroppedItemData = [
                                        'item'     => $self->serializer->normalize($droppedItem, 'array'),
                                        'itemKey'  => DropItem::addDropItemToScene($scene, $droppedItem),
                                        'position' => $monster->getPosition(),
                                    ];
                                    $socket->emit('showDroppedItem', $showDroppedItemData);
                                }
                            }

                            $monster->setAvailableAttacksFromCharacters([]);
                            $self->playerManager->addExperience($player, $socket, $monster->getExperience());

                            $quest = $socketSessionData->getActiveRoom()->getActiveQuest();
                            if ($quest) {
                                /** @var Chapter $actualChapter */
                                $actualChapter = $quest->chapters[$quest->actualChapter];
                                array_map(
                                    function (AbstractRequirement $requirement) use (
                                        $monster,
                                        $socket,
                                        $socketSessionData
                                    ) {
                                        if ($requirement instanceof KillMonster && $requirement->monsterToKill::TYPE == $monster::TYPE) {
                                            $requirement->passRequirement($socket, $socketSessionData);
                                        }
                                    },
                                    $actualChapter->requirements
                                );

                                if($quest->isFinished) {
                                    $socketSessionData->getActiveRoom()->setActiveQuest(new SkeletonCamp());
                                    $questData = [
                                        'quests'      => $self->serializer->normalize($scene->quests, 'array'),
                                        'activeQuest' => $self->serializer->normalize($socketSessionData->getActiveRoom()->getActiveQuest(), 'array'),
                                    ];
                                    $socket->emit('refreshQuests', $questData);
                                    $socket->in($roomId)->emit('refreshQuests', $questData);
                                }
                            }
                        }
                    }

                }
                $normalizedData = $self->serializer->normalize($socketSessionData, 'array');
                $socket->emit('updatePlayer', $normalizedData);
                $socket
                    ->in($roomId)
                    ->emit('updatePlayer', $normalizedData);
                $socket
                    ->to($self->socketIOServer->monsterServerId)
                    ->emit('updatePlayer', $normalizedData);

                $socketSessionData
                    ->setAttack(null);
            }
        );

        return $this;
    }

}
