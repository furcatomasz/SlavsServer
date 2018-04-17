<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class PlayerItems
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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Player", inversedBy="items")
     *
     * @var Player
     */
    protected $player;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $itemId;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $improvement;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $equip;

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
     * @return PlayerItems
     */
    public function setId(int $id): PlayerItems
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
     * @return PlayerItems
     */
    public function setPlayer(Player $player): PlayerItems
    {
        $this->player = $player;

        return $this;
    }

    /**
     * @return int
     */
    public function getItemId(): int
    {
        return $this->itemId;
    }

    /**
     * @param int $itemId
     *
     * @return PlayerItems
     */
    public function setItemId(int $itemId): PlayerItems
    {
        $this->itemId = $itemId;

        return $this;
    }

    /**
     * @return int
     */
    public function getImprovement(): int
    {
        return $this->improvement;
    }

    /**
     * @param int $improvement
     *
     * @return PlayerItems
     */
    public function setImprovement(int $improvement): PlayerItems
    {
        $this->improvement = $improvement;

        return $this;
    }

    /**
     * @return int
     */
    public function getEquip(): int
    {
        return $this->equip;
    }

    /**
     * @param int $equip
     *
     * @return PlayerItems
     */
    public function setEquip(int $equip): PlayerItems
    {
        $this->equip = $equip;

        return $this;
    }

}
