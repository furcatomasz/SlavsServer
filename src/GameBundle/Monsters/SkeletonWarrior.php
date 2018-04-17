<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class SkeletonWarrior extends AbstractMonster
{

    /**
     * AbstractMonster constructor.
     *
     * @param int   $id
     * @param array $position
     * @param array $itemsToDrop
     * @param array $specialItemsToDrop
     */
    public function __construct(int $id, array $position, array $itemsToDrop, array $specialItemsToDrop)
    {
        parent::__construct($id, $position, $itemsToDrop, $specialItemsToDrop);

        $this->name               = 'Skeleton Warrior';
        $this->type               = 'skeletonWarrior';
        $this->meshName           = 'skeletonWarrior';
        $this->lvl                = 2;
        $this->experience         = 2;
        $this->attackAreaSize     = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics         = new Statistics(100, 100, 100, 8, 10, 6, 0, 100);
    }


}