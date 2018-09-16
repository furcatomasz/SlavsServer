<?php

namespace GameBundle\Skills;

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
        $this->cooldownTime = 3;
        $this->power        = 2;
        $this->instant      = false;
        $this->energy       = 5;
        $this->used         = true;
    }

    /**
     * @param int $damage
     */
    public function useSkill(int &$damage): void
    {
        if ($this->isSkillActive()) {
            $damage = round($damage / $this->power);
        }
    }

    /**
     * @return bool
     */
    protected function isSkillActive(): bool
    {
        return (bool) ($this->activeTime + $this->duration > time());
    }

}
