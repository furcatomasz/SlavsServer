<?php

namespace AppBundle\ServerEvents\Player;

use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
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
     * @var ServerSocket
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

                if ($item->getEquip() && $this->itemManager->isPlayerHaveMaxItemsInInventory($player)) {
                    return $socket->emit('addDroppedItem', $self->serializer->normalize([
                        'itemKey' => null
                    ], 'array'));

                }

                $self->itemManager->equipItem($player, ItemFactory::create($item));

                $normalize = $self->serializer->normalize($socketSessionData, 'array');
                $socket->emit('updatePlayerEquip', $normalize);
                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('updatePlayerEquip', $normalize);


            }
        );

        return $this;
    }
}
