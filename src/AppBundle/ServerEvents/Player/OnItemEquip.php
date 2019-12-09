<?php

namespace AppBundle\ServerEvents\Player;

use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\ItemFactory;
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
        $self = $this;
        $socket->on(
            'itemEquip',
            function ($data) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $player = $socketSessionData->getActivePlayer();
                $itemId = $data['id'];
                $item = $self->itemManager->getRepo()->findbyPlayerAndId($player, $itemId);

                if ($item->getEquip() && $this->itemManager->isPlayerHaveMaxItemsInInventory($player)) {
                    return $socket->emit('addDroppedItem', [
                        'itemKey' => null
                    ]);

                }

                $self->itemManager->equipItem($player, ItemFactory::create($item));

                $collection = $socketSessionData->getActivePlayer()->getItems();
                $updatePlayerEquipResponse = $self->serializer->serialize([
                    'activePlayer' => [
                        'id' => $socketSessionData->getActivePlayer()->getId(),
                        'statistics' => $socketSessionData->getActivePlayer()->getStatistics(),
                        'allStatistics' => $socketSessionData->getActivePlayer()->getAllStatistics(),
                        'attributes' => $socketSessionData->getActivePlayer()->getAttributes(),
                        'items' => $collection,
                    ]
                ], 'array');
                var_dump(4);

                $socket->emit('updatePlayerEquip', $updatePlayerEquipResponse);
                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('updatePlayerEquip', $updatePlayerEquipResponse);


            }
        );

        return $this;
    }
}
