<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Room;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("room.player")
 */
class RoomManager extends AbstractManager
{

    /**
     * @return EntityRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:Room');
    }

    /**
     * @return Room
     */
    public function create(): Room
    {
        return new Room();
    }


}
