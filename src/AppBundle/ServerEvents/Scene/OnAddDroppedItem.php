<?php

namespace AppBundle\ServerEvents;


use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use GameBundle\Items\AbstractItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\SpecialItems\AbstractSpecialItem;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


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
            'addDroppedItem',
            function ($itemKey) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $droppedItems      = $socketSessionData->getItemsToDrop();
                if ($droppedItems && array_key_exists($itemKey, $droppedItems)) {
                    /** @var AbstractItem $droppedItem */
                    $dropppedItem = $droppedItems[$itemKey];
                    $player       = $socketSessionData->getActivePlayer();

                    $newItem = $self->itemManager->create()
                        ->setPlayer($player)
                        ->setItemId($dropppedItem::ITEM_ID)
                        ->setEquip(0)
                        ->setImprovement(0);
                    $self->itemManager->update($newItem);
                    $self->playerManager->refresh($socketSessionData->getActivePlayer());

                    $socket->emit('updatePlayerEquip', $self->serializer->normalize($socketSessionData, 'array'));
                }
            }
        );

        return $this;
    }
}