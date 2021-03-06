<?php

namespace GameBundle\Rooms;

use GameBundle\Quests\AbstractQuest;
use GameBundle\Scenes\AbstractScene;

class Room
{
    /**
     * @var string
     */
    protected $id;
    /**
     * @var string
     */
    protected $name;
    /**
     * @var array
     */
    protected $monsters;
    /**
     * @var array
     */
    protected $players;

    /**
     * @var AbstractQuest
     */
    protected $activeQuest;

    /**
     * @var AbstractScene[]|null
     */
    protected $stateScenes = [];

    /**
     * @var AbstractScene
     */
    protected $activeScene;

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     *
     * @return Room
     */
    public function setId(string $id): Room
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return Room
     */
    public function setName(string $name): Room
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return array|null
     */
    public function getMonsters(): ?array
    {
        return $this->monsters;
    }

    /**
     * @param array $monsters
     *
     * @return Room
     */
    public function setMonsters(array $monsters): Room
    {
        $this->monsters = $monsters;

        return $this;
    }

    /**
     * @return array
     */
    public function getPlayers(): array
    {
        return $this->players;
    }

    /**
     * @param array $players
     *
     * @return Room
     */
    public function setPlayers(array $players): Room
    {
        $this->players = $players;

        return $this;
    }

    /**
     * @return AbstractQuest|null
     */
    public function getActiveQuest(): ?AbstractQuest
    {
        return $this->activeQuest;
    }

    /**
     * @param AbstractQuest $activeQuest
     *
     * @return Room
     */
    public function setActiveQuest(AbstractQuest $activeQuest): Room
    {
        $this->activeQuest = $activeQuest;

        return $this;
    }

    /**
     * @return AbstractScene[]|null
     */
    public function getStateScenes(): ?array
    {
        return $this->stateScenes;
    }

    /**
     * @param AbstractScene[] $stateScenes
     *
     * @return Room
     */
    public function setStateScenes(array $stateScenes): Room
    {
        $this->stateScenes = $stateScenes;

        return $this;
    }

    /**
     * @return AbstractScene|null
     */
    public function getActiveScene(): ?AbstractScene
    {
        return $this->activeScene;
    }

    /**
     * @param AbstractScene $activeScene
     *
     * @return Room
     */
    public function setActiveScene(AbstractScene $activeScene): Room
    {
        $this->activeScene = $activeScene;

        return $this;
    }
}
