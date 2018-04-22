<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Player;
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

}