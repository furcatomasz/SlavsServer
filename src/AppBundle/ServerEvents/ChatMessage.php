<?php

namespace AppBundle\ServerEvents;


use AppBundle\Entity\Player;
use AppBundle\Entity\User;
use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\UserManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


/**
 * @DI\Service
 */
class ChatMessage extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $userManager;

    /**
     * @DI\Inject("serializer")
     *
     * @var Serializer
     */
    public $serializer;

    /**
     * @DI\Observe("connection.established.event")
     * @param ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(ConnectionEstablishedEvent $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $io     = $event->getIo();
        $self   = $this;

        $socket->on(
            'chat message',
            function ($msg) use ($io, $self, $socket) {
                /** @var Player $user */
                $user = $self->userManager->getRepo()->find(1);

                $encoder = new JsonEncoder();
                $normalizer = new ObjectNormalizer();
                $normalizer->setCircularReferenceHandler(function ($object) {
                    return $object->getId();
                });

                $serializer = new Serializer(array($normalizer), array($encoder));
                $userData = $serializer->normalize($user, 'array');

                $socket->emit('chat message', $userData);
            }
        );

        return $this;
    }

}