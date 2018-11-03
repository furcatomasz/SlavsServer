<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Manager\PlayerAttributesManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use AppBundle\ServerEvents\AbstractEvent;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnAddAttribute extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @DI\Inject("manager.player_attributes")
     *
     * @var PlayerAttributesManager
     */
    public $playerAttributesManager;

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
            'addAttribute',
            function ($attribute) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $player            = $socketSessionData->getActivePlayer();
                $type              = $attribute['type'];
                $self->playerAttributesManager->addAttribute($player->getAttributes(), $type);

                $player->setFreeAttributesPoints($player->getFreeAttributesPoints() - 1);
                $self->playerManager
                    ->update($player)
                    ->refreshStatistics($player);

                $socket->emit('attributeAdded', $self->serializer->normalize($socketSessionData, 'array'));
            }
        );

        return $this;
    }
}
