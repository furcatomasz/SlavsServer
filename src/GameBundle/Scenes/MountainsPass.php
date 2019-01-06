<?php

namespace GameBundle\Scenes;

use GameBundle\BabylonObjects\Vector3;
use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\EntraceForestHouseTomb;
use GameBundle\Gateways\EntraceHouse;
use GameBundle\Items\Armors\LeatherArmor;
use GameBundle\Items\Boots\LeatherBoots;
use GameBundle\Items\Gloves\LeatherGloves;
use GameBundle\Items\Helms\LeatherHelm;
use GameBundle\Items\Shields\MediumWoodenShield;
use GameBundle\Items\Shields\SmallWoodenShield;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Monsters\BigSkeleton;
use GameBundle\Monsters\Skeleton;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\Monsters\SkeletonWarrior;
use GameBundle\SpecialItems\Gold;
use GameBundle\SpecialItems\KeyToChest;

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

        $this->chests = [
            new WoodChest(new Vector3(-108, 0, 135), new Vector3(0, 1.7, 0), new Vector3(-108, 0, 132), [new Gold(50), new KeyToChest(1), new LongSword(null, 5)]),
        ];

        $itemsToDrop = [
            [
                'chance' => 10,
                'item'   => new LeatherHelm(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new LeatherBoots(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new LeatherArmor(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new LeatherGloves(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new SmallWoodenShield(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new MediumWoodenShield(null, random_int(0,10)),
            ],
            [
                'chance' => 10,
                'item'   => new Sword(null, random_int(0,10)),
            ],
        ];

        $this->monsters = [
            new Skeleton(0, ['x' => -60, 'y' => 0, 'z' => 39], $itemsToDrop, []),
            new Skeleton(0, ['x' => -52, 'y' => 0, 'z' => 35], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => -122, 'y' => 0, 'z' => -16], $itemsToDrop, []),
            new Skeleton(0, ['x' => -118, 'y' => 0, 'z' => -1], $itemsToDrop, []),
            new BigSkeleton(0, ['x' => -103, 'y' => 0, 'z' => -12], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => -120, 'y' => 0, 'z' => -89], $itemsToDrop, []),

            new Skeleton(0, ['x' => -10, 'y' => 0, 'z' => -53], $itemsToDrop, []),
            new BigSkeleton(0, ['x' => 7, 'y' => 0, 'z' => -69], $itemsToDrop, []),
            new BigSkeleton(0, ['x' => -8, 'y' => 0, 'z' => -70], $itemsToDrop, []),

            new SkeletonWarrior(0, ['x' => 89, 'y' => 0, 'z' => -5], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 97, 'y' => 0, 'z' => 9], $itemsToDrop, []),
            new BigSkeleton(0, ['x' => 111, 'y' => 0, 'z' => 10], $itemsToDrop, []),
            new SkeletonBoss(0, ['x' => 118, 'y' => 0, 'z' => 2], $itemsToDrop, []),
        ];
    }

}
