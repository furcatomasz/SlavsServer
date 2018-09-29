<?php

namespace GameBundle\Scenes;

use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\ForestHouseTombExit;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\Monsters\SkeletonWarrior;
use GameBundle\SpecialItems\Gold;
use GameBundle\SpecialItems\KeyToChest;

class Battleground extends AbstractScene
{
    const TYPE = 99;
    const START_POSITION = [
        'x' => 0,
        'y' => 0,
        'z' => 0,
    ];
    /**createEnemies
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [];
        $this->chests = [];
        $this->monsters = [
            new SkeletonWarrior(0, ['x' => 17, 'y' => 0, 'z' => 17], [], []),
        ];
    }

}
