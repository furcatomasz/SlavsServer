<?php

namespace AppBundle\ServerEvents\SelectCharacter;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Battleground;
use GameBundle\Scenes\CaveExit;
use GameBundle\Scenes\Factory;
use GameBundle\Scenes\ForestHouse;
use GameBundle\Scenes\ForestHouseStart;
use GameBundle\Scenes\MountainsPass;
use GameBundle\Scenes\Town\Arena;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnSelectCharacter extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    public $socketPlayer = null;

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
            'selectCharacter',
            function ($playerId) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();

                if(!$self->socketPlayer) {
                    $self->socketPlayer = 2;
                }

                $activePlayer      = $self->playerManager->getRepo()->find($self->socketPlayer);
                $self->socketPlayer -= 1;
//                $activePlayer      = $self->playerManager->getRepo()->find($playerId);

                //Reset stats after login
                if($activePlayer->statistics) {
                    $activePlayer->statistics = null;
                }

                //TODO: ROOMS
                $roomName = (string) 'RoomTest';
                $room = $self->socketIOServer->rooms->getRoom($roomName);
                if(!$room) {
                    $room    = (new Room())
                        ->setId($roomName)
                        ->setName($roomName)
                        ->setPlayers([$activePlayer->getId() => $socketSessionData]);

                    $self->socketIOServer->rooms->addRoom($room);
                    $socket
                        ->to($self->socketIOServer->monsterServerId)
                        ->emit('createRoom', $room->getId());
                    $newSceneType = ForestHouseStart::TYPE;
//                    $newSceneType = Battleground::TYPE;
                } else {
                    $newPlayerList = $room->getPlayers();
                    $newPlayerList[$activePlayer->getId()] = $socketSessionData;
                    $room->setPlayers($newPlayerList);

                    $newSceneType = $room->getActiveScene()->getType();
                }
                $socket->join($roomName);
                $socketSessionData
                    ->setActiveRoom($room)
                    ->setActivePlayer($activePlayer);

                $scene = Factory::setNewActiveScene($socketSessionData, $newSceneType);
                $socket->emit('changeScene', $scene->type);
            }
        );

        return $this;
    }

}
