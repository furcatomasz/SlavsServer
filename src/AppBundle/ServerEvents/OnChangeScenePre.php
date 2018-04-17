<?php

namespace AppBundle\ServerEvents;


use AppBundle\Entity\Player;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
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
                $io                = $event->getIo();
                $socketSessionData = $event->getSocketSessionData();
                $playerSceneType   = $data['sceneType'];
                $scene             = Factory::createSceneByType($playerSceneType);

                $newRoom = (new Room())
                    ->setId($socket->id)
                    ->setMonsters($scene->monsters);
                $socketSessionData->setActiveRoom($newRoom);
                $this->socketIOServer->rooms[] = $newRoom;
                $roomId                        = $socketSessionData->getActiveRoom()->getId();
                $socketSessionData->setPosition(
                    [
                        'x' => 0,
                        'y' => 0,
                        'z' => 0,
                    ]
                );

                /*
                * TODO: monster server call
                   $io->to(
                       $socketSessionData->getMonsterServerId(),
                       [
                        'enemies' => $newRoom->getEnemies(),
                        'roomId'  => $roomId
                       ]
                   );
                   */

                /** @var Player $user */
                $player     = $self->playerManager->getRepo()->find(1);
                $serializer = $this->getSerializerWithNormalizer();
                $playerData = $serializer->normalize($player, 'array');
var_dump('showplayer');
                $socket->emit('showPlayer', $playerData);


            }
        );

        return $this;
    }

}