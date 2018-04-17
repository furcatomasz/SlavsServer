<?php

namespace GameBundle\Gateways;

use GameBundle\Scenes\ForestHouseStart;

class EntraceHouse extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName = 'Entrace_House';
        $this->openSceneType = ForestHouseStart::TYPE;
    }

    public function verifyIsActive(): AbstractGateway
    {
        return $this;
    }


}
