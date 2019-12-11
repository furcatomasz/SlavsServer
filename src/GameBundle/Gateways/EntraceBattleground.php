<?php

namespace GameBundle\Gateways;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Quests\SkeletonKing;
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
        $quest          = $sessionData->getActiveRoom()->getActiveQuest();
        $this->isActive = ($quest && $quest->getQuestId() == SkeletonKing::QUEST_ID && $quest->actualChapter == 2);

        return $this;
    }


}
