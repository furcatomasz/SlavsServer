<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
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

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        return $this;
    }


}
