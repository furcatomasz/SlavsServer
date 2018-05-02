<?php

namespace AppBundle\ServerEvents;


use AppBundle\Entity\Player;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


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
            }
        );

        return $this;
    }

}