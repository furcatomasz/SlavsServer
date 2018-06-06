<?php

namespace FrontendBundle\Controller;

use FOS\UserBundle\Controller\SecurityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class DefaultController extends SecurityController
{

    /**
     * @var CsrfTokenManagerInterface
     *
     * @DI\Inject("security.csrf.token_manager")
     */
    public $tokenManager;

    /**
     * @Route("/", name="homepage")

     * @param Request $request
     *
     * @return Response
     */
    public function homeAction(Request $request)
    {
       /** @var $session Session */
        $session = $request->getSession();

        $authErrorKey    = Security::AUTHENTICATION_ERROR;
        $lastUsernameKey = Security::LAST_USERNAME;

        // get the error if any (works with forward and redirect -- see below)
        if ($request->attributes->has($authErrorKey)) {
            $error = $request->attributes->get($authErrorKey);
        } elseif (null !== $session && $session->has($authErrorKey)) {
            $error = $session->get($authErrorKey);
            $session->remove($authErrorKey);
        } else {
            $error = null;
        }

        if (!$error instanceof AuthenticationException) {
            $error = null; // The value does not come from the security component.
        }

        // last username entered by the user
        $lastUsername = (null === $session) ? '' : $session->get($lastUsernameKey);

        $csrfToken = $this->tokenManager
            ? $this->tokenManager->getToken('authenticate')->getValue()
            : null;

        return $this->render(
            'FrontendBundle::home.html.twig',
            [
                'last_username' => $lastUsername,
                'error'         => $error,
                'csrf_token'    => $csrfToken,
            ]
        );

    }


}
