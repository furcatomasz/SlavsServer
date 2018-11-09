<?php

namespace GameBundle\SpecialItems\Randomizer;


use GameBundle\BabylonObjects\Vector3;
use GameBundle\SpecialItems\AbstractSpecialItem;

class RandomSpecialItem
{
    /**
     * @var AbstractSpecialItem
     */
    private $specialItem;

    /**
     * @var Vector3
     */
    private $position;

    /**
     * @var bool
     */
    private $isPicked = false;

    /**
     * @return AbstractSpecialItem
     */
    public function getSpecialItem(): AbstractSpecialItem
    {
        return $this->specialItem;
    }

    /**
     * @param AbstractSpecialItem $specialItem
     *
     * @return $this
     */
    public function setSpecialItem($specialItem)
    {
        $this->specialItem = $specialItem;

        return $this;
    }

    /**
     * @return Vector3
     */
    public function getPosition(): Vector3
    {
        return $this->position;
    }

    /**
     * @param Vector3 $position
     *
     * @return $this
     */
    public function setPosition($position)
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPicked(): bool
    {
        return $this->isPicked;
    }

    /**
     * @param bool $isPicked
     *
     * @return $this
     */
    public function setIsPicked($isPicked)
    {
        $this->isPicked = $isPicked;

        return $this;
    }

}
