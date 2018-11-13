<?php

namespace GameBundle\Items\Helms;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Items\ItemImprovments;
use GameBundle\Statistics\Statistics;

class LeatherHelm extends Helm
{
    const ITEM_ID = 4;

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
            ->setArmor(1);

        $this
            ->setName(ItemFactory::createName('Leather helm', $itemImprovement))
            ->setMeshName('leatherHelm')
            ->setImage('leatherHelm')
            ->setImprovement($itemImprovement)
            ->setStatistics(ItemImprovments::improveItemStatistics($statistics, $itemImprovement));
    }

}



