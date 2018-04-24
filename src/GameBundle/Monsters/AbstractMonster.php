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
     * @var string
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
        $this->id                             = $id;
        $this->position                       = $position;
        $this->itemsToDrop                    = $itemsToDrop;
        $this->specialItemsToDrop             = $specialItemsToDrop;
        $this->availableAttacksFromCharacters = [];
        $this->attack                         = false;
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
     * @return string
     */
    public function getType(): string
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

    /**
     * @param int $id
     *
     * @return AbstractMonster
     */
    public function setId(int $id): AbstractMonster
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @param string $name
     *
     * @return AbstractMonster
     */
    public function setName(string $name): AbstractMonster
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @param int $experience
     *
     * @return AbstractMonster
     */
    public function setExperience(int $experience): AbstractMonster
    {
        $this->experience = $experience;

        return $this;
    }

    /**
     * @param int $lvl
     *
     * @return AbstractMonster
     */
    public function setLvl(int $lvl): AbstractMonster
    {
        $this->lvl = $lvl;

        return $this;
    }

    /**
     * @param array $position
     *
     * @return AbstractMonster
     */
    public function setPosition(array $position): AbstractMonster
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @param array $itemsToDrop
     *
     * @return AbstractMonster
     */
    public function setItemsToDrop(array $itemsToDrop): AbstractMonster
    {
        $this->itemsToDrop = $itemsToDrop;

        return $this;
    }

    /**
     * @param array $specialItemsToDrop
     *
     * @return AbstractMonster
     */
    public function setSpecialItemsToDrop(array $specialItemsToDrop): AbstractMonster
    {
        $this->specialItemsToDrop = $specialItemsToDrop;

        return $this;
    }

    /**
     * @param int|null $target
     *
     * @return AbstractMonster
     */
    public function setTarget(?int $target): AbstractMonster
    {
        $this->target = $target;

        return $this;
    }

    /**
     * @param bool $attack
     *
     * @return AbstractMonster
     */
    public function setAttack(bool $attack): AbstractMonster
    {
        $this->attack = $attack;

        return $this;
    }

    /**
     * @param string $type
     *
     * @return AbstractMonster
     */
    public function setType(string $type): AbstractMonster
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @param string $meshName
     *
     * @return AbstractMonster
     */
    public function setMeshName(string $meshName): AbstractMonster
    {
        $this->meshName = $meshName;

        return $this;
    }

    /**
     * @param Statistics $statistics
     *
     * @return AbstractMonster
     */
    public function setStatistics(Statistics $statistics): AbstractMonster
    {
        $this->statistics = $statistics;

        return $this;
    }

    /**
     * @param int $attackAreaSize
     *
     * @return AbstractMonster
     */
    public function setAttackAreaSize(int $attackAreaSize): AbstractMonster
    {
        $this->attackAreaSize = $attackAreaSize;

        return $this;
    }

    /**
     * @param int $visibilityAreaSize
     *
     * @return AbstractMonster
     */
    public function setVisibilityAreaSize(int $visibilityAreaSize): AbstractMonster
    {
        $this->visibilityAreaSize = $visibilityAreaSize;

        return $this;
    }

    /**
     * @param array $availableAttacksFromCharacters
     *
     * @return AbstractMonster
     */
    public function setAvailableAttacksFromCharacters(array $availableAttacksFromCharacters): AbstractMonster
    {
        $this->availableAttacksFromCharacters = $availableAttacksFromCharacters;

        return $this;
    }


}
