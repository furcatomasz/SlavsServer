<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Repository\PlayerRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;
use PHPSocketIO\Socket;
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
     * @param Socket $socket
     * @param int    $value
     *
     * @return PlayerManager
     * @throws \Exception
     */
    public function addExperience(Player $player, Socket $socket, int $value)
    {
        $actualExp = $player->getExperience();
        $newGold    = $actualExp + $value;

        $player->setExperience($newGold);
        $this->newLvl($player, $socket);
        $this->update($player);

        $socket->emit('addExperience', [
            'experience' => $value,
            'experiencePercentages' => $player->getExperiencePercentages(),
        ]);

        return $this;
    }

    /**
     * @param Player $player
     *
     * @param Socket $socket
     *
     * @return PlayerManager
     * @throws \Exception
     */
    protected function newLvl(Player $player, Socket $socket): PlayerManager
    {
        if ($player->getExperiencePercentages() >= 100) {
            $player
                ->setLvl($player->getLvl()+1)
                ->setFreeAttributesPoints($player->getFreeAttributesPoints()+5)
                ->setFreeSkillPoints($player->getFreeSkillPoints()+1)
            ;
            $socket->emit('newLvl', [
                'freeAttributesPoints' => $player->getFreeAttributesPoints(),
                'freeSkillPoints' => $player->getFreeSkillPoints(),
                'lvl' => $player->getLvl(),
            ]);
        }


        return $this;
    }



}
