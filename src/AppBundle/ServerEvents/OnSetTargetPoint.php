<?php

namespace AppBundle\ServerEvents;


use AppBundle\Server\ConnectionEstablishedEvent;
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
        $self   = $this;
        $socket->on(
            'setTargetPoint',
            function ($data) use ($self, $event, $socket) {

                $socketSessionData = $event->getSocketSessionData();
                $socketSessionData
                    ->setAttack(null)
                    ->setTargetPoint($data['position']);
                $emitData = $self->serializer->normalize($socketSessionData, 'array');

//                serverIO.in(character.roomId).emit('updatePlayer', character);
                $socket->to($self->socketIOServer->monsterServerId)->emit('updatePlayer', $emitData);
//                serverIO.to(self.monsterServerSocketId).emit('updatePlayer', character);
            }
        );

        return $this;
    }

}