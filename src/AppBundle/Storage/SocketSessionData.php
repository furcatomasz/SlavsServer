<?php

namespace AppBundle\Storage;

use AppBundle\Entity\Player;
use GameBundle\Rooms\Room;
use UserBundle\Entity\User;

class SocketSessionData
{

    /**
     * @var User
     */
    public $user;

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
     * @var int
     */
    public $attack;

    /**
     * @var int
     */
    public $activeSkill;

    /**
     * @var string
     */
    public $monsterServerId;

    /**
     * @var Room
     */
    public $activeRoom;

    /**
     * @var array
     */
    public $itemsToDrop;

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
     * @return string|null
     */
    public function getConnectionId(): ?string
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
     * @return int
     */
    public function getAttack(): ?int
    {
        return $this->attack;
    }

    /**
     * @param int|null $monsterKey
     *
     * @return SocketSessionData
     */
    public function setAttack(?int $monsterKey): SocketSessionData
    {
        $this->attack = $monsterKey;

        return $this;
    }

    /**
     * @return array
     */
    public function getItemsToDrop(): ?array
    {
        return $this->itemsToDrop;
    }

    /**
     * @param array $itemsToDrop
     *
     * @return SocketSessionData
     */
    public function setItemsToDrop(array $itemsToDrop)
    {
        $this->itemsToDrop = $itemsToDrop;

        return $this;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     *
     * @return SocketSessionData
     */
    public function setUser(User $user): SocketSessionData
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getActiveSkill(): ?int
    {
        return $this->activeSkill;
    }

    /**
     * @param int $activeSkill
     *
     * @return SocketSessionData
     */
    public function setActiveSkill(int $activeSkill): SocketSessionData
    {
        $this->activeSkill = $activeSkill;

        return $this;
    }

}