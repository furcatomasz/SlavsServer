<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class MediumWoodenShield extends Shield
{
    const ITEM_ID = 6;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $this
            ->setName('Medium wooden shield')
            ->setMeshName('shieldWoodenMedium')
            ->setImage('shieldWoodenMedium')
            ->setStatistics(new Statistics(0, 0, 0, 0, 4, 0, 0, 0));

    }

}



