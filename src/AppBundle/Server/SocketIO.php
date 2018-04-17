<?php

namespace AppBundle\Server;

use AppBundle\Manager\UserManager;
use JMS\DiExtraBundle\Annotation as DI;
use PHPSocketIO\SocketIO as PHPSocketIO;
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
     * @DI\Inject("manager.user")
     *
     * @var UserManager
     */
    public $userManager;

    /**
     * @DI\Inject("serializer")
     *
     * @var Serializer
     */
    public $serializer;

    public function startSocketServer()
    {
        $self = $this;
        $io   = new PHPSocketIO(2021);
        $io->on(
            'connection',
            function ($socket) use ($io, $self) {

                $socket->on( 'chat message',
                    function ($msg) use ($io, $self) {
                        $user = $self->userManager->getRepo()->find(1);

                        $json_encode =$self->serializer->normalize($user, 'array');
                        var_dump($json_encode);

                        $io->emit('chat message', $json_encode);
                    }
                );
            }
        );

        global $argv;
        $argv[1] = 'start';
        Worker::runAll();
    }
}