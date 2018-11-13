<?php

namespace GameBundle\Items;

use AppBundle\Entity\PlayerItem;
use GameBundle\Items\Armors\LeatherArmor;
use GameBundle\Items\Boots\LeatherBoots;
use GameBundle\Items\Gloves\LeatherGloves;
use GameBundle\Items\Helms\LeatherHelm;
use GameBundle\Items\Shields\MediumWoodenShield;
use GameBundle\Items\Shields\SmallWoodenShield;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Items\Weapons\Sword;
use GameBundle\Scenes\AbstractScene;

class DropItem
{

    /**
     * @param AbstractScene $scene
     * @param AbstractItem  $item
     *
     * @return int
     */
    public static function addDropItemToScene(AbstractScene $scene, AbstractItem $item): int
    {
        $itemsToDrop   = $scene->getItemsToDrop();
        $itemsToDrop[] = $item;
        $scene->setItemsToDrop($itemsToDrop);
        end($itemsToDrop);

        return key($itemsToDrop);
    }

    /**
     * @param AbstractScene $scene
     * @param Int           $itemKey
     *
     * @return AbstractItem|null
     */
    public static function getDroppedItem(AbstractScene $scene, Int $itemKey): ?AbstractItem
    {
        $droppedItems = $scene->getItemsToDrop();

        return ($droppedItems && array_key_exists($itemKey, $droppedItems)) ? $droppedItems[$itemKey] : null;
    }

}
