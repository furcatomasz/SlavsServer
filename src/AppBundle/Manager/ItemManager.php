<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Player;
use AppBundle\Entity\PlayerItem;
use AppBundle\Repository\PlayerItemRepository;
use Doctrine\ORM\EntityRepository;
use GameBundle\Items\AbstractItem;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.item")
 */
class ItemManager extends AbstractManager
{

    /**
     * @return EntityRepository|PlayerItemRepository
     */
    public function getRepo(): EntityRepository
    {
        return $this->em->getRepository('AppBundle:PlayerItem');
    }

    /**
     * @return PlayerItem
     */
    public function create(): PlayerItem
    {
        return new PlayerItem();
    }

    /**
     * @param Player       $player
     * @param AbstractItem $itemToEquip
     */
    public function equipItem(Player $player, AbstractItem $itemToEquip)
    {
        $equipItem = $itemToEquip->getEntity()->getEquip() ? false : true;
        $itemToEquip->getEntity()->setEquip($equipItem);
        if ($itemToEquip->getEntity()->getEquip()) {
            array_map(
                function (AbstractItem $item) use ($itemToEquip) {
                    if ($item::TYPE == $itemToEquip::TYPE && $item->getEntity()->getId() != $itemToEquip->getEntity()->getId()) {
                        $itemEntity = $item->getEntity()->setEquip(false);
                        $this->update($itemEntity);
                    }
                },
                $player->getItems()->toArray()
            );
        }

        $this->update($itemToEquip->getEntity());
    }


}
