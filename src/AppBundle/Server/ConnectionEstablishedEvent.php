<?php

namespace AppBundle\Server;

use AppBundle\Storage\SocketSessionData;
use PHPSocketIO\Socket;
use Symfony\Component\EventDispatcher\Event;
use PHPSocketIO\SocketIO;

class ConnectionEstablishedEvent extends Event
{
    const NAME = 'connection.established.event';

    /**
     * @var ServerSocket
     */
    protected $io;

    /**
     * @var Socket;
     */
    protected $socket;

    /**
     * @var SocketSessionData
     */
    protected $socketSessionData;

    /**
     * @var string
     */
    protected $monsterServerId;

    /**
     * ConnectionEstablishedEvent constructor.
     *
     * @param Socket            $socket
     * @param ServerSocket          $io
     * @param SocketSessionData $socketSessionData
     * @param string            $monsterServerId
     */
    public function __construct(
        Socket $socket,
        SocketIO $io,
        SocketSessionData $socketSessionData,
        string $monsterServerId
    ) {
        $this->io                = $io;
        $this->socket            = $socket;
        $this->socketSessionData = $socketSessionData;
        $this->monsterServerId   = $monsterServerId;
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

    /**
     * @return SocketSessionData
     */
    public function getSocketSessionData(): SocketSessionData
    {
        return $this->socketSessionData;
    }

    /**
     * @return string
     */
    public function getMonsterServerId(): string
    {
        return $this->monsterServerId;
    }

}
