<?php

namespace AppBundle\Server;

use AppBundle\Manager\PlayerManager;
use JMS\DiExtraBundle\Annotation as DI;
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
class SocketIO
{

    /**
     * @DI\Inject("event_dispatcher")
     *
     * @var EventDispatcher
     */
    public $dispatcher;

    /**
     * @var array
     */
    public $rooms;

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
                $self->dispatcher->dispatch(
                    ConnectionEstablishedEvent::NAME,
                    new ConnectionEstablishedEvent($socket, $io, new SocketSessionData(), 'monsterServerId')
                );
            }
        );

        global $argv;
        $argv[1] = 'start';
        Worker::runAll();

        return $this;
    }
}