<?php

namespace GameBundle\Scenes;

abstract class AbstractScene
{
    const TYPE = 0;

    /**
     * @var array
     */
    public $gateways;

    /**
     * @var int
     */
    public $type;

    /**
     * @var array|AbstractMonster
     */
    public $monsters;

    /**
     * AbstractScene constructor.
     */
    public function __construct()
    {
        $this->type = static::TYPE;
    }

}
