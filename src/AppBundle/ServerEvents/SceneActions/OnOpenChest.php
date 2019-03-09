<?php

namespace AppBundle\ServerEvents\SceneActions;

use AppBundle\Entity\Player;
use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\BabylonObjects\Vector3;
use GameBundle\BabylonObjects\VectorHelper;
use GameBundle\Chests\AbstractChest;
use GameBundle\Items\AbstractItem;
use GameBundle\Items\DropItem;
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
     * @throws \Exception
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self   = $this;
        $socket->on(
            'openChest',
            function ($chestKey) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $room              = $socketSessionData->getActiveRoom();
                $player            = $socketSessionData->getActivePlayer();
                $scene             = $room->getActiveScene();
                $self->managerSpecialItem->refresh($player);

                /** @var AbstractChest $chest */
                $chest = $scene->chests[$chestKey];
                if (!$chest || ($chest && $chest->opened) ) {
                    return;
                }

                ///TODO: Check distance
//                $playerPosition = $socketSessionData->getPosition();
//                $playerPositionVector = new Vector3($playerPosition['x'], $playerPosition['y'], $playerPosition['z']);
//                $distanceForChest = VectorHelper::distance($playerPositionVector, $chest->position);
//
//                if($distanceForChest > 1) {
//                    return;
//                }

                $chest->openChest($player, $self->managerSpecialItem);
                $chestData = [
                    'chest'    => $self->serializer->normalize($chest, 'array'),
                    'chestKey' => $chestKey
                ];
                if ($chest->opened) {
                    foreach($chest->awards as $award) {
                        if($award instanceof AbstractItem) {
                            $socket->emit('showDroppedItem', [
                                'item' => $self->serializer->normalize($award, 'array'),
                                'itemKey' => DropItem::addDropItemToScene($scene, $award),
                                'position' => $chest->awardsPosition
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
                    $socket->in($room->getId())->emit('openChest', $chestData);
                }

                $socket->emit('openChest', $chestData);
            }
        );

        return $this;
    }

}
