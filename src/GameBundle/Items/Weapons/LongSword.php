<?php

namespace GameBundle\Items\Weapons;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LongSword extends Weapon
{
    const ITEM_ID = 8;

    public function __construct(PlayerItem $entity)
    {
        parent::__construct($entity);

        $this
            ->setName('swordLong')
            ->setMeshName('swordLong')
            ->setImage('Sword')
            ->setStatistics(new Statistics(0, 0, 0, 5, 0, 0, 0, 0));

    }

}



