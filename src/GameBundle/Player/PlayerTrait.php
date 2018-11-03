<?php

namespace GameBundle\Player;

use AppBundle\Entity\PlayerAttributes;
use AppBundle\Entity\PlayerItem;
use Doctrine\Common\Collections\Collection;
use GameBundle\Items\AbstractItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Lvls\Lvls;
use GameBundle\Statistics\Statistics;

/**
 * Trait PlayerTrait
 *
 * @package GameBundle\Player
 * @method PlayerAttributes getAttributes()
 * @property Collection items
 */
trait PlayerTrait
{
    /**
     * @var Statistics
     */
    public $statistics;

    /**
     * @return Statistics
     */
    public function getStatistics(): Statistics
    {
        if (!$this->statistics) {
            $this->statistics = new Statistics(
                100 + $this->getAttributes()->getHealth()*5,
                100 + $this->getAttributes()->getHealth()*5,
                100 + $this->getAttributes()->getEnergy(),
                100 + $this->getAttributes()->getEnergy(),
                1 + $this->getAttributes()->getDamage(),
                1 + $this->getAttributes()->getDefence(),
                4.5,
                0,
                100
            );
        }

        return $this->statistics;
    }

    /**
     * @return Statistics
     */
    public function getAllStatistics(): Statistics
    {
        $allStatistics = clone $this->getStatistics();

        $damage = 0;
        $armor  = 0;

        array_map(
            function (AbstractItem $item) use (&$damage, &$armor) {
                if($item->getEntity()->getEquip()) {
                    $damage += $item->getStatistics()->getDamage();
                    $armor  += $item->getStatistics()->getArmor();
                }
            },
            $this->getItems()->toArray()
        );

        $allStatistics
            ->setDamage($damage + $allStatistics->getDamage())
            ->setArmor($armor + $allStatistics->getArmor());

        return $allStatistics;
    }

    /**
     * @return Collection|AbstractItem
     */
    public function getItems(): Collection
    {
        return $this->items->map(
            function (PlayerItem $playerItem) {
                return ItemFactory::create($playerItem);
            }
        );
    }

    /**
     * @return float
     */
    public function getExperiencePercentages(): float {
        if($this->experience < 1) {
            return 0;
        }

        $experienceToActualLvl = Lvls::getExperienceForLvls()[($this->getLvl())];
        $experienceRequired = Lvls::getExperienceForLvls()[($this->getLvl()+1)];

        $percentageValue = ($this->getLvl()) ?
            ((($this->getExperience()-$experienceToActualLvl ) * 100) / ($experienceRequired-$experienceToActualLvl)) :
            ((($this->getExperience()) * 100) / ($experienceRequired));

        return $percentageValue;
    }

}
