<?php

namespace AppBundle\ServerEvents\SceneActions;


use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\DropItem;
use Symfony\Component\EventDispatcher\Event;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service
 */
class OnAddDroppedItem extends AbstractEvent
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
            'addDroppedItem',
            function ($itemKey) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $droppedItem = DropItem::getDroppedItem($socketSessionData->getActiveRoom()->getActiveScene(), $itemKey);
                if ($droppedItem) {
                    $player = $socketSessionData->getActivePlayer();

                    if ($this->itemManager->isPlayerHaveMaxItemsInInventory($player)) {
                        return $socket->emit('addDroppedItem', [
                            'itemKey' => null
                        ]);
                    }

                    $newItem = $self->itemManager->create()
                        ->setPlayer($player)
                        ->setItemId($droppedItem->getItemId())
                        ->setEquip(0)
                        ->setImprovement($droppedItem->getImprovement());

                    $self->itemManager->update($newItem);
                    $self->playerManager->refresh($socketSessionData->getActivePlayer());

                    $socket->emit('updatePlayerEquip', $self->serializer->serialize([
                        'activePlayer' => [
                            'id' => $socketSessionData->getActivePlayer()->getId(),
                            'statistics' => $socketSessionData->getActivePlayer()->getStatistics(),
                            'allStatistics' => $socketSessionData->getActivePlayer()->getAllStatistics(),
                            'attributes' => $socketSessionData->getActivePlayer()->getAttributes(),
                            'items' => $socketSessionData->getActivePlayer()->getItems(),
                        ]
                    ], 'array'));
                    $socket->emit('addDroppedItem', [
                        'itemKey' => $itemKey
                    ]);
                }
            }
        );

        return $this;
    }
}
