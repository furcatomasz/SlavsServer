<?php

namespace AppBundle\ServerEvents\SelectCharacter;


use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerAttributesManager;
use AppBundle\Manager\PlayerManager;
use AppBundle\Server\ConnectionEstablishedEvent;
use AppBundle\ServerEvents\AbstractEvent;
use GameBundle\Items\Weapons\Sword;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\EventDispatcher\Event;
use UserBundle\Entity\User;


/**
 * @DI\Service
 */
class OnCharacterCreate extends AbstractEvent
{

    /**
     * @DI\Inject("manager.player")
     *
     * @var PlayerManager
     */
    public $playerManager;

    /**
     * @DI\Inject("manager.item")
     *
     * @var ItemManager
     */
    public $itemManager;

    /**
     * @DI\Inject("manager.player_attributes")
     *
     * @var PlayerAttributesManager
     */
    public $playerAttributesManager;

    /**
     * @DI\Observe("connection.established.event")
     * @param Event|ConnectionEstablishedEvent $event
     *
     * @return AbstractEvent
     */
    public function registerEvent(Event $event): AbstractEvent
    {
        $socket = $event->getSocket();
        $self   = $this;
        $socket->on(
            'createCharacter',
            function ($characterName) use ($self, $event, $socket) {
                $socketSessionData = $event->getSocketSessionData();
                if (strlen($characterName) > 2) {
                    $user    = $socketSessionData->getUser();
                    $players = $self->playerManager->getRepo()->findByUser($user);
                    if (count($players) < 2) {
                        $this->createPlayer($user, $characterName);

                        $players = $self->playerManager->getRepo()->findByUser($user);
                    }

                    $playersNormalized = $self->serializer->serialize($players, 'array');
                    $socket->emit('showPlayersToSelect', $playersNormalized);
                }
            }
        );

        return $this;
    }

    /**
     * @param User   $user
     * @param string $name
     *
     * @return OnCharacterCreate
     */
    protected function createPlayer(User $user, string $name): OnCharacterCreate
    {
        $attributes = $this->playerAttributesManager
            ->create()
            ->setDurability(0)
            ->setStamina(0)
            ->setStrength(0)
            ->setVitality(0);

        $newPlayer = $this->playerManager
            ->create()
            ->setUser($user)
            ->setFreeSkillPoints(0)
            ->setFreeAttributesPoints(0)
            ->setLvl(0)
            ->setExperience(0)
            ->setName($name)
            ->setGold(0)
            ->setType(0)
            ->setAttributes($attributes);

        $this->playerManager->update($attributes);
        $this->playerManager->update($newPlayer);

        $sword = $this->itemManager
            ->create()
            ->setImprovement(0)
            ->setEquip(1)
            ->setItemId(Sword::ITEM_ID)
            ->setPlayer($newPlayer);

        $this->itemManager->update($sword);

        return $this;
    }

}
