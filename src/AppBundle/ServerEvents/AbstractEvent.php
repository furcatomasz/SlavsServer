<?php

namespace AppBundle\ServerEvents;

use AppBundle\Server\ConnectionEstablishedEvent;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

abstract class AbstractEvent
{
    /**
     * @param ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    abstract public function registerEvent(ConnectionEstablishedEvent $event): AbstractEvent;

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