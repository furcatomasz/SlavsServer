<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class PlayerAttributes
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
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $strength;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $durability;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $vitality;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $stamina;

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
     * @return PlayerAttributes
     */
    public function setId(int $id): PlayerAttributes
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return int
     */
    public function getStrength(): int
    {
        return $this->strength;
    }

    /**
     * @param int $strength
     *
     * @return PlayerAttributes
     */
    public function setStrength(int $strength): PlayerAttributes
    {
        $this->strength = $strength;

        return $this;
    }

    /**
     * @return int
     */
    public function getDurability(): int
    {
        return $this->durability;
    }

    /**
     * @param int $durability
     *
     * @return PlayerAttributes
     */
    public function setDurability(int $durability): PlayerAttributes
    {
        $this->durability = $durability;

        return $this;
    }

    /**
     * @return int
     */
    public function getVitality(): int
    {
        return $this->vitality;
    }

    /**
     * @param int $vitality
     *
     * @return PlayerAttributes
     */
    public function setVitality(int $vitality): PlayerAttributes
    {
        $this->vitality = $vitality;

        return $this;
    }

    /**
     * @return int
     */
    public function getStamina(): int
    {
        return $this->stamina;
    }

    /**
     * @param int $stamina
     *
     * @return PlayerAttributes
     */
    public function setStamina(int $stamina): PlayerAttributes
    {
        $this->stamina = $stamina;

        return $this;
    }

}
