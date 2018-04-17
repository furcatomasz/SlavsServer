<?php

namespace GameBundle\Scenes;

use GameBundle\Gateways\AbstractGateway;
use GameBundle\Monsters\AbstractMonster;

abstract class AbstractScene
{
    const TYPE = 0;

    /**
     * @var array
     */
    public $gateways;

    /**
     * @var int
     */
    public $type;

    /**
     * @var array|AbstractMonster
     */
    public $monsters;

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        $this->type = static::TYPE;
    }

    /**
     * @return AbstractScene
     */
    public function refreshGatewaysData(): AbstractScene
    {
        foreach ($this->gateways as $gateway) {
            /** @var AbstractGateway $gateway */
            $gateway->verifyIsActive();
        }

        return $this;
    }


}
