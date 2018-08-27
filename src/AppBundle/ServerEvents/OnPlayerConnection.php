<?php

namespace AppBundle\ServerEvents;


use AppBundle\Entity\Player;
use AppBundle\Manager\GameTokenSessionManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\SocketIO;
use FOS\UserBundle\Model\UserManager;
use GameBundle\Rooms\Room;
use GameBundle\Scenes\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class OnPlayerConnection extends AbstractEvent
{

    /**
     * @DI\Inject("app.server.socket")
     *
     * @var SocketIO
     **/
    public $socketIOServer;

    /**
     * @DI\Inject("fos_user.user_manager")
     *
     * @var UserManager
     */
    public $userManager;

    /**
     * @DI\Inject("manager.game_token_session")
     *
     * @var GameTokenSessionManager
     */
    public $gameTokenSessionManager;

    /**
     * @DI\Observe("connection.established.event")
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     * @throws \Exception
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket        = $event->getSocket();

            $user          = $this->userManager->findUserByEmail('ksiegowosc@knights.pl');
            $playerSession = $event->getSocketSessionData();
            $playerSession
                ->setConnectionId($event->getSocket()->id)
                ->setMonsterServerId($event->getMonsterServerId())
                ->setUser($user);

            $playerSessionData = $this->serializer->normalize($playerSession, 'array');

            $socket->emit('clientConnected', $playerSessionData);
        return $this;

        if(array_key_exists('gameToken', $socket->handshake['query'])) {
            $token = $socket->handshake['query']['gameToken'];
            if ($token) {
                $tokenEntity = $this->gameTokenSessionManager->getRepo()->findByToken($token);
                if($tokenEntity) {
                    $user          = $tokenEntity->getUser();
                    $this->gameTokenSessionManager->remove($tokenEntity);

                    $playerSession = $event->getSocketSessionData();
                    $playerSession
                        ->setConnectionId($event->getSocket()->id)
                        ->setMonsterServerId($event->getMonsterServerId())
                        ->setUser($user);

                    $playerSessionData = $this->serializer->normalize($playerSession, 'array');

                    $socket->emit('clientConnected', $playerSessionData);
                }
            }
        }
        return $this;
    }

}
