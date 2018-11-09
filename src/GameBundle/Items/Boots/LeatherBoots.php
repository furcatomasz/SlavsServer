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
        $statistics = (new Statistics())->setArmor(1);
        $this
            ->setName('Leather Boots')
            ->setMeshName('leatherBoots')
            ->setImage('leatherBoots')
            ->setStatistics($statistics);

    }

}



