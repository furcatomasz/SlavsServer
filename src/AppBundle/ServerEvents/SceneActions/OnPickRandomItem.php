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
use GameBundle\Quests\AbstractQuest;
use GameBundle\Scenes\Factory;
use GameBundle\SpecialItems\AbstractSpecialItem;
use GameBundle\SpecialItems\Gold;
use GameBundle\SpecialItems\Randomizer\RandomSpecialItem;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnPickRandomItem extends AbstractEvent
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
            'pickRandomItem',
            function ($specialItemKey) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = $socketSessionData->getActiveRoom()->getActiveScene();
                $player            = $socketSessionData->getActivePlayer();
                $self->managerSpecialItem->refresh($player);

                /** @var RandomSpecialItem $randomSpecialItem */
                if (!array_key_exists($specialItemKey, $scene->randomSpecialItems)) {
                    return;
                }
                $randomSpecialItem = $scene->randomSpecialItems[$specialItemKey];
                if ($randomSpecialItem->isPicked()) {
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
                $randomSpecialItem->setIsPicked(true);
                $randomSpecialItem->getSpecialItem()->addItem(
                    $player,
                    $this->managerSpecialItem
                );
                $socket->emit('addSpecialItem', $randomSpecialItem->getSpecialItem());
                $socket->emit(
                    'refreshRandomSpecialItems',
                    $self->serializer->normalize($scene->randomSpecialItems, 'array')
                );
                $socket
                    ->in($socketSessionData->getActiveRoom()->getId())
                    ->emit('refreshRandomSpecialItems', $self->serializer->normalize($scene->randomSpecialItems, 'array'));
            }
        );

        return $this;
    }

}
