<?php

namespace AppBundle\Server;

use AppBundle\Manager\UserManager;
use JMS\DiExtraBundle\Annotation as DI;
use PHPSocketIO\SocketIO as PHPSocketIO;
use SocketSessionData;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Serializer\Serializer;
use Workerman\Worker;

/**
 * Class SocketIO
 *
 * @package AppBundle\Server
 *
 * @DI\Service("app.server.socket")
 */
class SocketIO
{

    /**
     * @DI\Inject("event_dispatcher")
     *
     * @var EventDispatcher
     */
    public $dispatcher;

    /**
     * @return $this
     */
    public function startSocketServer()
    {
        $self = $this;
        $io   = new PHPSocketIO(2021);
        $io->on(
            'connection',
            function ($socket) use ($io, $self) {
                $this->dispatcher->dispatch(ConnectionEstablishedEvent::NAME, new ConnectionEstablishedEvent($socket, $io, new SocketSessionData(), 'monsterServerId'));
            }
        );

        global $argv;
        $argv[1] = 'start';
        Worker::runAll();

        return $this;
    }
}