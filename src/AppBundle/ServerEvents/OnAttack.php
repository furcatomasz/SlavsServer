<?php

namespace AppBundle\ServerEvents;


use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Monsters\AbstractMonster;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class OnAttack extends AbstractEvent
{

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
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self   = $this;
        $socket->on(
            'attack',
            function ($data) use ($self, $event, $socket) {
                $io                = $event->getIo();
                $socketSessionData = $event->getSocketSessionData();

                if($socketSessionData->getLastPlayerAttack() > time()-1) {
                    return;
                }

                $socketSessionData
                    ->setAttack($data['attack'])
                    ->setPosition($data['targetPoint'])
                    ->setLastPlayerAttack(time());

                foreach($socketSessionData->getActiveRoom()->getMonsters() as $monster) {
                    /** @var AbstractMonster $monster */
                    foreach($monster->getAvailableAttacksFromCharacters() as $isAttacked) {
                        if($isAttacked) {
                            var_dump('attack');
                        }

                    }
                }
//                serverIO.in(activeCharacter.roomId).emit('updatePlayer', activeCharacter);
//                serverIO.to(self.monsterServerSocketId).emit('updatePlayer', activeCharacter);
            }
        );

        return $this;
    }

}