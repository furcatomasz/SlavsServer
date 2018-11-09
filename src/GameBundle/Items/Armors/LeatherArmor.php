<?php

namespace GameBundle\Items\Armors;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LeatherArmor extends Armor
{
    const ITEM_ID = 1;

    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $statistics = (new Statistics())->setArmor(3);
        $this
            ->setName('Leather Armor')
            ->setMeshName('leatherArmor')
            ->setImage('leatherArmor')
            ->setStatistics($statistics);

    }

}



