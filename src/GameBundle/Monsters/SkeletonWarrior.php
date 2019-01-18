<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class SkeletonWarrior extends AbstractMonster
{
    const TYPE = 3;


    /**
     * AbstractMonster constructor.
     *
     * @param int $id
     * @param array $position
     * @param array $itemsToDrop
     * @param array $specialItemsToDrop
     */
    public function __construct(int $id = 0, array $position = [], array $itemsToDrop = [], array $specialItemsToDrop = [])
    {
        parent::__construct($id, $position, $itemsToDrop, $specialItemsToDrop);

        $this->name = 'Skeleton Warrior';
        $this->type = 'skeletonWarrior';
        $this->meshName = 'skeletonWarrior';
        $this->scale = 1;
        $this->lvl = 3;
        $this->experience = 10;
        $this->attackAreaSize = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics = (new Statistics())
            ->setHp(30)
            ->setHpMax(30)
            ->setDamageMin(4)
            ->setDamageMax(8)
            ->setArmor(10)
            ->setWalkSpeed(11)
            ->setBlockChance(0)
            ->setHitChance(100);
    }


}
