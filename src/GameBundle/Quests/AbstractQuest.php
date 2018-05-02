<?php

namespace GameBundle\Quests;

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
     * @return int
     */
    public function getQuestId(): int
    {
        return static::QUEST_ID;
    }

}
