<?php

namespace GameBundle\Scenes;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Gateways\AbstractGateway;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\SpecialItems\AbstractSpecialItem;

abstract class AbstractScene
{
    const TYPE = 0;
    const START_POSITION = [
        'x' => 0,
        'y' => 0,
        'z' => 0,
    ];

    /**
     * @var array
     */
    public $gateways;

    /**
     * @var array
     */
    public $quests;

    /**
     * @var array
     */
    public $chests;

    /**
     * @var int
     */
    public $type;

    /**
     * @var array|AbstractMonster
     */
    public $monsters;

    /**
     * @var array|AbstractSpecialItem
     */
    public $randomSpecialItems;

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        $this->monsters           = [];
        $this->quests             = [];
        $this->gateways           = [];
        $this->chests             = [];
        $this->randomSpecialItems = [];
        $this->type               = static::TYPE;
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
