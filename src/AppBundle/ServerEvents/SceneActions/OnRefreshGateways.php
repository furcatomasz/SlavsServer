<?php

namespace AppBundle\ServerEvents\SceneActions;

use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnRefreshGateways extends AbstractEvent
{

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
            'refreshGateways',
            function () use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $scene = $socketSessionData->getActiveRoom()->getActiveScene();
                $scene->refreshGatewaysData($socketSessionData);

                $socket->emit(
                    'refreshGateways',
                    $self->serializer->serialize([
                        'gateways' => $scene->getGateways()
                    ], 'array')
                );

            }
        );

        return $this;
    }

}
