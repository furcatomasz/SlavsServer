<?php

namespace GameBundle\Quests\Requirements;

use GameBundle\Quests\Chapter;
use PHPSocketIO\Socket;

abstract class AbstractRequirement
{
    /**
     * @var string
     */
    public $name;

    /**
     * @var string
     */
    public $requiredValue;

    /**
     * @var string
     */
    public $actualValue;

    /**        $this->actualChapter += 1;

     * @var string
     */
    public $isFinished;

    /**
     * @var Chapter
     */
    public $chapter;

//    abstract function passRequirement(Socket $socket);
}
