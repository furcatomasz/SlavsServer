<?php

namespace GameBundle\Items;

use GameBundle\Statistics\Statistics;

class ItemImprovments
{
    /**
     * Increase item stats by percentage
     */
    const IMPROVEMENT_POWER = 20;

    /**
     * @param Statistics $itemStatistics
     * @param Int        $improvement
     *
     * @return Statistics
     */
    static public function improveItemStatistics(Statistics $itemStatistics, Int $improvement): Statistics
    {
        return $itemStatistics
            ->setDamageMin(static::calculatePower($itemStatistics->getDamageMin(), $improvement))
            ->setDamageMax(static::calculatePower($itemStatistics->getDamageMax(), $improvement))
            ->setArmor(static::calculatePower($itemStatistics->getArmor(), $improvement));
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
