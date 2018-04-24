<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class OnChangeScenePre extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

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
            'changeScenePre',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();

                $serializer = $this->getSerializerWithNormalizer();
                $playerSessionData = $serializer->normalize($socketSessionData, 'array');

                $socket->emit('showPlayer', $playerSessionData);
            }
        );

        return $this;
    }

}