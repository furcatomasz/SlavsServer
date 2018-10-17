<?php

namespace GameBundle\Scenes;

use GameBundle\BabylonObjects\Vector3;
use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\ForestHouseTombExit;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Monsters\Skeleton;
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
        $this->chests = [
            new WoodChest(new Vector3(-19,0,20), new Vector3(0,1.5,0), new Vector3(-19,0,18), [new Gold(50), new KeyToChest(1), new LongSword()]),
        ];
        $this->monsters = [
            new SkeletonWarrior(0, ['x' => 17, 'y' => 0, 'z' => 17], [], []),
            new Skeleton(0, ['x' => 36, 'y' => 0, 'z' => -35], [], []),
            new SkeletonWarrior(0, ['x' => 38, 'y' => 0, 'z' => -44], [], []),
        ];
    }

}
