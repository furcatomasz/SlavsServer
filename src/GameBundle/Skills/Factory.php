<?php

namespace GameBundle\Skills;

use Symfony\Component\Config\Definition\Exception\Exception;

class Factory
{
    /**
     * @param int $type
     *
     * @return AbstractSkill
     */
    static public function getSkillByType(int $type): AbstractSkill
    {
        $skill = null;

        switch ($type) {
            case StrongAttack::TYPE:
                $skill = new StrongAttack();
                break;
            case Block::TYPE:
                $skill = new Block();
                break;
            case FastAttack::TYPE:
                $skill = new FastAttack();
                break;
            case ShieldAttack::TYPE:
                $skill = new ShieldAttack();
                break;
            case Heal::TYPE:
                $skill = new Heal();
                break;
        }

        if (!$skill) {
            throw new Exception('Can not find skill');
        }

        return $skill;

    }

}
