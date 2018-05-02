<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
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
