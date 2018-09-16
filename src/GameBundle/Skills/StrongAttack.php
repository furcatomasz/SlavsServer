<?php

namespace GameBundle\Skills;

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
        $this->cooldownTime = 3;
        $this->power        = 2;
        $this->instant      = false;
        $this->energy       = 5;
        $this->used         = false;
    }

    /**
     * @param int $damage
     */
    public function useSkill(int &$damage): void
    {
        $damage = round($damage * $this->power);
    }
}
