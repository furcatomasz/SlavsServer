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
    protected $attackSpeed;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $defence;

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
    protected $health;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $critic;

    /**
     * @ORM\Column(type="integer")
     *
     * @var integer
     */
    protected $blockChance;

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
    public function getAttackSpeed(): int
    {
        return $this->attackSpeed;
    }

    /**
     * @param int $attackSpeed
     *
     * @return PlayerAttributes
     */
    public function setAttackSpeed(int $attackSpeed): PlayerAttributes
    {
        $this->attackSpeed = $attackSpeed;

        return $this;
    }

    /**
     * @return int
     */
    public function getDefence(): int
    {
        return $this->defence;
    }

    /**
     * @param int $defence
     *
     * @return PlayerAttributes
     */
    public function setDefence(int $defence): PlayerAttributes
    {
        $this->defence = $defence;

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
     * @return PlayerAttributes
     */
    public function setDamage(int $damage): PlayerAttributes
    {
        $this->damage = $damage;

        return $this;
    }

    /**
     * @return int
     */
    public function getHealth(): int
    {
        return $this->health;
    }

    /**
     * @param int $health
     *
     * @return PlayerAttributes
     */
    public function setHealth(int $health): PlayerAttributes
    {
        $this->health = $health;

        return $this;
    }

    /**
     * @return int
     */
    public function getCritic(): int
    {
        return $this->critic;
    }

    /**
     * @param int $critic
     *
     * @return PlayerAttributes
     */
    public function setCritic(int $critic): PlayerAttributes
    {
        $this->critic = $critic;

        return $this;
    }

    /**
     * @return int
     */
    public function getBlockChance(): int
    {
        return $this->blockChance;
    }

    /**
     * @param int $blockChance
     *
     * @return PlayerAttributes
     */
    public function setBlockChance(int $blockChance): PlayerAttributes
    {
        $this->blockChance = $blockChance;

        return $this;
    }


}
