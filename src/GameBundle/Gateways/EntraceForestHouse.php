<?php

namespace GameBundle\Gateways;

use GameBundle\Scenes\ForestHouse;

class EntraceForestHouse extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName = 'exitHouse';
        $this->openSceneType = ForestHouse::TYPE;
    }

    public function verifyIsActive(): AbstractGateway
    {
        return $this;
    }


}
