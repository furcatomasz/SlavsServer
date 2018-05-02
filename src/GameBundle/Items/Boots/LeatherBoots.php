<?php

namespace GameBundle\Items\Boots;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherBoots extends Boots
{
    const ITEM_ID = 2;

    public function __construct(?PlayerItem $entity = null)
    {
        parent::__construct($entity);

        $this
            ->setName('leatherBoots')
            ->setMeshName('leatherBoots')
            ->setImage('Boots')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



