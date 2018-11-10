<?php

namespace GameBundle\Items;

class ItemImprovments
{
    /**
     * Increase item stats by percentage
     */
    const IMPROVEMENT_POWER = 20;

    /**
     * @param AbstractItem $item
     *
     * @return AbstractItem
     */
    static public function improveItem(AbstractItem $item): void
    {
        if ($item->getEntity()) {
            $improvement = $item->getEntity()->getImprovement();
            $statistics  = $item->getStatistics();

            $item->setStatistics(
                $statistics
                    ->setDamageMin(static::calculatePower($statistics->getDamageMin(), $improvement))
                    ->setDamageMax(static::calculatePower($statistics->getDamageMax(), $improvement))
                    ->setArmor(static::calculatePower($statistics->getArmor(), $improvement))
            );
        }
    }

    /**
     * @param int $value
     * @param int $improvement
     *
     * @return int
     */
    static private function calculatePower(int $value, int $improvement): int
    {
        return round($value * ((static::IMPROVEMENT_POWER * $improvement) / 100 + 1));
    }
}
