<?php

namespace GameBundle\Statistics;

class Statistics
{
    /**
     * @var int
     */
    protected $hp;
    /**
     * @var int
     */
    protected $hpMax;
    /**
     * @var int
     */
    protected $attackSpeed;
    /**
     * @var int
     */
    protected $damage;
    /**
     * @var int
     */
    protected $armor;
    /**
     * @var int
     */
    protected $walkSpeed;
    /**
     * @var int
     */
    protected $blockChance;
    /**
     * @var int
     */
    protected $hitChance;

    /**
     * Statistics constructor.
     *
     * @param int $hp
     * @param int $hpMax
     * @param int $attackSpeed
     * @param int $damage
     * @param int $armor
     * @param int $walkSpeed
     * @param int $blockChance
     * @param int $hitChance
     */
    public function __construct(
        int $hp,
        int $hpMax,
        int $attackSpeed,
        int $damage,
        int $armor,
        int $walkSpeed,
        int $blockChance,
        int $hitChance
    ) {
        $this->hp          = $hp;
        $this->hpMax       = $hpMax;
        $this->attackSpeed = $attackSpeed;
        $this->damage      = $damage;
        $this->armor       = $armor;
        $this->walkSpeed   = $walkSpeed;
        $this->blockChance = $blockChance;
        $this->hitChance   = $hitChance;
    }

}