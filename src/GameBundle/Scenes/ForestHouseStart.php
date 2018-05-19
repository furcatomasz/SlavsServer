<?php

namespace GameBundle\Scenes;

use GameBundle\Chests\WoodChest;
use GameBundle\Gateways\EntraceForestHouse;
use GameBundle\Gateways\EntraceForestHouseTomb;
use GameBundle\Gateways\EntraceHouse;
use GameBundle\Quests\SkeletonKing;
use GameBundle\SpecialItems\Gold;

class ForestHouseStart extends AbstractScene
{
    const TYPE = 1;

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [
            new EntraceForestHouse(),
        ];

        $this->quests = [
            new SkeletonKing(),
        ];
    }

}
