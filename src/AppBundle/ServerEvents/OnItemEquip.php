<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Items\ItemFactory;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\SpecialItems\AbstractSpecialItem;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


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