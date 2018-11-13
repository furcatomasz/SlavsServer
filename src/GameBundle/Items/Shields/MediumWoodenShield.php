<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Items\ItemImprovments;
use GameBundle\Statistics\Statistics;

class MediumWoodenShield extends Shield
{
    const ITEM_ID = 6;

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
            ->setArmor(4);

        $this
            ->setName(ItemFactory::createName('Medium wooden shield', $itemImprovement))
            ->setMeshName('shieldWoodenMedium')
            ->setImage('shieldWoodenMedium')
            ->setImprovement($itemImprovement)
            ->setStatistics(ItemImprovments::improveItemStatistics($statistics, $itemImprovement));
    }

}



