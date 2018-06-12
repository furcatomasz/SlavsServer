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
            new SkeletonWarrior(0, ['x' => -142, 'y' => 0, 'z' => 0], $itemsToDrop, []),
            new Skeleton(0, ['x' => -125, 'y' => 0, 'z' => -4], $itemsToDrop, []),
            new Skeleton(0, ['x' => -125, 'y' => 0, 'z' => 17], $itemsToDrop, []),
            new Skeleton(0, ['x' => -89, 'y' => 0, 'z' => 33], $itemsToDrop, []),
            new Skeleton(0, ['x' => -70, 'y' => 0, 'z' => -2], $itemsToDrop, []),

            new Skeleton(0, ['x' => -48, 'y' => 0, 'z' => -38], $itemsToDrop, []),
            new Skeleton(0, ['x' => -48, 'y' => 0, 'z' => -54], $itemsToDrop, []),
            new Skeleton(0, ['x' => -92, 'y' => 0, 'z' => -71], $itemsToDrop, []),
            new Skeleton(0, ['x' => -137, 'y' => 0, 'z' => -72], $itemsToDrop, []),
            new Skeleton(0, ['x' => -151, 'y' => 0, 'z' => -113], $itemsToDrop, []),
            new Skeleton(0, ['x' => -98, 'y' => 0, 'z' => -112], $itemsToDrop, []),
            new Skeleton(0, ['x' => -123, 'y' => 0, 'z' => -148], $itemsToDrop, []),
            new Skeleton(0, ['x' => -150, 'y' => 0, 'z' => -166], $itemsToDrop, []),
            new Skeleton(0, ['x' => -136, 'y' => 0, 'z' => -172], $itemsToDrop, []),
            new Skeleton(0, ['x' => -93, 'y' => 0, 'z' => -168], $itemsToDrop, []),
            new Skeleton(0, ['x' => -59, 'y' => 0, 'z' => -149], $itemsToDrop, []),
            new Skeleton(0, ['x' => -68, 'y' => 0, 'z' => -142], $itemsToDrop, []),
            new Skeleton(0, ['x' => -59, 'y' => 0, 'z' => -135], $itemsToDrop, []),
            new Skeleton(0, ['x' => -46, 'y' => 0, 'z' => -108], $itemsToDrop, []),
            new Skeleton(0, ['x' => -7, 'y' => 0, 'z' => -150], $itemsToDrop, []),
            new Skeleton(0, ['x' => 32, 'y' => 0, 'z' => -70], $itemsToDrop, []),
            new Skeleton(0, ['x' => 49, 'y' => 0, 'z' => -70], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 55, 'y' => 0, 'z' => -133], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 48, 'y' => 0, 'z' => -142], $itemsToDrop, []),

        ];
    }

}
