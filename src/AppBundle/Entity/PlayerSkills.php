<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

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
     * @Serializer\Exclude()
     *
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
     * @return PlayerSkills
     */
    public function setId(int $id): PlayerSkills
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
     * @return PlayerSkills
     */
    public function setPlayer(Player $player): PlayerSkills
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
     * @return PlayerSkills
     */
    public function setSkillType(int $skillType): PlayerSkills
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
     * @return PlayerSkills
     */
    public function setCooldown(int $cooldown): PlayerSkills
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
     * @return PlayerSkills
     */
    public function setDamage(int $damage): PlayerSkills
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
     * @return PlayerSkills
     */
    public function setStock(int $stock): PlayerSkills
    {
        $this->stock = $stock;

        return $this;
    }

}
