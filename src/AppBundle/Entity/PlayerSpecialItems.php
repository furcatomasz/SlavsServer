<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class PlayerSpecialItems
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     * @var int
     */
    protected $id;

    /**
     **
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Player", inversedBy="specialItems")
     *
     * @var Player
     */
    protected $player;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $type;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $value;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     *
     * @return PlayerSpecialItems
     */
    public function setId(int $id): PlayerSpecialItems
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return Player
     */
    public function getPlayer(): Player
    {
        return $this->player;
    }

    /**
     * @param Player $player
     *
     * @return PlayerSpecialItems
     */
    public function setPlayer(Player $player): PlayerSpecialItems
    {
        $this->player = $player;

        return $this;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return $this->type;
    }

    /**
     * @param int $type
     *
     * @return PlayerSpecialItems
     */
    public function setType(int $type): PlayerSpecialItems
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return int
     */
    public function getValue(): int
    {
        return $this->value;
    }

    /**
     * @param int $value
     *
     * @return PlayerSpecialItems
     */
    public function setValue(int $value): PlayerSpecialItems
    {
        $this->value = $value;

        return $this;
    }

}
