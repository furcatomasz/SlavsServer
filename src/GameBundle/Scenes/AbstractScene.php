<?php

namespace GameBundle\Scenes;

use AppBundle\Storage\SocketSessionData;
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
     * @var array
     */
    public $quests;

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
        $this->monsters = [];
        $this->quests   = [];
        $this->gateways = [];
        $this->type     = static::TYPE;
    }

    /**
     * @param SocketSessionData $socketSessionData
     *
     * @return AbstractScene
     */
    public function refreshGatewaysData(SocketSessionData $socketSessionData): AbstractScene
    {
        foreach ($this->gateways as $gateway) {
            /** @var AbstractGateway $gateway */
            $gateway->verifyIsActive($socketSessionData);
        }

        return $this;
    }


}
