<?php

namespace GameBundle\Scenes;

use GameBundle\Gateways\EntraceForestHouse;
use GameBundle\Gateways\EntraceForestHouseTomb;
use GameBundle\Gateways\EntraceHouse;
use GameBundle\Quests\SkeletonKing;

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
