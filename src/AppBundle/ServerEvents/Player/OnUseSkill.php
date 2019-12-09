<?php

namespace AppBundle\ServerEvents\Player;


use AppBundle\Manager\PlayerManager;
use AppBundle\Manager\SpecialItemManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\Server\ServerSocket;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Skills\Factory;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;


/**
 * @DI\Service
 */
class OnUseSkill extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @DI\Inject("manager.special_item")
     *
     * @var SpecialItemManager
     */
    public $specialItemManager;

    /**
     * @DI\Inject("app.server.socket")
     *
     * @var ServerSocket
     **/
    public $socketIOServer;

    /**
     * @DI\Observe("connection.established.event")
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self = $this;
        $socket->on(
            'useSkill',
            function ($skillType) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                $playerEnergy = $socketSessionData->getActivePlayer()->getStatistics()->getEnergy();
                $skill = ($skillType) ? Factory::getSkillByType($skillType) : null;
                if ($playerEnergy - $skill->energy >= 0) {
                    $socketSessionData
                        ->setActiveSkill($skill)
                        ->setAttack(null)
                        ->getActivePlayer()->getStatistics()->setEnergy($playerEnergy - $skill->energy);

//                    if($skill->getType() == Heal::TYPE) {
//                            $damage = 0;
//                            $skill->useSkill($damage, null, $socketSessionData->getActivePlayer());
//                        $socket->emit('updatePlayer', $normalizedData);
//                        $socket
//                            ->broadcast
//                            ->in($socketSessionData->getActiveRoom()->getId())
//                            ->emit('updatePlayer', $normalizedData);
//                    }

                    $updatePlayerSkillResponse = [
                        'activePlayer' => [
                            'id' => $socketSessionData->getActivePlayer()->getId(),
                            'statistics' => [
                                'energy' => $socketSessionData->getActivePlayer()->getStatistics()->getEnergy()
                            ]
                        ],
                        'activeSkill' => $self->serializer->serialize($socketSessionData->getActiveSkill(), 'array')
                    ];
                    $socket->emit('updatePlayerSkill', $updatePlayerSkillResponse);
                    $socket
                        ->in($socketSessionData->getActiveRoom()->getId())
                        ->emit('updatePlayerSkill', $updatePlayerSkillResponse);
                }
            }
        );

        return $this;
    }

}
