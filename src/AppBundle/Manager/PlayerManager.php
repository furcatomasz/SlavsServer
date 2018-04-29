<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Repository\PlayerRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;
use ReflectionClass;

/**
 * @DI\Service("manager.player")
 */
class PlayerManager extends AbstractManager
{

    /**
     * @return PlayerRepository|EntityRepository
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
     *
     * @return $this
     */
    public function refreshStatistics(Player $player) {

        $player->statistics = null;

        return $this;
    }

    /**
     * @param Player $player
     * @param int    $value
     *
     * @return PlayerManager
     */
    public function addGold(Player $player, int $value)
    {
        $actualGold = $player->getGold();
        $newGold    = $actualGold + $value;

        $player->setGold($newGold);

        $this->update($player);

        return $this;
    }

    /**
     * @param Player $player
     * @param int    $value
     *
     * @return PlayerManager
     */
    public function addExperience(Player $player, int $value)
    {
        $actualExp = $player->getExperience();
        $newGold    = $actualExp + $value;

        $player->setExperience($newGold);

        $this->update($player);

        return $this;
    }


}
