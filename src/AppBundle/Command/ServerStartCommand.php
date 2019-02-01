<?php

namespace AppBundle\Command;

use AppBundle\Manager\UserManager;
use AppBundle\Server\ServerSocket;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ServerStartCommand extends ContainerAwareCommand
{

    protected function configure()
    {
        $this
            ->setName('app:server-start')
            ->setDescription('Start socket IO server.');

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        /** @var ServerSocket $socketServer */
        $socketServer = $this->getContainer()->get('app.server.socket');

        $socketServer->startSocketServer();
    }
}
