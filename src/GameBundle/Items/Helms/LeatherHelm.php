<?php

namespace GameBundle\Items\Helms;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherHelm extends Helm
{
    const ITEM_ID = 4;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $this
            ->setName('Leather helm')
            ->setMeshName('leatherHelm')
            ->setImage('leatherHelm')
            ->setStatistics(new Statistics(0, 0, 0, 0, 1, 0, 0, 0));

    }

}



