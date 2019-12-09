<?php

namespace AppBundle\Storage;

use AppBundle\Entity\Player;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\AbstractScene;
use GameBundle\Skills\AbstractSkill;
use JMS\Serializer\Annotation as Serializer;
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
     * @var float
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
     * @var AbstractSkill
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
     * SocketSessionData constructor.
     */
    public function __construct()
    {
        $this->activeRoom = (new Room())->setId('RoomTest')->setName('RoomTest')->setPlayers([]);
    }


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
     * @return float|null
     */
    public function getLastPlayerAttack(): ?float
    {
        return $this->lastPlayerAttack;
    }

    /**
     * @param float $lastPlayerAttack
     *
     * @return SocketSessionData
     */
    public function setLastPlayerAttack(float $lastPlayerAttack): SocketSessionData
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
    public function setTargetPoint(?array $targetPoint): SocketSessionData
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
     * @return AbstractSkill|null
     */
    public function getActiveSkill(): ?AbstractSkill
    {
        return $this->activeSkill;
    }

    /**
     * @param AbstractSkill|null $activeSkill
     *
     * @return SocketSessionData
     */
    public function setActiveSkill(?AbstractSkill $activeSkill): SocketSessionData
    {
        $this->activeSkill = $activeSkill;

        return $this;
    }

}
