<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class BigSkeleton extends AbstractMonster
{
    const TYPE = 4;

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
            ->setHp(80)
            ->setHpMax(80)
            ->setDamageMin(8)
            ->setDamageMax(12)
            ->setArmor(15)
            ->setWalkSpeed(11)
            ->setBlockChance(0)
            ->setHitChance(100);
    }


}
