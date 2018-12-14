<?php

namespace AppBundle\ServerEvents\SceneInit;

use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnChangeScenePost extends AbstractEvent
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
            'changeScenePost',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $monsters          = $socketSessionData->getActiveRoom()->getMonsters();

                $socket->to($self->socketIOServer->monsterServerId)->emit(
                    'showPlayer',
                    $self->serializer->normalize($socketSessionData, 'array')
                );
                $socket->emit(
                    'showEnemies',
                    $self->serializer->normalize($monsters, 'array')
                );

                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('updatePlayer', $socketSessionData);
            }
        );

        return $this;
    }

}
