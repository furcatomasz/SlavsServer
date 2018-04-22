<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class MediumWoodenShield extends Shield
{
    const ITEM_ID = 6;

    public function __construct(PlayerItem $entity)
    {
        parent::__construct($entity);

        $this
            ->setName('shieldWoodenSmall')
            ->setMeshName('shieldWoodenSmall')
            ->setImage('Shield')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



