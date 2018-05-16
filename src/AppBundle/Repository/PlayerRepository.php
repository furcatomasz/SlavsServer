<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Player;
use UserBundle\Entity\User;

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

    /**
     * @param User $user
     *
     * @return array
     */
    public function findByUser(User $user)
    {
        return $this->findBy(
            [
                'user' => $user
            ]
        );
    }
}