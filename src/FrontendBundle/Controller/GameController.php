<?php

namespace FrontendBundle\Controller;

use AppBundle\Manager\GameTokenSessionManager;
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

class GameController extends Controller
{

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
     * @Route("/game/play", name="play_game")
     * @param Request $request
     *
     * @return Response
     */
    public function loginAction(Request $request)
    {
        $gameTokenSessionManager = $this->gameTokenSessionManager;
        $user                    = $this->getUser();
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
            ]
        );

    }


}
