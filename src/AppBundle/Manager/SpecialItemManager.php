<?php

namespace AppBundle\Manager;

use AppBundle\Entity\PlayerSpecialItems;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("room.player")
 */
class SpecialItemManager extends AbstractManager
{

    /**
     * @return EntityRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:PlayerSpecialItems');
    }

    /**
     * @return PlayerSpecialItems
     */
    public function create(): PlayerSpecialItems
    {
        return new PlayerSpecialItems();
    }


}
