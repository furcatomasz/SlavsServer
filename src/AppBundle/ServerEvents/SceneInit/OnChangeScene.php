<?php

namespace AppBundle\ServerEvents\SceneInit;


use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnChangeScene extends AbstractEvent
{

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
            'changeScene',
            function ($sceneType) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene             = Factory::getExistingSceneOrCreateNew($socketSessionData, $sceneType);
                $socketSessionData->setActiveScene($scene);

                $socket->emit('changeScene', $scene->type);
            }
        );

        return $this;
    }

}
