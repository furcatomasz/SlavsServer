<?php

namespace AppBundle\ServerEvents\Player;

use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\ItemFactory;
use Symfony\Component\EventDispatcher\Event;
use JMS\DiExtraBundle\Annotation as DI;


/**
 * @DI\Service
 */
class OnItemEquip extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @DI\Inject("manager.item")
     *
     * @var ItemManager
     */
    public $itemManager;

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
            'itemEquip',
            function ($data) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $player            = $socketSessionData->getActivePlayer();
                $itemId            = $data['id'];
                $item              = $self->itemManager->getRepo()->findbyPlayerAndId($player, $itemId);

                $self->itemManager->equipItem($player, ItemFactory::create($item));

                $socket
//                    ->to($roomId)
                    ->emit('updatePlayerEquip', $self->serializer->normalize($socketSessionData, 'array'));


            }
        );

        return $this;
    }
}