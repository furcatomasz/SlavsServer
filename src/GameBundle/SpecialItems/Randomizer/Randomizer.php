<?php

namespace GameBundle\SpecialItems\Randomizer;


use GameBundle\BabylonObjects\Vector3;
use GameBundle\SpecialItems\AbstractSpecialItem;

class Randomizer
{

    /**
     * @param AbstractSpecialItem $abstractSpecialItem
     * @param array|Vector3       $positions
     * @param int                 $chance
     *
     * @return array|RandomSpecialItem
     */
    static function createSpecialItem(AbstractSpecialItem $abstractSpecialItem, array $positions, int $chance): array
    {
        return array_merge([], array_map(function(Vector3 $position) use ($chance, $abstractSpecialItem) {
            if(random_int(1,100) < $chance) {
                return (new RandomSpecialItem())
                    ->setPosition($position)
                    ->setSpecialItem($abstractSpecialItem);
            }
        }, $positions));

    }

}
