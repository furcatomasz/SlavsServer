<?php

namespace AppBundle\ServerEvents;

use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use JMS\DiExtraBundle\Annotation as DI;

abstract class AbstractEvent
{
    /**
     * @DI\Inject("app.server.socket")
     *
     * @var SocketIO
     **/
    public $socketIOServer;

    /**
     * @var Serializer
     */
    protected $serializer;

    /**
     * AbstractEvent constructor.
     */
    public function __construct()
    {
        $this->serializer = $this->getSerializerWithNormalizer();
    }


    /**
     * @param Event $event
     *
     * @return AbstractEvent
     */
    abstract public function registerEvent(Event $event): AbstractEvent;

    /**
     * @return Serializer
     */
    protected  function getSerializerWithNormalizer()
    {
        $encoder    = new JsonEncoder();
        $normalizer = new ObjectNormalizer();
        $normalizer->setCircularReferenceHandler(
            function ($object) {
                return $object->getId();
            }
        );

        return new Serializer([$normalizer], [$encoder]);
    }
}