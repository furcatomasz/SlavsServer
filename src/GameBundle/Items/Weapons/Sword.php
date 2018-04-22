<?php

namespace GameBundle\Items\Weapons;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class Sword extends Weapon
{
    const ITEM_ID = 7;

    public function __construct(PlayerItem $entity)
    {
        parent::__construct($entity);

        $this
            ->setName('Sword')
            ->setMeshName('sword')
            ->setImage('Sword')
            ->setStatistics(new Statistics(0, 0, 0, 5, 0, 0, 0, 0));

    }

}



