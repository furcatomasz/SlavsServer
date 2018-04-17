<?php

namespace GameBundle\Gateways;

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


    abstract public function verifyIsActive(): AbstractGateway;

}
