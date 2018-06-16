<?php
declare(strict_types=1);

namespace UserBundle\EventListener;

use AppBundle\Manager\ItemManager;
use AppBundle\Manager\PlayerAttributesManager;
use AppBundle\Manager\PlayerManager;
use GameBundle\Items\Weapons\Sword;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

/**
 * @DI\Service
 */
class CreateCharacterListener
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
     * @DI\Observe("security.interactive_login")
     *
     * @param InteractiveLoginEvent $event
     *
     * @return $this
     */
    public function onInteractiveLogin(InteractiveLoginEvent $event)
    {
        $user = $event->getAuthenticationToken()->getUser();
        $userCharacters = $this->playerManager->getRepo()->findByUser($user);
        if(!count($userCharacters)) {
            $attributes = $this->playerAttributesManager
                ->create()
                ->setBlockChance(0)
                ->setAttackSpeed(0)
                ->setHealth(0)
                ->setDamage(0)
                ->setCritic(0)
                ->setDefence(0);

            $newPlayer = $this->playerManager
                ->create()
                ->setUser($user)
                ->setFreeSkillPoints(0)
                ->setFreeAttributesPoints(0)
                ->setLvl(0)
                ->setExperience(0)
                ->setName($user->getEmail())
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


        }
    }
}
