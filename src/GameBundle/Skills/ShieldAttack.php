<?php

namespace GameBundle\Skills;

use AppBundle\Entity\Player;
use GameBundle\Monsters\AbstractMonster;

class ShieldAttack extends AbstractSkill
{
    const TYPE = 4;

    /**
     * StrongAttack constructor.
     */
    public function __construct()
    {
        $this->activeTime   = time();
        $this->duration     = 1;
        $this->cooldownTime = 3;
        $this->power        = 1.5;
        $this->instant      = true;
        $this->energy       = 10;
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
