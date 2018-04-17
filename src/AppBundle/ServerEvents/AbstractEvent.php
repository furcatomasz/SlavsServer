<?php

namespace AppBundle\ServerEvents;

use AppBundle\Server\ConnectionEstablishedEvent;

abstract class AbstractEvent
{
    /**
     * @param ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    abstract public function registerEvent(ConnectionEstablishedEvent $event): AbstractEvent;
}