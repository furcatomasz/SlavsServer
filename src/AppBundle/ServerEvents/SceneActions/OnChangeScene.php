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
class OnChangeScene extends AbstractEvent
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
            'changeSceneTrigger',
            function ($sceneType) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                Factory::setNewActiveScene($socketSessionData, $sceneType);

                $socket->emit('changeScene', $sceneType);
                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('changeScene', $sceneType);

                $socket->to($self->socketIOServer->monsterServerId)->emit(
                    'removePlayer',
                    $socketSessionData->getConnectionId()
                );

            }
        );

        return $this;
    }

}
