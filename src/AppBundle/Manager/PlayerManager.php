<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Repository\PlayerRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.player")
 */
class PlayerManager extends AbstractManager
{

    /**
     * @return PlayerRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:Player');
    }

    /**
     * @return Player
     */
    public function create(): Player
    {
        return new Player();
    }

    /**
     * @param Player $player
     * @param int    $value
     */
    public function addGold(Player $player, int $value)
    {
        $actualGold = $player->getGold();
        $newGold    = $actualGold + $value;

        $player->setGold($newGold);

        $this->update($player);
    }


}
