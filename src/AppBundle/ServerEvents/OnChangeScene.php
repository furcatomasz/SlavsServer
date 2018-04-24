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
class OnChangeScene extends AbstractEvent
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
            'changeScene',
            function ($sceneType) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = Factory::createSceneByType($sceneType);
                $serializer        = $this->getSerializerWithNormalizer();

                $newRoom = (new Room())
                    ->setId($socket->id)
                    ->setName('RoomTest')
                    ->setMonsters($scene->monsters);
                $socketSessionData
                    ->setActiveScene($scene->type)
                    ->setActiveRoom($newRoom)
                    ->setActivePlayer($self->playerManager->getRepo()->find(1));

                $self->socketIOServer->rooms[] = $newRoom;
                $socketSessionData->setPosition(
                    [
                        'x' => 0,
                        'y' => 0,
                        'z' => 0,
                    ]
                );

                ///Call to monster server about create new room
                $monsters = $serializer->normalize($newRoom->getMonsters(), 'array');
                $socket
                    ->to($self->socketIOServer->monsterServerId)
                    ->emit('createRoom', $newRoom->getId());
                ///Call to monster server about create enemies
                $socket
                    ->to($self->socketIOServer->monsterServerId)
                    ->emit(
                        'createEnemies',
                        [
                            'enemies' => $monsters,
                            'roomId'  => $socketSessionData->getActiveRoom()->getId()
                        ]
                    );

                $socket->emit('changeScene', $scene->type);
            }
        );

        return $this;
    }

}