<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class PlayerSkills
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Player", inversedBy="skills")
     *
     * @var Player
     */
    protected $player;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $skillType;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $cooldown;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $damage;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $stock;

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
     * @return PlayerSkkils
     */
    public function setId(int $id): PlayerSkkils
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
     * @return PlayerSkkils
     */
    public function setPlayer(Player $player): PlayerSkkils
    {
        $this->player = $player;

        return $this;
    }

    /**
     * @return int
     */
    public function getSkillType(): int
    {
        return $this->skillType;
    }

    /**
     * @param int $skillType
     *
     * @return PlayerSkkils
     */
    public function setSkillType(int $skillType): PlayerSkkils
    {
        $this->skillType = $skillType;

        return $this;
    }

    /**
     * @return int
     */
    public function getCooldown(): int
    {
        return $this->cooldown;
    }

    /**
     * @param int $cooldown
     *
     * @return PlayerSkkils
     */
    public function setCooldown(int $cooldown): PlayerSkkils
    {
        $this->cooldown = $cooldown;

        return $this;
    }

    /**
     * @return int
     */
    public function getDamage(): int
    {
        return $this->damage;
    }

    /**
     * @param int $damage
     *
     * @return PlayerSkkils
     */
    public function setDamage(int $damage): PlayerSkkils
    {
        $this->damage = $damage;

        return $this;
    }

    /**
     * @return int
     */
    public function getStock(): int
    {
        return $this->stock;
    }

    /**
     * @param int $stock
     *
     * @return PlayerSkkils
     */
    public function setStock(int $stock): PlayerSkkils
    {
        $this->stock = $stock;

        return $this;
    }

}
