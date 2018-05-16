<?php

namespace GameBundle\Scenes;


class SelectCharacter extends AbstractScene
{
    const TYPE = 4;

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
