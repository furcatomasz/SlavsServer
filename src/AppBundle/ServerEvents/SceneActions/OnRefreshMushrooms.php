<?php

namespace AppBundle\ServerEvents\SceneActions;

use AppBundle\Entity\Player;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnRefreshMushrooms extends AbstractEvent
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
            'refreshRandomSpecialItems',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = $socketSessionData->getActiveRoom()->getActiveScene();

                $socket->emit(
                    'refreshRandomSpecialItems',
                    $self->serializer->serialize($scene->randomSpecialItems, 'array')
                );
            }
        );

        return $this;
    }

}
