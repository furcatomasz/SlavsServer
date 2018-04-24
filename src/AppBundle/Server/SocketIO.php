<?php

namespace AppBundle\Server;

use GameBundle\Rooms\Room;
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
     * @var string
     */
    public $monsterServerId;

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