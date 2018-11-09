<?php

namespace GameBundle\Items\Weapons;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

class LongSword extends Weapon
{
    const ITEM_ID = 8;

    /**
     * LongSword constructor.
     *
     * @param PlayerItem|null $entity
     */
    public function __construct(?PlayerItem $entity = null)
    {
        if($entity) {
            parent::__construct($entity);
        }

        $statistics = (new Statistics())
            ->setDamageMin(4)
            ->setDamageMax(8);

        $this
            ->setName('Long sword')
            ->setMeshName('swordLong')
            ->setImage('swordLong')
            ->setStatistics($statistics);

    }

}



