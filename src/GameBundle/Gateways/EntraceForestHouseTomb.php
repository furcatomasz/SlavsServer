<?php

namespace GameBundle\Gateways;

use GameBundle\Scenes\ForestHouseTomb;

class EntraceForestHouseTomb extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName = 'Entrace_Tomb';
        $this->openSceneType = ForestHouseTomb::TYPE;
    }

    public function verifyIsActive(): AbstractGateway
    {
        return $this;
    }


}
