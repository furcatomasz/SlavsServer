<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Scenes\ForestHouse;

class EntraceForestHouse extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'exitHouse';
        $this->entranceName  = 'Entrance For forest';
        $this->openSceneType = ForestHouse::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $this->isActive = ($sessionData->getActiveRoom()->getActiveQuest()) ? true : false;

        return $this;
    }


}
