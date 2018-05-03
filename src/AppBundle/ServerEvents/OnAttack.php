<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Items\AbstractItem;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\Quests\Chapter;
use GameBundle\Quests\Requirements\AbstractRequirement;
use GameBundle\Quests\Requirements\KillMonster;
use GameBundle\SpecialItems\AbstractSpecialItem;
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
                if ($socketSessionData->getLastPlayerAttack() > time() - 1) {
                    return;
                }

                $socketSessionData
                    ->setAttack($data['attack'])
                    ->setTargetPoint($data['targetPoint'])
                    ->setLastPlayerAttack(time());

                foreach ($socketSessionData->getActiveRoom()->getMonsters() as $monsterKey => $monster) {
                    /** @var AbstractMonster $monster */
                    foreach ($monster->getAvailableAttacksFromCharacters() as $attackedPlayerId => $isAttacked) {
                        if ($player->getId() == $attackedPlayerId) {
                            $damage = $player->getAllStatistics()->getDamage();
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
                                        /** @var AbstractSpecialItem $specialItem */
                                        $specialItem->addItem(
                                            $player,
                                            $self->playerManager
                                        );
                                        $socket->emit('addSpecialItem', $specialItem);
                                    }

                                }

                                //Add Item
                                $itemsToDrop = $monster->getItemsToDrop();
                                if (count($itemsToDrop)) {
                                    foreach ($itemsToDrop as $itemToDrop) {
                                        if(!$socketSessionData->getItemsToDrop()) {
                                            $socketSessionData->setItemsToDrop([$itemToDrop]);
                                        } else {
                                            $itemsToDrop = $socketSessionData->getItemsToDrop();
                                            $itemsToDrop[] = $itemToDrop;
                                            $socketSessionData->setItemsToDrop($itemsToDrop);
                                            end($itemsToDrop);
                                        }

                                        $socket->emit('showDroppedItem', [
                                                     'item' => $self->serializer->normalize($itemToDrop, 'array'),
                                                     'itemKey' => key($itemsToDrop),
                                                     'position' => $monster->getPosition(),
                                                 ]);
                                    }

                                }

                                $monster->setAvailableAttacksFromCharacters([]);
                                $self->playerManager->addExperience($player, $socket, $monster->getExperience());

                                $quest = $socketSessionData->getActiveRoom()->getActiveQuest();
                                if($quest) {
                                    /** @var Chapter $actualChapter */
                                    $actualChapter = $quest->chapters[$quest->actualChapter];
                                    array_map(function(AbstractRequirement $requirement) use ($monster, $socket, $socketSessionData) {
                                        if($requirement instanceof KillMonster && $requirement->monsterToKill->type == $monster->type) {
                                            $requirement->passRequirement($socket, $socketSessionData);
                                        }
                                    }, $actualChapter->requirements);
                                }
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
                    ->setAttack(false);
            }
        );

        return $this;
    }

}