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
        $scene = null;

        switch ($type) {
            case StrongAttack::TYPE:
                $scene = new StrongAttack();
                break;
            case Block::TYPE:
                $scene = new Block();
                break;
        }

        if (!$scene) {
            throw new Exception('Can not find skill');
        }

        return $scene;

    }

}
