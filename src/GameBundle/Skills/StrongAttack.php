<?php

namespace GameBundle\Skills;

use AppBundle\Entity\Player;
use GameBundle\Monsters\AbstractMonster;

class StrongAttack extends AbstractSkill
{
    const TYPE = 1;

    /**
     * StrongAttack constructor.
     */
    public function __construct()
    {
        $this->activeTime   = time();
        $this->duration     = 1;
        $this->cooldownTime = 10;
        $this->power        = 5;
        $this->instant      = false;
        $this->energy       = 5;
        $this->used         = false;
    }

    /**
     * @param int             $damage
     * @param AbstractMonster $monster
     * @param Player          $player
     */
    public function useSkill(?int &$damage, ?AbstractMonster $monster, ?Player $player): void
    {
        $damage = round($damage * $this->power);
    }

}
