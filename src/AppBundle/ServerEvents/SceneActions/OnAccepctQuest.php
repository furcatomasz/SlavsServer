<?php

namespace AppBundle\ServerEvents\SceneActions;


use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Quests\AbstractQuest;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnAccepctQuest extends AbstractEvent
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
            'acceptQuest',
            function ($questId) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = $socketSessionData->getActiveRoom()->getActiveScene();
                $selectedQuest     = null;
                foreach ($scene->quests as $quest) {
                    /** @var AbstractQuest $quest */
                    if ($quest::QUEST_ID == $questId) {
                        $selectedQuest = $quest;
                    }
                }
                $socketSessionData->getActiveRoom()->setActiveQuest($selectedQuest);

                $socket->emit(
                    'refreshQuests',
                    [
                        'quests'      => $self->serializer->normalize($scene->quests, 'array'),
                        'sessionData' => $self->serializer->normalize($socketSessionData, 'array'),
                    ]
                );
            }
        );

        return $this;
    }

}
