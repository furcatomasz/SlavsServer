<?php

namespace AppBundle\Manager;

use AppBundle\Entity\User;
use AppBundle\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.user", public=true)
 */
class UserManager extends AbstractManager
{

    /**
     * @return UserRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:User');
    }

    /**
     * @return User
     */
    public function create(): User
    {
        return new User();
    }


}
