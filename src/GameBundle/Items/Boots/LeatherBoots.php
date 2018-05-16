<?php

namespace GameBundle\Items\Boots;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherBoots extends Boots
{
    const ITEM_ID = 2;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $this
            ->setName('leatherBoots')
            ->setMeshName('leatherBoots')
            ->setImage('leatherBoots')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



