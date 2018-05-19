<?php

namespace GameBundle\Scenes;

use GameBundle\Gateways\EntraceForestHouseTomb;
use GameBundle\Gateways\EntraceHouse;
use GameBundle\Items\Armors\LeatherArmor;
use GameBundle\Items\Boots\LeatherBoots;
use GameBundle\Items\Gloves\LeatherGloves;
use GameBundle\Items\Helms\LeatherHelm;
use GameBundle\Items\Shields\MediumWoodenShield;
use GameBundle\Items\Shields\SmallWoodenShield;
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

        $itemsToDrop = [
            [
                'chance' => 5,
                'item'   => new LeatherHelm(),
            ],
            [
                'chance' => 5,
                'item'   => new LeatherBoots(),
            ],
            [
                'chance' => 5,
                'item'   => new LeatherArmor(),
            ],
            [
                'chance' => 5,
                'item'   => new LeatherGloves(),
            ],
            [
                'chance' => 5,
                'item'   => new SmallWoodenShield(),
            ],
            [
                'chance' => 5,
                'item'   => new MediumWoodenShield(),
            ],

        ];

        $this->monsters = [
            new Skeleton(0, ['x' => -42, 'y' => 0, 'z' => -33], $itemsToDrop, []),
            new Skeleton(0, ['x' => -57, 'y' => 0, 'z' => -34], $itemsToDrop, []),
            new Skeleton(0, ['x' => -82, 'y' => 0, 'z' => 10], $itemsToDrop, []),
            new Skeleton(0, ['x' => -104, 'y' => 0, 'z' => -9], $itemsToDrop, []),
            new Skeleton(0, ['x' => -113, 'y' => 0, 'z' => -54], $itemsToDrop, []),
            new Skeleton(0, ['x' => -120, 'y' => 0, 'z' => -33], $itemsToDrop, []),
            new Skeleton(0, ['x' => -97, 'y' => 0, 'z' => -43], $itemsToDrop, []),
            new Skeleton(0, ['x' => -161, 'y' => 0, 'z' => -20], $itemsToDrop, []),
            new Skeleton(0, ['x' => 44, 'y' => 0, 'z' => -47], $itemsToDrop, []),
            new Skeleton(0, ['x' => -9, 'y' => 0, 'z' => -60], $itemsToDrop, []),
            new Skeleton(0, ['x' => -8, 'y' => 0, 'z' => -144], $itemsToDrop, []),
            new Skeleton(0, ['x' => -46, 'y' => 0, 'z' => -187], $itemsToDrop, []),
            new Skeleton(0, ['x' => -109, 'y' => 0, 'z' => -153], $itemsToDrop, []),
            new Skeleton(0, ['x' => -157, 'y' => 0, 'z' => -131], $itemsToDrop, []),
            new Skeleton(0, ['x' => -60, 'y' => 0, 'z' => -106], $itemsToDrop, []),


            new SkeletonWarrior(0, ['x' => 47, 'y' => 0, 'z' => -149], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => -193, 'y' => 0, 'z' => -83], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => -151, 'y' => 0, 'z' => -105], $itemsToDrop, []),

        ];
    }

}
