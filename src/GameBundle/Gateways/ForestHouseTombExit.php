<?php

namespace GameBundle\Gateways;

use GameBundle\Scenes\ForestHouse;

class ForestHouseTombExit extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName = 'exitForest';
        $this->openSceneType = ForestHouse::TYPE;
    }

    public function verifyIsActive(): AbstractGateway
    {
        return $this;
    }


}
