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
        if ($type < 1 || $type > 4) {
            return $this;
        }

        switch ($type) {
            case 1:
                $playerAttributes->setStrength($playerAttributes->getStrength() + 1);
                break;
            case 2:
                $playerAttributes->setDurability($playerAttributes->getDurability() + 1);
                break;
            case 3:
                $playerAttributes->setVitality($playerAttributes->getVitality() + 1);
                break;
            case 4:
                $playerAttributes->setStamina($playerAttributes->getStamina() + 1);
                break;
        }

        $this->update($playerAttributes);

        return $this;
    }


}
