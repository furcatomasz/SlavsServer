<?php

class SocketSessionData
{

    /**
     * @var \AppBundle\Entity\Player
     */
    public $activePlayer;

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
     * @var int
     */
    public $monsterServerId;

    /**
     * @return \AppBundle\Entity\Player
     */
    public function getActivePlayer(): \AppBundle\Entity\Player
    {
        return $this->activePlayer;
    }

    /**
     * @param \AppBundle\Entity\Player $activePlayer
     *
     * @return SocketSessionData
     */
    public function setActivePlayer(\AppBundle\Entity\Player $activePlayer): SocketSessionData
    {
        $this->activePlayer = $activePlayer;

        return $this;
    }

    /**
     * @return int
     */
    public function getActiveScene(): int
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
     * @return int
     */
    public function getLastPlayerAttack(): int
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
     * @return int
     */
    public function getMonsterServerId(): int
    {
        return $this->monsterServerId;
    }

    /**
     * @param int $monsterServerId
     *
     * @return SocketSessionData
     */
    public function setMonsterServerId(int $monsterServerId): SocketSessionData
    {
        $this->monsterServerId = $monsterServerId;

        return $this;
    }

    /**
     * @return array
     */
    public function getPosition(): array
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

}