<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerAttributesManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\ItemFactory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnDisconnect extends AbstractEvent
{

    /**
     * @DI\Inject("app.server.socket")
     *
     * @var SocketIO
     **/
    public $socketIOServer;

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
            'disconnect',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $socket->to($self->socketIOServer->monsterServerId)->emit(
                    'removePlayer',
                    $socketSessionData->getConnectionId()
                );}
        );

        return $this;
    }
}