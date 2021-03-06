<?php

namespace AppBundle\Server;

use AppBundle\Manager\PlayerManager;
use AppBundle\Storage\Rooms;
use Doctrine\ORM\EntityManager;
use JMS\DiExtraBundle\Annotation as DI;
use PHPSocketIO\Socket;
use PHPSocketIO\SocketIO as PHPSocketIO;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Workerman\Worker;
use AppBundle\Storage\SocketSessionData;


/**
 * Class SocketIO
 *
 * @package AppBundle\Server
 *
 * @DI\Service("app.server.socket")
 */
class ServerSocket
{

    /**
     * @DI\Inject("event_dispatcher")
     *
     * @var EventDispatcher
     */
    public $dispatcher;

    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     *
     * @var EntityManager
     */
    public $entityManager;

    /**
     * @DI\Inject("app.server.rooms")
     *
     * @var Rooms
     */
    public $rooms;

    /**
     * @var string
     */
    public $monsterServerId;

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @return $this
     */
    public function startSocketServer()
    {
        $self = $this;
        $io   = new PHPSocketIO(5000);
        $io->on(
            'connection',
            function ($socket) use ($io, $self) {
                if(false == $self->entityManager->getConnection()->ping()){
                    $self->entityManager->getConnection()->close();
                    $self->entityManager->getConnection()->connect();
                }

                /** @var Socket $socket */
                $isMonsterServer = (array_key_exists('monsterServer', $socket->handshake['query'])) ? true : false;

                if($isMonsterServer) {
                    $self->monsterServerId = $socket->id;
                    $self->dispatcher->dispatch(
                        MonsterServerConnectionEstablishedEvent::NAME,
                        new MonsterServerConnectionEstablishedEvent($socket, $io)
                    );
                } else {
                    if(!$self->monsterServerId) {
                        var_dump('Monster server is not ready!');
                    } else {
                        $self->dispatcher->dispatch(
                            ConnectionEstablishedEvent::NAME,
                            new ConnectionEstablishedEvent($socket, $io, new SocketSessionData(), 'monsterServerId')
                        );
                    }
                }
            }
        );

        global $argv;
        $argv[1] = 'start';
        Worker::runAll();

        return $this;
    }
}
