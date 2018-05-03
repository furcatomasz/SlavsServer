<?php

namespace GameBundle\Quests\Requirements;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Monsters\AbstractMonster;
use PHPSocketIO\Socket;

class KillMonster extends AbstractRequirement
{

    /**
     * @var AbstractMonster
     */
    public $monsterToKill;

    /**
     * KillMonster constructor.
     *
     * @param AbstractMonster $monsterToKill
     * @param int             $requiredValue
     */
    public function __construct(AbstractMonster $monsterToKill, int $requiredValue)
    {
        $this->monsterToKill = $monsterToKill;
        $this->requiredValue = $requiredValue;
        $this->actualValue   = 0;
        $this->name          = sprintf('Kill %s %s', $requiredValue, $monsterToKill->getName());
    }

    /**
     * @param Socket $socket
     *
     * @return mixed|void
     * @throws \Exception
     */
    public function passRequirement(Socket $socket, SocketSessionData $sessionData)
    {
        $this->actualValue += 1;

        if ($this->requiredValue <= $this->actualValue) {
            $this->isFinished = true;
        }

        $message = 'Killed ' . $this->actualValue . '/' . $this->requiredValue . ' ' . $this->monsterToKill->getName();
        $socket->emit(
            'questRequirementInformation',
            $message
        );

        $this->chapter->checkRequirements($socket, $sessionData);
    }


}
