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

class ItemFactory
{

    /**
     * @param PlayerItem $item
     *
     * @return AbstractItem
     * @throws \Exception
     */
    static public function create(PlayerItem $item): AbstractItem
    {
        $newItem = null;
        switch ($item->getItemId()) {
            case Sword::ITEM_ID:
                $newItem = new Sword($item);
                break;
            case LongSword::ITEM_ID:
                $newItem = new LongSword($item);
                break;
            case MediumWoodenShield::ITEM_ID:
                $newItem = new MediumWoodenShield($item);
                break;
            case SmallWoodenShield::ITEM_ID:
                $newItem = new SmallWoodenShield($item);
                break;
            case LeatherArmor::ITEM_ID:
                $newItem = new LeatherArmor($item);
                break;
            case LeatherBoots::ITEM_ID:
                $newItem = new LeatherBoots($item);
                break;
            case LeatherGloves::ITEM_ID:
                $newItem = new LeatherGloves($item);
                break;
            case LeatherHelm::ITEM_ID:
                $newItem = new LeatherHelm($item);
                break;
        }

        if (!$newItem) {
            throw new \Exception('can not find item.');
        }

        return $newItem;
    }

    /**
     * @param String          $name
     *
     * @param PlayerItem|null $playerItem
     *
     * @return string
     */
    static public function createName(String $name, ?PlayerItem $playerItem): string {
        return ($playerItem) ?
            sprintf($name.' +%s', $playerItem->getImprovement()) :
            $name;
    }
}
