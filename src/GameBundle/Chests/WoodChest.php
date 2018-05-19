<?php

namespace GameBundle\Chests;

use GameBundle\SpecialItems\KeyToChest;

class WoodChest extends AbstractChest
{
    const TYPE = 1;

    /**
     * WoodChest constructor.
     *
     * @param string $objectName
     * @param array  $awards
     */
    public function __construct(string $objectName, array $awards)
    {
        $this->objectName         = $objectName;
        $this->requirementKeyType = KeyToChest::TYPE;
        $this->name               = 'Wood Chest';
        $this->awards             = $awards;
    }

}
