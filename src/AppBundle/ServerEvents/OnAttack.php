<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Items\AbstractItem;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\Quests\Chapter;
use GameBundle\Quests\Requirements\AbstractRequirement;
use GameBundle\Quests\Requirements\KillMonster;
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
     * @var SocketIO
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
                ///TODO: fix attack time
//                if ($socketSessionData->getLastPlayerAttack() > time() - 0) {
//                    return;
//                }

                $socketSessionData
                    ->setAttack($data['attack'])
                    ->setTargetPoint($data['targetPoint'])
                    ->setLastPlayerAttack(time());

                $monsterKey = $data['attack'];
                $monster    = $socketSessionData->getActiveRoom()->getMonsters()[$monsterKey];
                /** @var AbstractMonster $monster */
                foreach ($monster->getAvailableAttacksFromCharacters() as $attackedPlayerId => $isAttacked) {
                    if ($player->getId() == $attackedPlayerId) {
                        $damage = $player->getAllStatistics()->getDamage() - $monster->getStatistics()->getArmor();
                        if ($damage < 1) {
                            $damage = 1;
                        }
                        $monster->getStatistics()->setHp($monster->getStatistics()->getHp() - $damage);

                        $emitData = [
                            'enemy'    => $self->serializer->normalize($monster),
                            'enemyKey' => $monsterKey,
                            'roomId'   => $roomId,
                        ];

                        $socket
//                                ->in($roomId)
                            ->emit('updateEnemy', $emitData);
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
                                if (rand(1, 100) < $chance) {
                                    if (!$socketSessionData->getItemsToDrop()) {
                                        $socketSessionData->setItemsToDrop([$droppedItem]);
                                    } else {
                                        $itemsToDrop   = $socketSessionData->getItemsToDrop();
                                        $itemsToDrop[] = $droppedItem;
                                        $socketSessionData->setItemsToDrop($itemsToDrop);
                                        end($itemsToDrop);
                                    }

                                    $socket->emit(
                                        'showDroppedItem',
                                        [
                                            'item'     => $self->serializer->normalize($droppedItem, 'array'),
                                            'itemKey'  => key($itemsToDrop),
                                            'position' => $monster->getPosition(),
                                        ]
                                    );
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
                                        if ($requirement instanceof KillMonster && $requirement->monsterToKill->type == $monster->type) {
                                            $requirement->passRequirement($socket, $socketSessionData);
                                        }
                                    },
                                    $actualChapter->requirements
                                );
                            }
                        }
                    }

                }
                $socket
//                    ->to($roomId)
                    ->emit('updatePlayer', $self->serializer->normalize($socketSessionData, 'array'));
                $socket
                    ->to($self->socketIOServer->monsterServerId)
                    ->emit('updatePlayer', $self->serializer->normalize($socketSessionData, 'array'));

                $socketSessionData
                    ->setAttack(null);
            }
        );

        return $this;
    }

}
