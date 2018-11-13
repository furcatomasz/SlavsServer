<?php

namespace GameBundle\Items;

use AppBundle\Entity\PlayerItem;
use GameBundle\Statistics\Statistics;

abstract class AbstractItem
{
    const TYPE    = 0;
    const ITEM_ID = 0;

    /**
     * @var PlayerItem
     */
    public $entity;
    /**
     * @var string
     */
    public $meshName;
    /**
     * @var string
     */
    public $name;
    /**
     * @var string
     */
    public $image;
    /**
     * @var Statistics
     */
    public $statistics;
    /**
     * @var int
     */
    public $improvement = 0;

    /**
     * AbstractItem constructor.
     *
     * @param PlayerItem $entity
     */
    public function __construct(?PlayerItem $entity)
    {
        $this->entity = $entity;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return static::TYPE;
    }

    /**
     * @return int
     */
    public function getItemId(): int
    {
        return static::ITEM_ID;
    }

    /**
     * @return PlayerItem|null
     */
    public function getEntity(): ?PlayerItem
    {
        return $this->entity;
    }

    /**
     * @param PlayerItem $entity
     *
     * @return AbstractItem
     */
    public function setEntity(PlayerItem $entity): AbstractItem
    {
        $this->entity = $entity;

        return $this;
    }

    /**
     * @return string
     */
    public function getMeshName(): string
    {
        return $this->meshName;
    }

    /**
     * @param string $meshName
     *
     * @return AbstractItem
     */
    public function setMeshName(string $meshName): AbstractItem
    {
        $this->meshName = $meshName;

        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return AbstractItem
     */
    public function setName(string $name): AbstractItem
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getImage(): string
    {
        return $this->image;
    }

    /**
     * @param string $image
     *
     * @return AbstractItem
     */
    public function setImage(string $image): AbstractItem
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Statistics
     */
    public function getStatistics(): Statistics
    {
        return $this->statistics;
    }

    /**
     * @param Statistics $statistics
     *
     * @return AbstractItem
     */
    public function setStatistics(Statistics $statistics): AbstractItem
    {
        $this->statistics = $statistics;

        return $this;
    }

    /**
     * @return int
     */
    public function getImprovement(): int
    {
        return $this->improvement;
    }

    /**
     * @param int $improvement
     *
     * @return $this
     */
    public function setImprovement($improvement)
    {
        $this->improvement = $improvement;

        return $this;
    }

}
