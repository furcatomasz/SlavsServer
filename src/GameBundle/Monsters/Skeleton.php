<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

class Skeleton extends AbstractMonster
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

        $this->name               = 'Skeleton';
        $this->type               = 'skeleton';
        $this->meshName           = 'skeleton';
        $this->lvl                = 1;
        $this->experience         = 1;
        $this->attackAreaSize     = 2;
        $this->visibilityAreaSize = 15;
        $this->statistics         = new Statistics(40, 40, 100, 3, 10, 4, 0, 100);
    }


}