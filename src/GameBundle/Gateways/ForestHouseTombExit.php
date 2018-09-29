<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Quests\SkeletonKing;
use GameBundle\Scenes\ForestHouse;

class ForestHouseTombExit extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'exitForest';
        $this->entranceName  = 'Back to forest';
        $this->openSceneType = ForestHouse::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $quest          = $sessionData->getActiveRoom()->getActiveQuest();
        $this->isActive = ($quest && $quest->getQuestId() == SkeletonKing::QUEST_ID && $quest->isFinished);

        return $this;
    }


}
