<?php

namespace GameBundle\Items\Armors;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Items\ItemImprovments;
use GameBundle\Statistics\Statistics;

class LeatherArmor extends Armor
{
    const ITEM_ID = 1;

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
            ->setArmor(3);

        $this
            ->setName(ItemFactory::createName('Leather Armor', $itemImprovement))
            ->setMeshName('leatherArmor')
            ->setImage('leatherArmor')
            ->setImprovement($itemImprovement)
            ->setStatistics(ItemImprovments::improveItemStatistics($statistics, $itemImprovement));
    }

}



