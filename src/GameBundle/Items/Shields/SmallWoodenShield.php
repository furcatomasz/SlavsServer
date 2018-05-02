<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class SmallWoodenShield extends Shield
{
    const ITEM_ID = 5;

    public function __construct(?PlayerItem $entity = null)
    {
        parent::__construct($entity);

        $this
            ->setName('shieldWoodenSmall')
            ->setMeshName('shieldWoodenSmall')
            ->setImage('Shield')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



