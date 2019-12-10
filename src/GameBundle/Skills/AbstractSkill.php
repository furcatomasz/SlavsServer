<?php

namespace GameBundle\Skills;

use AppBundle\Entity\Player;
use GameBundle\Monsters\AbstractMonster;
use JMS\Serializer\Annotation as Serializer;

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
     * @param int             $damage
     * @param AbstractMonster $monster
     * @param Player          $player
     */
    abstract public function useSkill(?int &$damage, ?AbstractMonster $monster, ?Player $player): void;

    /**
     * @Serializer\VirtualProperty()
     *
     * @return int
     */
    public function getType(): int
    {
        return static::TYPE;
    }
    /**
     * @return bool
     */
    protected function isSkillActive(): bool
    {
        return (bool) ($this->activeTime + $this->duration > time());
    }

}
