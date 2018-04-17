<?php

namespace GameBundle\Monsters;

use GameBundle\Statistics\Statistics;

abstract class AbstractMonster
{
    /**
     * @var int
     */
    public $id;
    /**
     * @var string
     */
    public $name;

    /**
     * @var int
     */
    public $experience;

    /**
     * @var int
     */
    public $lvl;

    /**
     * @var array
     */
    public $position;

    /**
     * @var array
     */
    public $itemsToDrop;

    /**
     * @var array
     */
    public $specialItemsToDrop;

    /**
     * @var int
     */
    public $target;

    /**
     * @var boolean
     */
    public $attack;

    /**
     * @var int
     */
    public $type;

    /**
     * @var string
     */
    public $meshName;

    /**
     * @var Statistics
     */
    public $statistics;
    /**
     * @var int
     */
    public $attackAreaSize;

    /**
     * @var int
     */
    public $visibilityAreaSize;

    /**
     * @var array
     */
    public $availableAttacksFromCharacters;

    /**
     * AbstractMonster constructor.
     *
     * @param int   $id
     * @param array $position
     * @param array $itemsToDrop
     * @param array $specialItemsToDrop
     */
    public function __construct(int $id, array $position, array $itemsToDrop, array $specialItemsToDrop)
    {
        $this->id                 = $id;
        $this->position           = $position;
        $this->itemsToDrop        = $itemsToDrop;
        $this->specialItemsToDrop = $specialItemsToDrop;
    }


}
