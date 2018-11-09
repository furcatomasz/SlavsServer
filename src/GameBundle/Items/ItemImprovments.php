<?php

namespace GameBundle\Items;

class ItemImprovments
{
    /**
     * Increase item stats by percentage
     */
    const IMPROVEMENT_POWER = 20;


    static public function improveItem(AbstractItem $item): AbstractItem
    {
        $improvement = $item->getEntity()->getImprovement();
        $statistics = $item->getStatistics();

        $item->setStatistics($statistics
            ->setDamageMin(static::calculatePower($statistics->getDamageMin(), $improvement))
            ->setDamageMax(static::calculatePower($statistics->getDamageMax(), $improvement))
            ->setArmor(static::calculatePower($statistics->getArmor(), $improvement))
        );
    }

    static private function calculatePower(int $value, int $improvement): int {
        return round($value*((static::IMPROVEMENT_POWER*$improvement)/100+1));
    }
}
