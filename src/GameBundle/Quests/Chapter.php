<?php

namespace GameBundle\Quests;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Quests\Awards\AbstractAward;
use GameBundle\Quests\Requirements\AbstractRequirement;
use PHPSocketIO\Socket;

class Chapter
{

    /**
     * @var string
     */
    public $description;
    /**
     * @var AbstractQuest
     */
    public $quest;

    /**
     * @var array
     */
    public $awards;
    /**
     * @var array
     */
    public $requirements;

    /**
     * Chapter constructor.
     *
     * @param string        $description
     * @param AbstractQuest $quest
     */
    public function __construct(string $description, AbstractQuest $quest)
    {
        $this->description = $description;
        $this->quest       = $quest;

        $this->requirements = [];
        $this->awards       = [];
    }

    /**
     * @param AbstractRequirement $requirement
     *
     * @return $this
     */
    public function addRequrement(AbstractRequirement $requirement)
    {
        $requirement->chapter = $this;

        $this->requirements[] = $requirement;

        return $this;
    }

    /**
     * @param AbstractAward $award
     *
     * @return $this
     */
    public function addAward(AbstractAward $award)
    {
        $this->awards[] = $award;

        return $this;
    }

    /**
     * @param Socket            $socket
     * @param SocketSessionData $sessionData
     *
     * @return $this
     * @throws \Exception
     */
    public function checkRequirements(Socket $socket, SocketSessionData $sessionData)
    {
        $requirements              = $this->requirements;
        $requirementsCount         = count($requirements);
        $requirementsFinishedCount = 0;

        foreach ($requirements as $requirement) {
            /** @var AbstractRequirement $requirement */
            if ($requirement->isFinished) {
                $requirementsFinishedCount += 1;

                $socket->emit(
                    'questRequirementDoneInformation',
                    'Quest requrement complete'
                );
            }
        }

        if ($requirementsCount == $requirementsFinishedCount) {
            $this->quest->setNewChapter();
        }

        return $this;
    }
}


