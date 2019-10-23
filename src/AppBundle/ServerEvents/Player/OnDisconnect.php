<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
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
     * @var ServerSocket
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
                if ($socketSessionData->getConnectionId()) {
                    $socket->to($self->socketIOServer->monsterServerId)->emit(
                        'removePlayer',
                        $socketSessionData->getConnectionId()
                    );

                    $room = $socketSessionData->getActiveRoom();
                    $player      = $socketSessionData->getActivePlayer();
                    if($room && $player) {
                        $roomPlayers = $room->getPlayers();
                        unset($roomPlayers[$player->getId()]);
                        $room->setPlayers($roomPlayers);

                        if(!count($roomPlayers)) {
                            $self->socketIOServer->rooms->deleteRoom($room->getId());
                        }

                        $socket
                            ->in($room->getId())
                            ->emit('removePlayer', $player->getId());
                    }


                }
            }
        );

        return $this;
    }
}
