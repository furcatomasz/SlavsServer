<?php

namespace GameBundle\SpecialItems;

use AppBundle\Entity\Player;
use AppBundle\Manager\AbstractManager;
use AppBundle\Manager\SpecialItemManager;

class KeyToChest extends AbstractSpecialItem
{
    const TYPE = 2;

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

        $this->name = 'Key to wood chest';
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
