<?php

namespace AppBundle\ServerEvents\MonsterServer;


use AppBundle\Server\MonsterServerConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use AppBundle\Storage\SocketSessionData;
use GameBundle\Rooms\Room;
use Symfony\Component\EventDispatcher\Event;
use JMS\DiExtraBundle\Annotation as DI;


/**
 * @DI\Service
 */
class OnUpdatePlayerPosition extends AbstractEvent
{

    /**
     * @DI\Observe("monster.server.connection.established.event")
     * @param Event|MonsterServerConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self = $this;
        $socket->on(
            'updatePlayerPosition',
            function ($data) use ($self, $event, $socket) {
                /** @var Room $room */
                $playerId = $data['playerKey'];
                $position = $data['position'];
                $roomId = $data['roomId'];
                $room = $self->socketIOServer->rooms->getRoom($roomId);

                if(!$room) {
                    return;
                }
                $player = $room->getPlayers()[$playerId];
                if(!$player) {
                    return;
                }

                /** @var SocketSessionData $player */
                $player
                    ->setPosition($position);

            }
        );

        return $this;
    }

}
