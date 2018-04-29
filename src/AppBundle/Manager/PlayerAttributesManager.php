<?php

namespace AppBundle\Manager;

use AppBundle\Entity\PlayerAttributes;
use AppBundle\Repository\PlayerRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.player_attributes")
 */
class PlayerAttributesManager extends AbstractManager
{

    /**
     * @return PlayerRepository|EntityRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:PlayerAttributes');
    }

    /**
     * @return PlayerAttributes
     */
    public function create(): PlayerAttributes
    {
        return new PlayerAttributes();
    }

    /**
     * @param PlayerAttributes $playerAttributes
     * @param int              $type
     *
     * @return $this
     */
    public function addAttribute(PlayerAttributes $playerAttributes, int $type)
    {
        if ($type < 1 || $type > 5) {
            return $this;
        }

        switch ($type) {
            case 1:
                $playerAttributes->setDamage($playerAttributes->getDamage() + 1);
                break;
            case 2:
                $playerAttributes->setDefence($playerAttributes->getDefence() + 1);
                break;
            case 3:
                $playerAttributes->setHealth($playerAttributes->getHealth() + 1);
                break;
            case 4:
                $playerAttributes->setAttackSpeed($playerAttributes->getAttackSpeed() + 1);
                break;
            case 5:
                $playerAttributes->setBlockChance($playerAttributes->getBlockChance() + 1);
                break;
        }

        $this->update($playerAttributes);

        return $this;
    }


}
