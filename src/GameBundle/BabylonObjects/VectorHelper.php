<?php

namespace GameBundle\BabylonObjects;

class VectorHelper
{
    /**
     * @param Vector3 $a
     * @param Vector3 $b
     *
     * @return float
     */
    public static function distance(Vector3 $a, Vector3 $b): float
    {
        $dx = $a->getX() - $b->getX();
        $dy = $a->getY() - $b->getY();
        $dz = $a->getZ() - $b->getZ();

        return sqrt($dx * $dx + $dy * $dy + $dz * $dz);
    }

}
