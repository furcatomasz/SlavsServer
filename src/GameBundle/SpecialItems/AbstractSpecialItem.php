<?php

namespace GameBundle\SpecialItems;

use AppBundle\Entity\Player;
use AppBundle\Manager\AbstractManager;
use GameBundle\Statistics\Statistics;

abstract class AbstractSpecialItem
{
    const TYPE = 0;

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
     * AbstractSpecialItem constructor.
     *
     * @param int $value
     */
    public function __construct(int $value)
    {
        $this->value = $value;
        $this->type  = static::TYPE;
    }

    /**
     * @param Player          $player
     * @param AbstractManager $manager
     *
     * @return AbstractSpecialItem
     */
    abstract public function addItem(Player $player, AbstractManager $manager): AbstractSpecialItem;


}
