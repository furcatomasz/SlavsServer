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
            1 => 30,
            2 => 90,
            3 => 200,
            4 => 500,
            5 => 1000,
            6 => 2400,
            7 => 3600,
            8 => 10000,
        ];
    }


}