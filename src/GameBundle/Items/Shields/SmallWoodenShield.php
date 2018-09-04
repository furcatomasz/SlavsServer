<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class SmallWoodenShield extends Shield
{
    const ITEM_ID = 5;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $this
            ->setName('Small wooden shield')
            ->setMeshName('shieldWoodenSmall')
            ->setImage('shieldWoodenSmall')
            ->setStatistics(new Statistics(0, 0, 0, 0, 0, 2, 0, 0, 0));

    }

}



