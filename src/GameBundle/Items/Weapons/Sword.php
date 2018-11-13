<?php

namespace GameBundle\Items\Weapons;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Items\ItemImprovments;
use GameBundle\Statistics\Statistics;

class Sword extends Weapon
{
    const ITEM_ID = 7;

    /**
     * LongSword constructor.
     *
     * @param PlayerItem|null $entity
     * @param Int             $improvement
     */
    public function __construct(?PlayerItem $entity = null, Int $improvement = 0)
    {
        parent::__construct($entity);
        $itemImprovement = ($entity) ? $entity->getImprovement() : $improvement;

        $statistics = (new Statistics())
            ->setDamageMin(2)
            ->setDamageMax(4);

        $this
            ->setName(ItemFactory::createName('Sword', $itemImprovement))
            ->setMeshName('sword')
            ->setImage('sword')
            ->setImprovement($itemImprovement)
            ->setStatistics(ItemImprovments::improveItemStatistics($statistics, $itemImprovement));
    }

}



