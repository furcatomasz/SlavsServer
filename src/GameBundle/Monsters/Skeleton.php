<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class Skeleton extends AbstractMonster
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

        $this->name = 'Skeleton';
        $this->type = 'skeleton';
        $this->meshName = 'skeleton';
        $this->lvl = 1;
        $this->experience = 2;
        $this->attackAreaSize = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics = (new Statistics())
            ->setHp(12)
            ->setHpMax(12)
            ->setDamageMin(4)
            ->setDamageMax(6)
            ->setArmor(3)
            ->setWalkSpeed(10)
            ->setBlockChance(0)
            ->setHitChance(100);
    }


}
