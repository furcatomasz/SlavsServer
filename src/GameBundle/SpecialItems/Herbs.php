<?php

namespace GameBundle\SpecialItems;

use AppBundle\Entity\Player;
use AppBundle\Manager\AbstractManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;

class Herbs extends AbstractSpecialItem
{
    const TYPE = 4;

    /**
     * KeyToChest constructor.
     *
     * @param int $value
     */
    public function __construct(int $value)
    {
        parent::__construct($value);

        $this->name = 'Herbs';
        $this->meshName = 'ground_plants';
    }


    /**
     * @param Player                             $player
     * @param AbstractManager|SpecialItemManager $manager
     *
     * @return AbstractSpecialItem
     */
    public function addItem(Player $player, AbstractManager $manager): AbstractSpecialItem
    {
        $specialItem = $manager->create()
            ->setPlayer($player)
            ->setType($this->type)
            ->setValue($this->value);

        $manager->update($specialItem);

        return $this;
    }

}
