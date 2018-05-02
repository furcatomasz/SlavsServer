<?php

namespace GameBundle\Quests\Requirements;

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

    /**
     * @var string
     */
    public $isFinished;

    /**
     * @param Socket $socket
     *
     * @return mixed
     */
    abstract function passRequirement(Socket $socket);
}
