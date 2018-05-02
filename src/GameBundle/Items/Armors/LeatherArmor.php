<?php

namespace GameBundle\Items\Armors;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherArmor extends Armor
{
    const ITEM_ID = 1;

    public function __construct(?PlayerItem $entity = null)
    {
        parent::__construct($entity);

        $this
            ->setName('leatherArmor')
            ->setMeshName('leatherArmor')
            ->setImage('Armor')
            ->setStatistics(new Statistics(0, 0, 0, 0, 5, 0, 0, 0));

    }

}



