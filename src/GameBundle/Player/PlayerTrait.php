<?php

namespace GameBundle\Player;

use AppBundle\Entity\PlayerAttributes;
use AppBundle\Entity\PlayerItem;
use Doctrine\Common\Collections\Collection;
use GameBundle\Items\AbstractItem;
use GameBundle\Items\ItemFactory;
use GameBundle\Lvls\Lvls;
use GameBundle\Statistics\Statistics;
use JMS\Serializer\Annotation as Serializer;
use JMS\Serializer\Annotation\Expose;

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
     * @Serializer\Accessor(getter="getStatistics")
     *
     * @var Statistics
     */
    public $statistics;

    /**
     * @return Statistics
     */
    public function getStatistics(): Statistics
    {
        if (!$this->statistics) {
            $this->statistics = (new Statistics())
                ->setHp(100 + $this->getAttributes()->getVitality() * 5)
                ->setHpMax(100 + $this->getAttributes()->getVitality() * 5)
                ->setEnergy(100 + $this->getAttributes()->getStamina())
                ->setEnergyMax(100 + $this->getAttributes()->getStamina())
                ->setDamageMin(1 + $this->getAttributes()->getStrength())
                ->setDamageMax(1 + $this->getAttributes()->getStrength())
                ->setArmor(1 + $this->getAttributes()->getDurability())
                ->setWalkSpeed(4.5)
                ->setBlockChance(0)
                ->setHitChance(100);
        }

        return $this->statistics;
    }

    /**
     * @Serializer\VirtualProperty()
     *
     * @return Statistics
     */
    public function getAllStatistics(): Statistics
    {
        $allStatistics = clone $this->getStatistics();

        $damageMin = 0;
        $damageMax = 0;
        $armor = 0;

        array_map(
            function (AbstractItem $item) use (&$damageMin, &$damageMax, &$armor) {
                if ($item->getEntity()->getEquip()) {
                    $damageMin += $item->getStatistics()->getDamageMin();
                    $damageMax += $item->getStatistics()->getDamageMax();
                    $armor += $item->getStatistics()->getArmor();
                }
            },
            $this->getItems()->toArray()
        );

        $allStatistics
            ->setDamageMin($damageMin + $allStatistics->getDamageMin())
            ->setDamageMax($damageMax + $allStatistics->getDamageMax())
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
