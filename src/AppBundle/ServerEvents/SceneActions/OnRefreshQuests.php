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
class OnRefreshQuests extends AbstractEvent
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
            'refreshQuests',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = $socketSessionData->getActiveRoom()->getActiveScene();

                $socket->emit(
                    'refreshQuests',
                    [
                        'quests'      => $self->serializer->serialize($scene->quests, 'array'),
                        'activeQuest' => $self->serializer->serialize($socketSessionData->getActiveRoom()->getActiveQuest(), 'array'),
                    ]
                );

            }
        );

        return $this;
    }

}
