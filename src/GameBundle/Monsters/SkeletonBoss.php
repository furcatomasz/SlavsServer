<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class SkeletonBoss extends AbstractMonster
{
    const TYPE = 2;


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

        $this->name = 'Skeleton BOSS';
        $this->type = 'skeletonBoss';
        $this->meshName = 'skeletonBoss';
        $this->scale = 1.5;
        $this->lvl = 5;
        $this->experience = 25;
        $this->attackAreaSize = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics = (new Statistics())
            ->setHp(120)
            ->setHpMax(120)
            ->setDamageMin(5)
            ->setDamageMax(15)
            ->setArmor(12)
            ->setWalkSpeed(4)
            ->setBlockChance(0)
            ->setHitChance(100);
    }


}
