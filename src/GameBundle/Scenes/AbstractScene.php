<?php

namespace GameBundle\Scenes;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Gateways\AbstractGateway;
use GameBundle\Monsters\AbstractMonster;
use GameBundle\SpecialItems\AbstractSpecialItem;
use GameBundle\SpecialItems\Randomizer\RandomSpecialItem;

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
     * @var array|RandomSpecialItem
     */
    public $randomSpecialItems;

    /**
     * @var array
     */
    public $itemsToDrop;

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
        $this->itemsToDrop        = [];
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

    /**
     * @return array
     */
    public function getGateways(): array
    {
        return $this->gateways;
    }

    /**
     * @param array $gateways
     *
     * @return $this
     */
    public function setGateways($gateways)
    {
        $this->gateways = $gateways;

        return $this;
    }

    /**
     * @return array
     */
    public function getQuests(): array
    {
        return $this->quests;
    }

    /**
     * @param array $quests
     *
     * @return $this
     */
    public function setQuests($quests)
    {
        $this->quests = $quests;

        return $this;
    }

    /**
     * @return array
     */
    public function getChests(): array
    {
        return $this->chests;
    }

    /**
     * @param array $chests
     *
     * @return $this
     */
    public function setChests($chests)
    {
        $this->chests = $chests;

        return $this;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return $this->type;
    }

    /**
     * @param int $type
     *
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return array|AbstractMonster
     */
    public function getMonsters()
    {
        return $this->monsters;
    }

    /**
     * @param array|AbstractMonster $monsters
     *
     * @return $this
     */
    public function setMonsters($monsters)
    {
        $this->monsters = $monsters;

        return $this;
    }

    /**
     * @return array|RandomSpecialItem
     */
    public function getRandomSpecialItems()
    {
        return $this->randomSpecialItems;
    }

    /**
     * @param array|RandomSpecialItem $randomSpecialItems
     *
     * @return $this
     */
    public function setRandomSpecialItems($randomSpecialItems)
    {
        $this->randomSpecialItems = $randomSpecialItems;

        return $this;
    }

    /**
     * @return array
     */
    public function getItemsToDrop(): array
    {
        return $this->itemsToDrop;
    }

    /**
     * @param array $itemsToDrop
     *
     * @return $this
     */
    public function setItemsToDrop($itemsToDrop)
    {
        $this->itemsToDrop = $itemsToDrop;

        return $this;
    }

}
