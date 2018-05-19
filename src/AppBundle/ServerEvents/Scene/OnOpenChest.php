<?php

namespace AppBundle\ServerEvents\Scene;


use AppBundle\Entity\Player;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Chests\AbstractChest;
use GameBundle\Quests\AbstractQuest;
use GameBundle\Scenes\Factory;
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
                /** @var AbstractChest $chest */
                $chest = $scene->chests[$chestKey];
                if (!$chest) {
                    return;
                }

                $chest->openChest($player, $self->managerSpecialItem);
                if ($chest->opened) {
                    ///addAwards
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