<?php

namespace AppBundle\ServerEvents;


use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class OnSetTargetPoint extends AbstractEvent
{

    /**
     * @DI\Inject("serializer")
     *
     * @var Serializer
     */
    public $serializer;

    /**
     * @DI\Inject("app.server.socket")
     *
     * @var SocketIO
     **/
    public $socketIOServer;

    /**
     * @DI\Observe("connection.established.event")
     * @param ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(ConnectionEstablishedEvent $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self   = $this;
        $socket->on(
            'setTargetPoint',
            function ($data) use ($self, $event, $socket) {
                $io                = $event->getIo();
                $socketSessionData = $event->getSocketSessionData();
                $socketSessionData
                    ->setAttack(false)
                    ->setPosition($data['position']);
var_dump($socketSessionData->getPosition());
//                serverIO.in(character.roomId).emit('updatePlayer', character);
//                serverIO.to(self.monsterServerSocketId).emit('updatePlayer', character);
            }
        );

        return $this;
    }

}