<?php

namespace UserBundle\Entity;

use AppBundle\Traits\TimestampableTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="UserBundle\Repository\GameTokenSessionRepository")
 */
class GameTokenSession
{

    use TimestampableTrait;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var integer
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="UserBundle\Entity\User")
     *
     * @var User
     */
    protected $user;

    /**
     * @ORM\Column(type="string")
     *
     * @var string
     */
    protected $token;

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
     * @return GameTokenSession
     */
    public function setId(int $id): GameTokenSession
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     *
     * @return GameTokenSession
     */
    public function setUser(User $user): GameTokenSession
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return string
     */
    public function getToken(): string
    {
        return $this->token;
    }

    /**
     * @param string $token
     *
     * @return GameTokenSession
     */
    public function setToken(string $token): GameTokenSession
    {
        $this->token = $token;

        return $this;
    }


}
