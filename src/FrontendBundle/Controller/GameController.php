<?php

namespace FrontendBundle\Controller;

use AppBundle\Manager\GameTokenSessionManager;
use AppBundle\Manager\UserManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use UserBundle\Entity\User;

class GameController extends Controller
{

    /**
     * @DI\Inject("manager.user")
     *
     * @var UserManager
     */
    public $userManager;

    /**
     * @DI\Inject("manager.game_token_session")
     *
     * @var GameTokenSessionManager
     */
    public $tokenManager;

    /**
     * @DI\Inject("manager.game_token_session")
     *
     * @var GameTokenSessionManager
     */
    public $gameTokenSessionManager;

    /**
     * @Route("/bundles/frontend/", name="play_game")
     * @param Request $request
     *
     * @param int     $mobile
     *
     * @return Response
     */
    public function playAction(Request $request)
    {
        $gameTokenSessionManager = $this->gameTokenSessionManager;
        /** @var User $user */
        $user                    = $this->getUser();
        if(!$user) {
            $user = (new User())
                ->setUsername(uniqid('anonymous'))
                ->setPlainPassword("AbcAbc123!")
                ->setEmail(uniqid('anonymous').'@anonymous.com');
            $this->userManager->persist($user);
        }

        $generatedToken          = $gameTokenSessionManager->generateToken();
        $gameTokenSessionManager->clearOldTokens($user);

        $token = $gameTokenSessionManager
            ->create()
            ->setUser($user)
            ->setToken($generatedToken);

        $gameTokenSessionManager->update($token);

        return $this->render(
            'FrontendBundle::play.html.twig',
            [
                'sessionToken' => $token->getToken(),
                'mobile'       => $request->get('mobile'),
                'debug'       => $request->get('debug')
            ]
        );

    }


}
