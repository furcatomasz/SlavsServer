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
            1 => 10,
            2 => 25,
            3 => 50,
            4 => 80,
            5 => 120,
            6 => 200,
            7 => 300,
            8 => 500,
            9 => 750,
            10 => 500000,
        ];
    }


}
