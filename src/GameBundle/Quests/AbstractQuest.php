<?php

namespace GameBundle\Quests;

use AppBundle\Storage\SocketSessionData;
use JMS\Serializer\Annotation as Serializer;
use PHPSocketIO\Socket;

abstract class AbstractQuest
{
    const QUEST_ID = 0;

    /**
     * @var string
     */
    public $title;

    /**
     * @var string
     */
    public $objectName;

    /**
     * @var string
     */
    public $description;

    /**
     * @var array
     */
    public $chapters;

    /**
     * @var int
     */
    public $actualChapter;

    /**
     * @var int
     */
    public $isFinished;

    /**
     * @Serializer\VirtualProperty()
     *
     * @return int
     */
    public function getQuestId(): int
    {
        return static::QUEST_ID;
    }

    /**
     * @return $this
     */
    public function setNewChapter()
    {
        if($this->actualChapter == count($this->chapters)) {
            $this->isFinished = true;
        } else {
            $this->actualChapter += 1;
        }

        return $this;
    }

}
