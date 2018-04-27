<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Player;
use AppBundle\Entity\PlayerItem;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Class PlayerItemRepository
 *
 * @package AppBundle\Repository
 */
class PlayerItemRepository extends AbstractRepository
{

    /**
     * @var string
     */
    protected static $_alias = 'pi';

    /**
     * @var string
     */
    protected static $_entityAlias = 'AppBundle:PlayerItem';

    /**
     * @param Player $player
     * @param int    $id
     *
     * @return PlayerItem|object|null
     */
    public function findbyPlayerAndId(Player $player, int $id)
    {
        return $this->findOneBy(
            [
                'player' => $player,
                'id'     => $id,
            ]
        );
    }
}