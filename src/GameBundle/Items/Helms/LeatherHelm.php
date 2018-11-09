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

        $statistics = (new Statistics())->setArmor(1);
        $this
            ->setName('Leather helm')
            ->setMeshName('leatherHelm')
            ->setImage('leatherHelm')
            ->setStatistics($statistics);

    }

}



