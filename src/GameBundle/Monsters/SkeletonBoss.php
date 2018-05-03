<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class SkeletonBoss extends AbstractMonster
{

    /**
     * AbstractMonster constructor.
     *
     * @param int   $id
     * @param array $position
     * @param array $itemsToDrop
     * @param array $specialItemsToDrop
     */
    public function __construct(int $id = 0, array $position = [], array $itemsToDrop = [], array $specialItemsToDrop = [])
    {
        parent::__construct($id, $position, $itemsToDrop, $specialItemsToDrop);

        $this->name               = 'Skeleton BOSS';
        $this->type               = 'skeletonBoss';
        $this->meshName           = 'skeletonBoss';
        $this->scale              = 1.6;
        $this->lvl                = 5;
        $this->experience         = 25;
        $this->attackAreaSize     = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics         = new Statistics(400, 400, 100, 15, 10, 8, 0, 100);
    }


}