<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Scenes\Battleground;
use GameBundle\Scenes\ForestHouse;

class EntraceBattleground extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'entrace';
        $this->entranceName  = 'Entrance For battleground';
        $this->openSceneType = Battleground::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $this->isActive = true;

        return $this;
    }


}
