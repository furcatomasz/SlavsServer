<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PlayerItemRepository")
 */
class PlayerItem
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
     * @Serializer\Exclude()
     *
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
     * @return PlayerItem
     */
    public function setId(int $id): PlayerItem
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
     * @return PlayerItem
     */
    public function setPlayer(Player $player): PlayerItem
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
     * @return PlayerItem
     */
    public function setItemId(int $itemId): PlayerItem
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
     * @return PlayerItem
     */
    public function setImprovement(int $improvement): PlayerItem
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
     * @return PlayerItem
     */
    public function setEquip(int $equip): PlayerItem
    {
        $this->equip = $equip;

        return $this;
    }

}
