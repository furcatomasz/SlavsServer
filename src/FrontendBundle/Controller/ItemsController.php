<?php

namespace FrontendBundle\Controller;

use FOS\UserBundle\Controller\SecurityController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class ItemsController extends SecurityController
{

    /**
     * @Route("/items", name="game_items")

     * @param Request $request
     *
     * @return Response
     */
    public function itemsAction(Request $request)
    {
        return $this->render('FrontendBundle:items:list.html.twig');

    }


}
