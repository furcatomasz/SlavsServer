<?php

namespace GameBundle\Scenes;

use AppBundle\Entity\PlayerItem;
use GameBundle\BabylonObjects\Vector3;
use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\EntraceBattleground;
use GameBundle\Gateways\ForestHouseTombExit;
use GameBundle\Items\Armors\LeatherArmor;
use GameBundle\Items\Boots\LeatherBoots;
use GameBundle\Items\Gloves\LeatherGloves;
use GameBundle\Items\Helms\LeatherHelm;
use GameBundle\Items\Shields\MediumWoodenShield;
use GameBundle\Items\Shields\SmallWoodenShield;
use GameBundle\Items\Weapons\LongSword;
use GameBundle\Items\Weapons\Sword;
use GameBundle\Monsters\Skeleton;
use GameBundle\Monsters\SkeletonBoss;
use GameBundle\Monsters\SkeletonWarrior;
use GameBundle\SpecialItems\Gold;
use GameBundle\SpecialItems\Herbs;
use GameBundle\SpecialItems\KeyToChest;
use GameBundle\SpecialItems\Mushrooms;
use GameBundle\SpecialItems\Potion;
use GameBundle\SpecialItems\Randomizer\Randomizer;

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
        $this->gateways = [
            new EntraceBattleground()
        ];
        $this->chests   = [
            new WoodChest(
                new Vector3(-19, 0, 20),
                new Vector3(0, 1.5, 0),
                new Vector3(-19, 0, 18),
                [
                    new Gold(50),
                    new KeyToChest(1),
                    new Potion(1),
                    new LongSword(null, +3)
                ]
            ),
        ];

        $itemsToDrop = [
            [
                'chance' => 99,
                'item'   => new LeatherHelm(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new LeatherBoots(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new LeatherArmor(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new LeatherGloves(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new SmallWoodenShield(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new MediumWoodenShield(null, 7),
            ],
            [
                'chance' => 99,
                'item'   => new Sword(null, 7),
            ],
        ];

        $this->monsters = [
            new SkeletonWarrior(0, ['x' => 17, 'y' => 0, 'z' => 17], $itemsToDrop, []),
            new Skeleton(0, ['x' => 36, 'y' => 0, 'z' => -35], $itemsToDrop, []),
            new Skeleton(0, ['x' => 136, 'y' => 0, 'z' => -35], $itemsToDrop, []),
            new Skeleton(0, ['x' => 56, 'y' => 0, 'z' => -35], $itemsToDrop, []),
            new Skeleton(0, ['x' => 0, 'y' => 0, 'z' => -45], $itemsToDrop, []),
            new Skeleton(0, ['x' => 0, 'y' => 0, 'z' => -35], $itemsToDrop, []),
            new SkeletonWarrior(0, ['x' => 38, 'y' => 0, 'z' => -44], $itemsToDrop, []),
        ];

        $this->randomSpecialItems = array_merge(
            Randomizer::createSpecialItem(
                new Mushrooms(1),
                [
                    new Vector3(10, 0, 0),
                    new Vector3(20, 0, 0),
                    new Vector3(30, 0, 0),
                    new Vector3(0, 0, 10),
                    new Vector3(0, 0, 20),
                    new Vector3(0, 0, 30),
                ],
                50
            ),
            Randomizer::createSpecialItem(
                new Herbs(1),
                [
                    new Vector3(15, 0, 0),
                    new Vector3(25, 0, 0),
                    new Vector3(35, 0, 0),
                    new Vector3(0, 0, 15),
                    new Vector3(0, 0, 25),
                    new Vector3(0, 0, 35),
                ],
                50
            )
        );
        $this->randomSpecialItems = [];
    }

}
