<?php

namespace UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity
 *
 * @UniqueEntity(fields={"email"}, groups={"Default", "register"}, message="This email is already used" )
 */
class User extends BaseUser implements UserInterface
{

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var integer
     */
    protected $id;

    /**
     * @Assert\Email(groups={"Default", "register"}, checkHost = true)
     * @Assert\NotNull(groups={"Default", "register"})
     *
     * @var string
     */
    protected $email;

    /**
     * @Assert\Regex(
     *     pattern="/[a-z]/",
     *     message="At least one small letter",
     *     groups={"Default", "register"}
     * )
     * @Assert\Regex(
     *     pattern="/[A-Z]/",
     *     message="At least one capital letter",
     *     groups={"Default", "register"}
     * )
     * @Assert\Regex(
     *     pattern="/[1-9]/",
     *     message="At least one number",
     *     groups={"Default", "register"}
     * )
     * @Assert\Regex(
     *     pattern="/[$&+,:;=?@#|'<>.^*()%!-]/",
     *     message="At least one special character",
     *     groups={"Default", "register"}
     * )
     * @Assert\Length(
     *      min = 8,
     *      max = 50,
     *      minMessage = "Your password must be at least {{ limit }} characters long",
     *      maxMessage = "Your password cannot be longer than {{ limit }} characters",
     *     groups={"Default", "register"}
     * )
     *
     * @var string
     */
    protected $plainPassword;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $facebookId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $facebookAccessToken;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $googleId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $googleAccessToken;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $twitchId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $twitchAccessToken;

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
     * @return User
     */
    public function setId(int $id): User
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email): User
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    /**
     * @param string $plainPassword
     *
     * @return User
     */
    public function setPlainPassword($plainPassword): User
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * @return string
     */
    public function getFacebookId(): string
    {
        return $this->facebookId;
    }

    /**
     * @param string $facebookId
     *
     * @return User
     */
    public function setFacebookId(string $facebookId): User
    {
        $this->facebookId = $facebookId;

        return $this;
    }

    /**
     * @return string
     */
    public function getFacebookAccessToken(): string
    {
        return $this->facebookAccessToken;
    }

    /**
     * @param string $facebookAccessToken
     *
     * @return User
     */
    public function setFacebookAccessToken(string $facebookAccessToken): User
    {
        $this->facebookAccessToken = $facebookAccessToken;

        return $this;
    }

    /**
     * @return string
     */
    public function getGoogleId(): string
    {
        return $this->googleId;
    }

    /**
     * @param string $googleId
     *
     * @return User
     */
    public function setGoogleId(string $googleId): User
    {
        $this->googleId = $googleId;

        return $this;
    }

    /**
     * @return string
     */
    public function getGoogleAccessToken(): string
    {
        return $this->googleAccessToken;
    }

    /**
     * @param string $googleAccessToken
     *
     * @return User
     */
    public function setGoogleAccessToken(string $googleAccessToken): User
    {
        $this->googleAccessToken = $googleAccessToken;

        return $this;
    }

    /**
     * @return string
     */
    public function getTwitchId(): string
    {
        return $this->twitchId;
    }

    /**
     * @param string $twitchId
     *
     * @return User
     */
    public function setTwitchId(string $twitchId): User
    {
        $this->twitchId = $twitchId;

        return $this;
    }

    /**
     * @return string
     */
    public function getTwitchAccessToken(): string
    {
        return $this->twitchAccessToken;
    }

    /**
     * @param string $twitchAccessToken
     *
     * @return User
     */
    public function setTwitchAccessToken(string $twitchAccessToken): User
    {
        $this->twitchAccessToken = $twitchAccessToken;

        return $this;
    }

}
