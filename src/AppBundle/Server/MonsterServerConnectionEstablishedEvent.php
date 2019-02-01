<?php

namespace AppBundle\Server;

use AppBundle\Storage\SocketSessionData;
use PHPSocketIO\Socket;
use Symfony\Component\EventDispatcher\Event;
use PHPSocketIO\SocketIO;

class MonsterServerConnectionEstablishedEvent extends Event
{
    const NAME = 'monster.server.connection.established.event';

    /**
     * @var ServerSocket
     */
    protected $io;

    /**
     * @var Socket;
     */
    protected $socket;


    /**
     * MonsterServerConnectionEstablishedEvent constructor.
     *
     * @param Socket            $socket
     * @param ServerSocket          $io
     */
    public function __construct(
        Socket $socket,
        SocketIO $io
    ) {
        $this->io                = $io;
        $this->socket            = $socket;
    }

    /**
     * @return ServerSocket
     */
    public function getIo(): SocketIO
    {
        return $this->io;
    }

    /**
     * @return Socket
     */
    public function getSocket(): Socket
    {
        return $this->socket;
    }

}
