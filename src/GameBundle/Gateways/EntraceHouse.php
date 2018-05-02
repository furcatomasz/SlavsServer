<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
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
