<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Scenes\ForestHouse;
use GameBundle\Scenes\ForestHouseStart;

class EntraceForestHouseHouse extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'Entrace_House';
        $this->entranceName  = 'Entrance For house';
        $this->openSceneType = ForestHouseStart::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $this->isActive = false;

        return $this;
    }


}
