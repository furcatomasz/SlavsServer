<?php
namespace UserBundle\Repository;

use AppBundle\Repository\AbstractRepository;
use UserBundle\Entity\GameTokenSession;

/**
 * Class PlayerRepository
 *
 * @package AppBundle\Repository
 * @method GameTokenSession find($id, $lockMode = null, $lockVersion = null)
 */
class GameTokenSessionRepository extends AbstractRepository
{

    /**
     * @var string
     */
    protected static $_alias = 'gts';

    /**
     * @var string
     */
    protected static $_entityAlias = 'UserBundle:GameTokenSession';

    /**
     * @param string $token
     *
     * @return null|object|GameTokenSession
     */
    public function findByToken($token)
    {
        return $this->findOneBy(
            [
                'token' => $token
            ]
        );
    }
}