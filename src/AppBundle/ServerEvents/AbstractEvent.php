<?php

namespace AppBundle\ServerEvents;

use AppBundle\Server\ServerSocket;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Serializer;
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
     * @var \JMS\Serializer\Serializer
     */
    protected $serializer;

    /**
     * AbstractEvent constructor.
     */
    public function __construct()
    {
        $this->serializer = \AppBundle\Helper\Serializer::getSerializerWithNormalizer();
    }

    /**
     * @param Event $event
     *
     * @return AbstractEvent
     */
    abstract public function registerEvent(Event $event): AbstractEvent;

}
