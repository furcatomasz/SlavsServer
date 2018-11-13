<?php

namespace GameBundle\Items\Shields;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Items\ItemImprovments;
use GameBundle\Statistics\Statistics;

class SmallWoodenShield extends Shield
{
    const ITEM_ID = 5;

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
            ->setArmor(2);

        $this
            ->setName(ItemFactory::createName('Small wooden shield', $itemImprovement))
            ->setMeshName('shieldWoodenSmall')
            ->setImage('shieldWoodenSmall')
            ->setImprovement($itemImprovement)
            ->setStatistics(ItemImprovments::improveItemStatistics($statistics, $itemImprovement));
    }

}



