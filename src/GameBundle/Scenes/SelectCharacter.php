<?php

namespace GameBundle\Scenes;


class SelectCharacter extends AbstractScene
{
    const TYPE = 4;
    const START_POSITION = [
        'x' => 0,
        'y' => 0,
        'z' => 0,
    ];
    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->gateways = [
        ];

        $this->quests = [
        ];
    }

}
