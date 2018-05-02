<?php

namespace GameBundle\Quests;

use GameBundle\Monsters\Skeleton;
use GameBundle\Quests\Requirements\KillMonster;

class SkeletonKing extends AbstractQuest
{
    const QUEST_ID = 1;

    /**
     * SkeletonKing constructor.
     */
    public function __construct()
    {
        $this->objectName    = 'questLog';
        $this->title         = 'Skeleton King';
        $this->description   = 'Kill the boss in tombs.';
        $this->actualChapter = 1;

        $chapters[1] = (new Chapter('Kill five skeletons in forest.', $this))
            ->addRequrement(
                new KillMonster(
                    new Skeleton(),
                    5
                )
            );

        $this->chapters = $chapters;
    }


}
