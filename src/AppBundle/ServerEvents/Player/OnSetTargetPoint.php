<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnSetTargetPoint extends AbstractEvent
{

    /**
     * @DI\Observe("connection.established.event")
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self = $this;
        $socket->on(
            'setTargetPoint',
            function ($data) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $socketSessionData
                    ->setAttack(null)
                    ->setTargetPoint($data['position']);

                $socket->to($self->socketIOServer->monsterServerId)->emit('updatePlayer', [
                    'activePlayerId' => $socketSessionData->getActivePlayer()->getId(),
                    'activePlayerAttack' => $socketSessionData->getAttack(),
                    'activeRoomId' => $socketSessionData->getActiveRoom()->getId(),
                    'targetPoint' => $socketSessionData->getTargetPoint()
                ]);

                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('updatePlayer', [
                        'attack' => $socketSessionData->getAttack(),
                        'targetPoint' => $socketSessionData->getTargetPoint(),
                        'activePlayer' => [
                            'id' => $socketSessionData->getActivePlayer()->getId(),
                            'statistics' => [
                                'hp' => $socketSessionData->getActivePlayer()->getStatistics()->getHp(),
                                'energy' => $socketSessionData->getActivePlayer()->getStatistics()->getEnergy()
                            ]
                        ],
                    ]);
            }
        );

        return $this;
    }

}
