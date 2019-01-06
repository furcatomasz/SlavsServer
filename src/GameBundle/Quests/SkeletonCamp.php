<?php

namespace GameBundle\Quests;

use GameBundle\Monsters\BigSkeleton;
use GameBundle\Quests\Requirements\KillMonster;

class SkeletonCamp extends AbstractQuest
{
    const QUEST_ID = 2;

    /**
     * SkeletonKing constructor.
     */
    public function __construct()
    {
        $this->objectName    = null;
        $this->title         = 'Skeleton Camp';
        $this->description   = null;
        $this->actualChapter = 1;

        $chapters[1] = (new Chapter('Kill all big skeletons in mountain pass.', $this))
            ->addRequrement(
                new KillMonster(
                    new BigSkeleton(),
                    4
                )
            );



        $this->chapters = $chapters;
    }


}
