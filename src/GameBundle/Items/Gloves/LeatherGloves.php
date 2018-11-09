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

        $statistics = (new Statistics())->setArmor(1);
        $this
            ->setName('Leather Gloves')
            ->setMeshName('leatherGloves')
            ->setImage('leatherGloves')
            ->setStatistics($statistics);

    }

}



