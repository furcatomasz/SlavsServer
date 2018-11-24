<?php

namespace GameBundle\Skills;

use AppBundle\Entity\Player;
use GameBundle\Monsters\AbstractMonster;

class Heal extends AbstractSkill
{
    const TYPE = 5;

    /**
     * StrongAttack constructor.
     */
    public function __construct()
    {
        $this->activeTime   = time();
        $this->duration     = 1;
        $this->cooldownTime = 5;
        $this->power        = 1;
        $this->instant      = true;
        $this->energy       = 0;
        $this->used         = true;
    }

    /**
     * @param int             $damage
     * @param AbstractMonster $monster
     * @param Player          $player
     */
    public function useSkill(?int &$damage, ?AbstractMonster $monster, ?Player $player): void
    {
        $addHp = 25;
        $maxHp = $player->getStatistics()->getHpMax();
        $hp    = $player->getStatistics()->getHp();

        $newHp = $hp + $addHp;
        if ($newHp > $maxHp) {
            $newHp = $maxHp;
        }

        $player->getStatistics()->setHp($newHp);
    }

}
