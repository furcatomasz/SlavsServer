<?php

namespace GameBundle\Items\Gloves;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherGloves extends Gloves
{
    const ITEM_ID = 3;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $this
            ->setName('Leather Gloves')
            ->setMeshName('leatherGloves')
            ->setImage('leatherGloves')
            ->setStatistics(new Statistics(0, 0, 0, 0,  0, 1, 0, 0, 0));

    }

}



