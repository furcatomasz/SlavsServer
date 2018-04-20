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
        $this->attack       = false;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return int
     */
    public function getExperience(): int
    {
        return $this->experience;
    }

    /**
     * @return int
     */
    public function getLvl(): int
    {
        return $this->lvl;
    }

    /**
     * @return array
     */
    public function getPosition(): array
    {
        return $this->position;
    }

    /**
     * @return array
     */
    public function getItemsToDrop(): array
    {
        return $this->itemsToDrop;
    }

    /**
     * @return array
     */
    public function getSpecialItemsToDrop(): array
    {
        return $this->specialItemsToDrop;
    }

    /**
     * @return int|null
     */
    public function getTarget(): ?int
    {
        return $this->target;
    }

    /**
     * @return bool
     */
    public function isAttack(): bool
    {
        return $this->attack;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getMeshName(): string
    {
        return $this->meshName;
    }

    /**
     * @return Statistics
     */
    public function getStatistics(): Statistics
    {
        return $this->statistics;
    }

    /**
     * @return int
     */
    public function getAttackAreaSize(): int
    {
        return $this->attackAreaSize;
    }

    /**
     * @return int
     */
    public function getVisibilityAreaSize(): int
    {
        return $this->visibilityAreaSize;
    }

    /**
     * @return array|null
     */
    public function getAvailableAttacksFromCharacters(): ?array
    {
        return $this->availableAttacksFromCharacters;
    }


}
