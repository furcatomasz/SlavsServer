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

}
