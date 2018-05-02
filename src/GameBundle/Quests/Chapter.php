<?php

namespace GameBundle\Quests;

use GameBundle\Quests\Awards\AbstractAward;
use GameBundle\Quests\Requirements\AbstractRequirement;

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
}


