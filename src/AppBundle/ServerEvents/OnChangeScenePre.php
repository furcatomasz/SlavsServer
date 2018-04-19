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
            function ($data) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $playerSceneType   = $data['sceneType'];
                $scene             = Factory::createSceneByType($playerSceneType);

                $newRoom = (new Room())
                    ->setId($socket->id)
                    ->setName('RoomTest')
                    ->setMonsters($scene->monsters);
                $socketSessionData
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

                /*
                * TODO: monster server call
                 *                 $io                = $event->getIo();

                 *                 $roomId                        = $socketSessionData->getActiveRoom()->getId();

                   $io->to(
                       $socketSessionData->getMonsterServerId(),
                       [
                        'enemies' => $newRoom->getEnemies(),
                        'roomId'  => $roomId
                       ]
                   );
                   */

                $serializer = $this->getSerializerWithNormalizer();
                $playerSessionData = $serializer->normalize($socketSessionData, 'array');

                $socket->emit('showPlayer', $playerSessionData);
            }
        );

        return $this;
    }

}