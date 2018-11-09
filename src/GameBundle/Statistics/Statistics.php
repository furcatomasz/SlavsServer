<?php

namespace GameBundle\Statistics;

class Statistics
{
    /**
     * @var int
     */
    protected $hp = 0;
    /**
     * @var int
     */
    protected $hpMax = 0;
    /**
     * @var int
     */
    protected $energy = 0;
    /**
     * @var int
     */
    protected $energyMax = 0;
    /**
     * @var int
     */
    protected $damageMin = 0;
    /**
     * @var int
     */
    protected $damageMax = 0;
    /**
     * @var int
     */
    protected $armor = 0;
    /**
     * @var float
     */
    protected $walkSpeed = 0;
    /**
     * @var int
     */
    protected $blockChance = 0;
    /**
     * @var int
     */
    protected $hitChance = 0;


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

    /**
     * @return int
     */
    public function getEnergy(): int
    {
        return $this->energy;
    }

    /**
     * @param int $energy
     *
     * @return Statistics
     */
    public function setEnergy(int $energy): Statistics
    {
        $this->energy = $energy;

        return $this;
    }

    /**
     * @return int
     */
    public function getEnergyMax(): int
    {
        return $this->energyMax;
    }

    /**
     * @param int $energyMax
     *
     * @return Statistics
     */
    public function setEnergyMax(int $energyMax): Statistics
    {
        $this->energyMax = $energyMax;

        return $this;
    }

    /**
     * @return int
     */
    public function getDamageMin(): int
    {
        return $this->damageMin;
    }

    /**
     * @param int $damageMin
     * @return Statistics
     */
    public function setDamageMin(int $damageMin): Statistics
    {
        $this->damageMin = $damageMin;
        return $this;
    }

    /**
     * @return int
     */
    public function getDamageMax(): int
    {
        return $this->damageMax;
    }

    /**
     * @param int $damageMax
     * @return Statistics
     */
    public function setDamageMax(int $damageMax): Statistics
    {
        $this->damageMax = $damageMax;
        return $this;
    }

}
