<?php

namespace GameBundle\Scenes;

use GameBundle\Gateways\EntraceForestHouseTomb;
use GameBundle\Gateways\EntraceHouse;
use GameBundle\Items\Armors\LeatherArmor;
use GameBundle\Items\Boots\LeatherBoots;
use GameBundle\Items\Helms\LeatherHelm;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Monsters\Skeleton;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\Monsters\SkeletonWarrior;
use GameBundle\SpecialItems\Gold;

class ForestHouse extends AbstractScene
{
    const TYPE = 2;

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [
            new EntraceHouse(),
            new EntraceForestHouseTomb(),
        ];

        $this->monsters = [
            new Skeleton(0, ['x' => -42, 'y' => 0, 'z' => -33], [], [new Gold(1)]),
            new Skeleton(0, ['x' => -57, 'y' => 0, 'z' => -34], [], [new Gold(1)]),
            new Skeleton(0, ['x' => -82, 'y' => 0, 'z' => 10], [], [new Gold(1)]),
            new SkeletonWarrior(0, ['x' => -104, 'y' => 0, 'z' => -9], [new LeatherHelm()], [new Gold(1)]),
            new SkeletonWarrior(0, ['x' => -113, 'y' => 0, 'z' => -54], [new LeatherArmor()], [new Gold(1)]),
            new SkeletonWarrior(0, ['x' => -120, 'y' => 0, 'z' => -33], [new LeatherBoots()], [new Gold(1)]),
            new Skeleton(0, ['x' => -97, 'y' => 0, 'z' => -43], [], [new Gold(1)]),
            new Skeleton(0, ['x' => -161, 'y' => 0, 'z' => -20], [], [new Gold(1)]),
            new Skeleton(0, ['x' => 44, 'y' => 0, 'z' => -47], [], [new Gold(1)]),

        ];
    }

}
