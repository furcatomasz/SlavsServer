<?php

namespace AppBundle\ServerEvents;

use AppBundle\Server\ServerSocket;
use JMS\Serializer\Serializer;
use Symfony\Component\EventDispatcher\Event;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service()
 */
abstract class AbstractEvent
{
    /**
     * @DI\Inject("app.server.socket")
     *
     * @var ServerSocket
     **/
    public $socketIOServer;

    /**
     * @DI\Inject("jms_serializer")
     *
     * @var Serializer
     */
    public $serializer;

    /**
     * @param Event $event
     *
     * @return AbstractEvent
     */
    abstract public function registerEvent(Event $event): AbstractEvent;

}
