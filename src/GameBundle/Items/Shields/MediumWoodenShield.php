<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class MediumWoodenShield extends Shield
{
    const ITEM_ID = 6;

    public function __construct(?PlayerItem $entity = null)
    {
        parent::__construct($entity);

        $this
            ->setName('shieldWoodenMedium')
            ->setMeshName('shieldWoodenMedium')
            ->setImage('shieldWoodenMedium')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



