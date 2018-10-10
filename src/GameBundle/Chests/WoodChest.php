<?php

namespace GameBundle\Chests;

use GameBundle\BabylonObjects\Vector3;
use GameBundle\SpecialItems\KeyToChest;

class WoodChest extends AbstractChest
{
    const TYPE = 1;

    /**
     * WoodChest constructor.
     *
     * @param Vector3 $position
     * @param Vector3 $rotation
     * @param Vector3 $awardsPosition
     * @param array   $awards
     */
    public function __construct(Vector3 $position, Vector3 $rotation, Vector3 $awardsPosition, array $awards)
    {
        $this->position           = $position;
        $this->awardsPosition     = $awardsPosition;
        $this->rotation           = $rotation;
        $this->requirementKeyType = KeyToChest::TYPE;
        $this->name               = 'Wood Chest';
        $this->awards             = $awards;
    }

}
