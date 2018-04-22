<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Entity\PlayerItem;
use AppBundle\Repository\PlayerItemRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.item")
 */
class ItemManager extends AbstractManager
{

    /**
     * @return EntityRepository|PlayerItemRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:PlayerItem');
    }

    /**
     * @return PlayerItem
     */
    public function create(): PlayerItem
    {
        return new PlayerItem();
    }

    public function findAllByPlayer(Player $player) {
        $itemsCollection = $this->getRepo()->findByPlayer($player);

        $test  =1 ;
    }



}
