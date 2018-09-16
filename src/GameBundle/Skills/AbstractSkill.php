<?php

namespace GameBundle\Skills;

abstract class AbstractSkill
{
    const TYPE = 0;

    /**
     * @var int
     */
    public $activeTime;

    /**
     * @var int
     */
    public $duration;

    /**
     * @var int
     */
    public $power;

    /**
     * @var int
     */
    public $cooldownTime;

    /**
     * @var boolean
     */
    public $instant;

    /**
     * @var int
     */
    public $energy;

    /**
     * @var boolean
     */
    public $used;

    /**
     * @param int $damage
     */
    abstract public function useSkill(int &$damage): void;

    /**
     * @return int
     */
    public function getType(): int
    {
        return static::TYPE;
    }

}
