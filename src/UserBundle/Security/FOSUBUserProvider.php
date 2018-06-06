<?php
namespace UserBundle\Security;

use AppBundle\Entity\User;
use AppBundle\Helper\MailHelper;
use FOS\UserBundle\Mailer\Mailer;
use FOS\UserBundle\Model\UserManagerInterface;
use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\FOSUBUserProvider as BaseClass;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\HttpUtils;

/**
 * Class FOSUBUserProvider
 *
 * @DI\Service("user.security.provider")
 * @package AppBundle\Security
 */
class FOSUBUserProvider extends BaseClass
{
    /**
     * @DI\Inject("router")
     *
     * @var Router
     */
    public $router;

    /**
     * @DI\Inject("twig")
     *
     * @var \Twig_Environment
     */
    public $twig;

    /**
     * @DI\Inject("security.token_storage")
     *
     * @var TokenStorage
     */
    public $tokenStorage;

    /**
     * FOSUBUserProvider constructor.
     *
     * @DI\InjectParams({
     *      "userManager" = @DI\Inject("fos_user.user_manager")
     * })
     *
     * @param UserManagerInterface $userManager
     */
    public function __construct(UserManagerInterface $userManager)
    {
        $properties = [
            'facebook' => 'facebookId',
            'google'   => 'googleId',
            'twitch'   => 'twitchId',
            'linkedin' => 'linkedinId',
            'fanmiles' => 'fanmilesId',
        ];

        parent::__construct($userManager, $properties);
    }

    /**
     * @param UserInterface         $user
     * @param UserResponseInterface $response
     */
    public function connect(UserInterface $user, UserResponseInterface $response)
    {
        $property = $this->getProperty($response);
        $username = $response->getUsername();

        $service     = $response->getResourceOwner()->getName();
        $setter      = 'set' . ucfirst($service);
        $setterId    = $setter . 'Id';
        $setterToken = $setter . 'AccessToken';

        if (null !== $previousUser = $this->userManager->findUserBy([$property => $username])) {
            $this->disconnectUser($previousUser, $service);
        }

        $user->$setterId($username);
        $user->$setterToken($response->getAccessToken());
        $this->userManager->updateUser($user);
    }

    /**
     * @param UserResponseInterface $response
     *
     * @return \FOS\UserBundle\Model\UserInterface|UserInterface
     */
    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        $serviceUserId = $response->getUsername();
        $email         = $response->getEmail();
        $userManager   = $this->userManager;
        $token = $this->tokenStorage->getToken();

        if ($token && $loggedUser = $token->getUser()) {
            $this->connect($loggedUser, $response);

            return $loggedUser;
        }

        $user          = $userManager->findUserBy([$this->getProperty($response) => $serviceUserId]);
        if (!$user) {
            $service     = $response->getResourceOwner()->getName();
            $setter      = 'set' . ucfirst($service);
            $setterId    = $setter . 'Id';
            $setterToken = $setter . 'AccessToken';


            if (!$user = $userManager->findUserByEmail($email)) {
                $user = $userManager->createUser();
                /** @var User $user */
                $password = uniqid();
                $user
                    ->setUsername($email)
                    ->setEmail($email)
                    ->setPlainPassword($password)
                    ->setEnabled(true);

            }

            $user->$setterId($serviceUserId);
            $user->$setterToken($response->getAccessToken());

            $userManager->updateUser($user);

            return $user;
        }

        $user        = parent::loadUserByOAuthUserResponse($response);
        $serviceName = $response->getResourceOwner()->getName();
        $setter      = 'set' . ucfirst($serviceName) . 'AccessToken';
        $user->$setter($response->getAccessToken());

        return $user;
    }


    /**
     * @param User   $user
     * @param string $service
     *
     * @return $this
     */
    public function disconnectUser(User $user, $service)
    {
        $setterId    = sprintf('set%sId', $service);
        $setterToken = sprintf('set%sAccessToken', $service);

        $user->$setterId(null);
        $user->$setterToken(null);
        $this->userManager->updateUser($user);

        return $this;
    }
}
