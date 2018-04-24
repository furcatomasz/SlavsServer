<?php

namespace AppBundle\Storage;

use AppBundle\Entity\Player;
use GameBundle\Rooms\Room;

class SocketSessionData
{

    /**
     * @var Player
     */
    public $activePlayer;

    /**
     * @var string
     */
    public $connectionId;

    /**
     * @var int
     */
    public $activeScene;

    /**
     * @var int
     */
    public $lastPlayerAttack;

    /**
     * @var array
     */
    public $position;

    /**
     * @var array
     */
    public $targetPoint;

    /**
     * @var bool
     */
    public $attack;

    /**
     * @var string
     */
    public $monsterServerId;

    /**
     * @var Room
     */
    public $activeRoom;

    /**
     * @return Player|null
     */
    public function getActivePlayer(): ?Player
    {
        return $this->activePlayer;
    }

    /**
     * @param Player $activePlayer
     *
     * @return SocketSessionData
     */
    public function setActivePlayer(Player $activePlayer): SocketSessionData
    {
        $this->activePlayer = $activePlayer;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getActiveScene(): ?int
    {
        return $this->activeScene;
    }

    /**
     * @param int $activeScene
     *
     * @return SocketSessionData
     */
    public function setActiveScene(int $activeScene): SocketSessionData
    {
        $this->activeScene = $activeScene;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getLastPlayerAttack(): ?int
    {
        return $this->lastPlayerAttack;
    }

    /**
     * @param int $lastPlayerAttack
     *
     * @return SocketSessionData
     */
    public function setLastPlayerAttack(int $lastPlayerAttack): SocketSessionData
    {
        $this->lastPlayerAttack = $lastPlayerAttack;

        return $this;
    }

    /**
     * @return string
     */
    public function getMonsterServerId(): string
    {
        return $this->monsterServerId;
    }

    /**
     * @param string $monsterServerId
     *
     * @return SocketSessionData
     */
    public function setMonsterServerId(string $monsterServerId): SocketSessionData
    {
        $this->monsterServerId = $monsterServerId;

        return $this;
    }

    /**
     * @return array|null
     */
    public function getPosition(): ?array
    {
        return $this->position;
    }

    /**
     * @param array $position
     *
     * @return SocketSessionData
     */
    public function setPosition(array $position): SocketSessionData
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return array|null
     */
    public function getTargetPoint(): ?array
    {
        return $this->targetPoint;
    }

    /**
     * @param array $targetPoint
     *
     * @return SocketSessionData
     */
    public function setTargetPoint(array $targetPoint): SocketSessionData
    {
        $this->targetPoint = $targetPoint;

        return $this;
    }

    /**
     * @return Room|null
     */
    public function getActiveRoom(): ?Room
    {
        return $this->activeRoom;
    }

    /**
     * @param Room $activeRoom
     *
     * @return SocketSessionData
     */
    public function setActiveRoom(Room $activeRoom): SocketSessionData
    {
        $this->activeRoom = $activeRoom;

        return $this;
    }

    /**
     * @return string
     */
    public function getConnectionId(): string
    {
        return $this->connectionId;
    }

    /**
     * @param string $connectionId
     *
     * @return SocketSessionData
     */
    public function setConnectionId(string $connectionId): SocketSessionData
    {
        $this->connectionId = $connectionId;

        return $this;
    }

    /**
     * @return bool
     */
    public function getAttack(): ?bool
    {
        return $this->attack;
    }

    /**
     * @param bool $attack
     *
     * @return SocketSessionData
     */
    public function setAttack(bool $attack): SocketSessionData
    {
        $this->attack = $attack;

        return $this;
    }

}