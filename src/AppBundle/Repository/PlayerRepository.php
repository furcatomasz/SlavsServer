<?php
namespace AppBundle\Repository;

use AppBundle\Entity\Player;

/**
 * Class PlayerRepository
 *
 * @package AppBundle\Repository
 * @method Player find($id, $lockMode = null, $lockVersion = null)
 */
class PlayerRepository extends AbstractRepository
{

    /**
     * @var string
     */
    protected static $_alias = 'p';

    /**
     * @var string
     */
    protected static $_entityAlias = 'AppBundle:Player';
}