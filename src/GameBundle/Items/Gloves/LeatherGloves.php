<?php

namespace GameBundle\Items\Gloves;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherGloves extends Gloves
{
    const ITEM_ID = 3;

    public function __construct(PlayerItem $entity)
    {
        parent::__construct($entity);

        $this
            ->setName('leatherGloves')
            ->setMeshName('leatherGloves')
            ->setImage('Gloves')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



