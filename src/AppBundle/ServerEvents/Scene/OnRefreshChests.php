<?php

namespace AppBundle\ServerEvents\Scene;


use AppBundle\Entity\Player;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnRefreshChests extends AbstractEvent
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
            'refreshChests',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = Factory::createSceneByType($socketSessionData->getActiveScene());

                $socket->emit(
                    'refreshChests',
                    $self->serializer->normalize($scene->chests, 'array')
                );
            }
        );

        return $this;
    }

}