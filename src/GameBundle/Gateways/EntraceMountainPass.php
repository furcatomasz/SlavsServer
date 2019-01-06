<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Quests\SkeletonCamp;
use GameBundle\Scenes\ForestHouse;
use GameBundle\Scenes\MountainsPass;

class EntraceMountainPass extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'exit';
        $this->entranceName  = 'Entrance For Mountain Pass';
        $this->openSceneType = MountainsPass::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $quest          = $sessionData->getActiveRoom()->getActiveQuest();
        $this->isActive = ($quest && $quest->getQuestId() == SkeletonCamp::QUEST_ID);

        return $this;
    }


}
