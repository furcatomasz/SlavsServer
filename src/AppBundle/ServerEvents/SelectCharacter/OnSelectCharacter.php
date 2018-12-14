<?php

namespace AppBundle\ServerEvents\SelectCharacter;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Battleground;
use GameBundle\Scenes\CaveExit;
use GameBundle\Scenes\Factory;
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
//                $activePlayer      = $self->playerManager->getRepo()->find($playerId);
                $activePlayer      = $self->playerManager->getRepo()->find(rand(1,4));

                //Reset stats after login
                if($activePlayer->statistics) {
                    $activePlayer->statistics = null;
                }

                $startScene = new MountainsPass();
                $scene      = Factory::createSceneByType($startScene::TYPE);

                //TODO: ROOMS
                $newRoom    = (new Room())
                    ->setId('RoomTest')
                    ->setName('RoomTest')
                    ->setPlayers([$activePlayer->getId() => $socketSessionData]);
                $socket->join('RoomTest');
                $socketSessionData
                    ->setActiveScene($scene)
                    ->setActiveRoom($newRoom)
                    ->setActivePlayer($activePlayer);

                $self->socketIOServer->rooms[$newRoom->getId()] = $newRoom;
                $socketSessionData->setPosition($startScene::START_POSITION);

                $socket
                    ->to($self->socketIOServer->monsterServerId)
                    ->emit('createRoom', $newRoom->getId());

                $socket->emit('changeScene', $scene->type);
            }
        );

        return $this;
    }

}
