<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Quests\SkeletonKing;
use GameBundle\Scenes\ForestHouseTomb;

class EntraceForestHouseTomb extends AbstractGateway
{
    /**
     * EntraceForestHouse constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'Entrace_Tomb';
        $this->entranceName  = 'Entrance For Tombs';
        $this->openSceneType = ForestHouseTomb::TYPE;
    }

    /**
     * @param SocketSessionData $sessionData
     *
     * @return AbstractGateway
     */
    public function verifyIsActive(SocketSessionData $sessionData): AbstractGateway
    {
        $quest          = $sessionData->getActiveRoom()->getActiveQuest();
        $this->isActive = ($quest && $quest->getQuestId() == SkeletonKing::QUEST_ID && $quest->actualChapter == 2);

        return $this;
    }


}
