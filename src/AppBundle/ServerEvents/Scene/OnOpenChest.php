<?php

namespace AppBundle\ServerEvents\Scene;


use AppBundle\Entity\Player;
use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Chests\AbstractChest;
use GameBundle\Items\AbstractItem;
use GameBundle\Quests\AbstractQuest;
use GameBundle\Scenes\Factory;
use GameBundle\SpecialItems\AbstractSpecialItem;
use GameBundle\SpecialItems\Gold;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnOpenChest extends AbstractEvent
{

    /**
     * @DI\Inject("manager.special_item")
     *
     * @var SpecialItemManager
     */
    public $managerSpecialItem;

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
            'openChest',
            function ($chestKey) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = Factory::createSceneByType($socketSessionData->getActiveScene());
                $player            = $socketSessionData->getActivePlayer();
                $self->managerSpecialItem->refresh($player);

                /** @var AbstractChest $chest */
                $chest = $scene->chests[$chestKey];
                if (!$chest) {
                    return;
                }

                $chest->openChest($player, $self->managerSpecialItem);
                if ($chest->opened) {
                    foreach($chest->awards as $award) {
                        if($award instanceof AbstractItem) {
                            if(!$socketSessionData->getItemsToDrop()) {
                                $socketSessionData->setItemsToDrop([$award]);
                                $itemKey = 0;
                            } else {
                                $itemsToDrop = $socketSessionData->getItemsToDrop();
                                $itemsToDrop[] = $award;
                                $socketSessionData->setItemsToDrop($itemsToDrop);
                                end($itemsToDrop);
                                $itemKey = key($itemsToDrop);
                            }

                            $socket->emit('showDroppedItem', [
                                'item' => $self->serializer->normalize($award, 'array'),
                                'itemKey' => $itemKey,
                                'position' => [
                                    'x' => 36.3,
                                    'y' => 0,
                                    'z' => -28.8
                                ]
                            ]);
                        } elseif($award instanceof AbstractSpecialItem) {
                            $manager = ($award instanceof Gold) ?
                                $self->playerManager :
                                $self->managerSpecialItem;

                            /** @var AbstractSpecialItem $award */
                            $award->addItem(
                                $player,
                                $manager
                            );
                            $socket->emit('addSpecialItem', $award);
                        }
                    }
                }

                $socket->emit(
                    'openChest',
                    [
                        'chest'    => $self->serializer->normalize($chest, 'array'),
                        'chestKey' => $chestKey
                    ]
                );
            }
        );

        return $this;
    }

}