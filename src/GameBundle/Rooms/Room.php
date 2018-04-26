<?php

namespace GameBundle\Rooms;

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
     * @return array
     */
    public function getMonsters(): array
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

}