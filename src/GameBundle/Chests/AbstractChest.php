<?php

namespace GameBundle\Chests;

use AppBundle\Entity\Player;
use AppBundle\Entity\PlayerSpecialItems;
use AppBundle\Manager\SpecialItemManager;
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
     * @var string
     */
    public $objectName;

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
     */
    public function openChest(Player $player, SpecialItemManager $specialItemManger): ?AbstractChest
    {
        $self = $this;
        $key  = null;
        $player->getSpecialItems()->map(
            function (PlayerSpecialItems $specialItem) use (&$key, $self, $specialItemManger) {
                if ($specialItem->getType() == $self->requirementKeyType) {
                    $specialItemManger->remove($specialItem);
                    $self->opened = true;

                    return;
                }
            }
        );

        return $this;
    }


}
