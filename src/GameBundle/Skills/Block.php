<?php

namespace GameBundle\Skills;

use AppBundle\Entity\Player;
use GameBundle\Monsters\AbstractMonster;

class Block extends AbstractSkill
{
    const TYPE = 2;

    /**
     * StrongAttack constructor.
     */
    public function __construct()
    {
        $this->activeTime   = time();
        $this->duration     = 2;
        $this->cooldownTime = 5;
        $this->power        = 2;
        $this->instant      = false;
        $this->energy       = 5;
        $this->used         = true;
    }

    /**
     * @param int             $damage
     * @param AbstractMonster $monster
     * @param Player          $player
     */
    public function useSkill(?int &$damage, ?AbstractMonster $monster, ?Player $player): void
    {
        if ($this->isSkillActive()) {
            $damage = round($damage / $this->power);
        }
    }


}
