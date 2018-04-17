<?php

namespace GameBundle\Scenes;

use GameBundle\Gateways\ForestHouseTombExit;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\SpecialItems\KeyToChest;

class ForestHouseTomb extends AbstractScene
{
    const TYPE = 3;

    /**
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
    }

}
