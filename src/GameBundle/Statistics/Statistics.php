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
     * @var float
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
     * @param float $walkSpeed
     * @param int $blockChance
     * @param int $hitChance
     */
    public function __construct(
        int $hp,
        int $hpMax,
        int $attackSpeed,
        int $damage,
        int $armor,
        float $walkSpeed,
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

    /**
     * @return int
     */
    public function getHp(): int
    {
        return $this->hp;
    }

    /**
     * @return int
     */
    public function getHpMax(): int
    {
        return $this->hpMax;
    }

    /**
     * @return int
     */
    public function getAttackSpeed(): int
    {
        return $this->attackSpeed;
    }

    /**
     * @return int
     */
    public function getDamage(): int
    {
        return $this->damage;
    }

    /**
     * @return int
     */
    public function getArmor(): int
    {
        return $this->armor;
    }

    /**
     * @return float
     */
    public function getWalkSpeed(): float
    {
        return $this->walkSpeed;
    }

    /**
     * @return int
     */
    public function getBlockChance(): int
    {
        return $this->blockChance;
    }

    /**
     * @return int
     */
    public function getHitChance(): int
    {
        return $this->hitChance;
    }

    /**
     * @param int $hp
     *
     * @return Statistics
     */
    public function setHp(int $hp): Statistics
    {
        $this->hp = $hp;

        return $this;
    }

    /**
     * @param int $hpMax
     *
     * @return Statistics
     */
    public function setHpMax(int $hpMax): Statistics
    {
        $this->hpMax = $hpMax;

        return $this;
    }

    /**
     * @param int $attackSpeed
     *
     * @return Statistics
     */
    public function setAttackSpeed(int $attackSpeed): Statistics
    {
        $this->attackSpeed = $attackSpeed;

        return $this;
    }

    /**
     * @param int $damage
     *
     * @return Statistics
     */
    public function setDamage(int $damage): Statistics
    {
        $this->damage = $damage;

        return $this;
    }

    /**
     * @param int $armor
     *
     * @return Statistics
     */
    public function setArmor(int $armor): Statistics
    {
        $this->armor = $armor;

        return $this;
    }

    /**
     * @param float $walkSpeed
     *
     * @return Statistics
     */
    public function setWalkSpeed(float $walkSpeed): Statistics
    {
        $this->walkSpeed = $walkSpeed;

        return $this;
    }

    /**
     * @param int $blockChance
     *
     * @return Statistics
     */
    public function setBlockChance(int $blockChance): Statistics
    {
        $this->blockChance = $blockChance;

        return $this;
    }

    /**
     * @param int $hitChance
     *
     * @return Statistics
     */
    public function setHitChance(int $hitChance): Statistics
    {
        $this->hitChance = $hitChance;

        return $this;
    }

}