<?php

namespace GameBundle\SpecialItems;

use AppBundle\Entity\Player;
use AppBundle\Manager\AbstractManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;

class Gold extends AbstractSpecialItem
{
    const TYPE = 1;

    /**
     * @var string
     */
    public $name;
    /**
     * @var int
     */
    public $value;
    /**
     * @var int
     */
    public $type;

    /**
     * KeyToChest constructor.
     *
     * @param int $value
     */
    public function __construct(int $value)
    {
        parent::__construct($value);

        $this->name = 'Gold';
    }

    /**
     * @param Player                        $player
     * @param AbstractManager|PlayerManager $manager
     *
     * @return AbstractSpecialItem
     */
    public function addItem(Player $player, AbstractManager $manager): AbstractSpecialItem
    {
        $manager->addGold($player, $this->value);
    }

}
