<?php

namespace AppBundle\ServerEvents\MonsterServer;


use AppBundle\Server\MonsterServerConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\Rooms\Room;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnSetEnemyTargetPoint extends AbstractEvent
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
        $self   = $this;
        $socket->on(
            'setEnemyTarget',
            function ($data) use ($self, $event, $socket) {
                /** @var Room $room */
                $roomId = $data['roomId'];
                $room   = $self->socketIOServer->rooms[$roomId];
                /** @var AbstractMonster $enemy */
                $enemy = $room->getMonsters()[$data['enemyKey']];

                $enemy
                    ->setPosition($data['position'])
                    ->setTarget($data['target'])
                    ->setAttack($data['attack']);
                $enemy->availableAttacksFromCharacters[$data['target']] = $data['attack'];
                $socket
                    ->in($roomId)
                    ->emit('updateEnemy', [
                        'enemy' => $self->serializer->normalize($enemy, 'array'),
                        'enemyKey' => $data['enemyKey']
                    ]);

//                $socketSessionData = $event->getSocketSessionData();
//                $socketSessionData
//                    ->setAttack(false)
//                    ->setTargetPoint($data['position']);
//                $emitData = $self->serializer->normalize($socketSessionData, 'array');
//
////                serverIO.in(character.roomId).emit('updatePlayer', character);
//                $socket->to($self->socketIOServer->monsterServerId)->emit('updatePlayer', $emitData);
////                serverIO.to(self.monsterServerSocketId).emit('updatePlayer', character);
            }
        );

        return $this;
    }

}