<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class BigSkeleton extends AbstractMonster
{

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

        $this->name = 'Big Skeleton';
        $this->type = 'skeleton';
        $this->meshName = 'skeleton';
        $this->lvl = 1;
        $this->scale = 1.2;
        $this->experience = 15;
        $this->attackAreaSize = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics = (new Statistics())
            ->setHp(160)
            ->setHpMax(160)
            ->setDamageMin(12)
            ->setDamageMax(18)
            ->setArmor(15)
            ->setWalkSpeed(10)
            ->setBlockChance(0)
            ->setHitChance(100);
    }


}
