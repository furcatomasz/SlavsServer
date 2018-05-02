<?php
namespace GameBundle\Lvls;

class Lvls
{

    /**
     * @return array
     */
    static function getExperienceForLvls() {
        return [
            0 => 0,
            1 => 100,
            2 => 200,
            3 => 400,
            4 => 800,
            5 => 1600,
            6 => 3200,
            7 => 6400,
            8 => 12800,
            9 => 25600,
        ];
    }


}