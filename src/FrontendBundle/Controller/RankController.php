<?php

namespace FrontendBundle\Controller;

use AppBundle\Manager\PlayerManager;
use FOS\UserBundle\Controller\SecurityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Security;

class RankController extends SecurityController
{

    /**
     * @var PlayerManager
     *
     * @DI\Inject("manager.player")
     */
    public $playerManager;

    /**
     * @Route("/rank/players", name="rank_players")

     * @param Request $request
     *
     * @return Response
     */
    public function playersAction(Request $request)
    {
        $experiencedPlayers = $this->playerManager->getRepo()->findMostExperienced();
        $richestPlayers = $this->playerManager->getRepo()->findRichest();

        return $this->render(
            'FrontendBundle:rank:players.html.twig',
            [
                'experiencedPlayers' => $experiencedPlayers,
                'richestPlayers' => $richestPlayers,
            ]
        );

    }


}
