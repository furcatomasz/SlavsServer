<?php

namespace GameBundle\Scenes;

use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\ForestHouseTombExit;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\SpecialItems\Gold;
use GameBundle\SpecialItems\KeyToChest;

class ForestHouseTomb extends AbstractScene
{
    const TYPE = 3;
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
        $this->gateways = [
            new ForestHouseTombExit(),
        ];

        $this->monsters = [
            new SkeletonBoss(0, ['x' => 32, 'y' => 0, 'z' => -44], [], [new KeyToChest(1)]),
        ];

        $this->chests = [
        ];
    }

}
