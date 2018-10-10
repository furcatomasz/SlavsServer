<?php

namespace GameBundle\Chests;

use AppBundle\Entity\Player;
use AppBundle\Entity\PlayerSpecialItems;
use AppBundle\Manager\SpecialItemManager;
use GameBundle\BabylonObjects\Vector3;
use GameBundle\SpecialItems\AbstractSpecialItem;

abstract class AbstractChest
{
    const TYPE = 0;

    /**
     * @var string
     */
    public $name;

    /**
     * @var boolean
     */
    public $opened = false;

    /**
     * @var Vector3
     */
    public $position;

    /**
     * @var Vector3
     */
    public $awardsPosition;

    /**
     * @var Vector3
     */
    public $rotation;

    /**
     * @var array
     */
    public $awards;

    /**
     * @var int
     */
    public $requirementKeyType;


    /**
     * @param Player             $player
     *
     * @param SpecialItemManager $specialItemManger
     *
     * @return AbstractSpecialItem|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function openChest(Player $player, SpecialItemManager $specialItemManger): ?AbstractChest
    {
        $self = $this;
        $key  = null;
        $specialItems = $player->getSpecialItems();

        /** @var PlayerSpecialItems $specialItem */
        foreach($specialItems as $specialItem) {
            if ($specialItem->getType() == $self->requirementKeyType) {
                $specialItemManger->remove($specialItem);
                $self->opened = true;

                break;
            }
        }

        return $this;
    }


}
