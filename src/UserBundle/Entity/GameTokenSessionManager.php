<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Repository\PlayerRepository;
use Doctrine\ORM\EntityRepository;
use JMS\DiExtraBundle\Annotation as DI;
use PHPSocketIO\Socket;
use ReflectionClass;
use UserBundle\Entity\GameTokenSession;
use UserBundle\Entity\User;
use UserBundle\Repository\GameTokenSessionRepository;

/**
 * @DI\Service("manager.game_token_session")
 */
class GameTokenSessionManager extends AbstractManager
{

    /**
     * @return EntityRepository|GameTokenSessionRepository
     */
    public function getRepo(): GameTokenSessionRepository
    {
        return $this->em->getRepository('UserBundle:GameTokenSession');
    }

    /**
     * @return Player
     */
    public function create(): GameTokenSession
    {
        return new GameTokenSession();
    }

    /**
     * @param User $user
     *
     * @return GameTokenSessionManager
     */
    public function clearOldTokens(User $user): GameTokenSessionManager {
        $tokens = $this->getRepo()->findBy([
            'user' => $user
        ]);

        $self = $this;
        if($tokens) {
            array_map(function (GameTokenSession $token) use ($self) {
                $self->remove($token);
            }, $tokens);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function generateToken(): string
    {
        return bin2hex(random_bytes(32));
    }


}
