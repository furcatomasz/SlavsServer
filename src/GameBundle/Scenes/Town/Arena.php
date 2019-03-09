<?php

namespace GameBundle\Scenes\Town;

use GameBundle\Scenes\AbstractScene;

class Arena extends AbstractScene
{
    const TYPE = 98;
    const START_POSITION = [
        'x' => 0,
        'y' => 0,
        'z' => 0,
    ];

    /**createEnemies
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [];
        $this->chests   = [];
        $this->monsters = [];
        $this->randomSpecialItems = [];
    }

}
