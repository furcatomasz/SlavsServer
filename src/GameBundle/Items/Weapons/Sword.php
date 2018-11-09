<?php

namespace GameBundle\Items\Weapons;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class Sword extends Weapon
{
    const ITEM_ID = 7;

    public function __construct(?PlayerItem $entity = null)
    {
        parent::__construct($entity);

        $statistics = (new Statistics())
            ->setDamageMin(2)
            ->setDamageMax(4);
        $this
            ->setName('Sword')
            ->setMeshName('sword')
            ->setImage('sword')
            ->setStatistics($statistics);
    }

}



