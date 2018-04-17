<?php

namespace GameBundle\Rooms;

class Room
{
    /**
     * @var string
     */
    protected $id;
    /**
     * @var int
     */
    protected $name;
    /**
     * @var array
     */
    protected $monsters;

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
     * @return int
     */
    public function getName(): int
    {
        return $this->name;
    }

    /**
     * @param int $name
     *
     * @return Room
     */
    public function setName(int $name): Room
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




}