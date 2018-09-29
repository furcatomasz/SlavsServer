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

class MountainsPass extends AbstractScene
{
    const TYPE = 5;
    const START_POSITION = [
        'x' => -130,
        'y' => 0,
        'z' => 132,
    ];

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [
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
            new Skeleton(0, ['x' => -60, 'y' => 0, 'z' => 39], $itemsToDrop, []),
            new Skeleton(0, ['x' => -52, 'y' => 0, 'z' => 35], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => -122, 'y' => 0, 'z' => -16], $itemsToDrop, []),
            new Skeleton(0, ['x' => -118, 'y' => 0, 'z' => -1], $itemsToDrop, []),
            new Skeleton(0, ['x' => -103, 'y' => 0, 'z' => -12], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => -120, 'y' => 0, 'z' => -89], $itemsToDrop, []),

            new Skeleton(0, ['x' => -10, 'y' => 0, 'z' => -53], $itemsToDrop, []),
            new Skeleton(0, ['x' => 7, 'y' => 0, 'z' => -69], $itemsToDrop, []),
            new Skeleton(0, ['x' => -8, 'y' => 0, 'z' => -70], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => 89, 'y' => 0, 'z' => -5], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 97, 'y' => 0, 'z' => 9], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 111, 'y' => 0, 'z' => 10], $itemsToDrop, []),
            new SkeletonBoss(0, ['x' => 118, 'y' => 0, 'z' => 2], $itemsToDrop, []),

            //            new SkeletonWarrior(0, ['x' => -142, 'y' => 0, 'z' => 0], $itemsToDrop, []),

            //            new SkeletonWarrior(0, ['x' => -142, 'y' => 0, 'z' => 0], $itemsToDrop, []),

        ];
    }

}
