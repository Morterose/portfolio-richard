<?php

// namespace App\Controller;

// use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Attribute\Route;

// class DefaultController extends AbstractController
// {
//     #[Route('/', name: 'app_default')]
//     public function index(): Response
//     {
//         return $this->render('default/index.html.twig', [
//             'controller_name' => 'DefaultController',
//         ]);
//     }
// }


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/{vueRouting}', name: 'app', requirements: ['vueRouting' => '^(?!api).*$'], defaults: ['vueRouting' => null])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}
