<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class OnChangeScenePre extends AbstractEvent
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
            'changeScenePre',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $playerSessionData = $self->serializer->normalize($socketSessionData, 'array');

                $socket->emit('showPlayer', $playerSessionData);

            }
        );

        return $this;
    }

}