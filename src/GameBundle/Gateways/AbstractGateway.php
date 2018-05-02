<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;

abstract class AbstractGateway
{
    const TYPE = 0;

    /**
     * @var int
     */
    public $openSceneType;

    /**
     * @var boolean
     */
    public $isActive;

    /**
     * @var int
     */
    public $objectName;

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    abstract public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway;

}
