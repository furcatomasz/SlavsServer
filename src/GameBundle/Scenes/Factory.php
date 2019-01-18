<?php

namespace GameBundle\Scenes;

use AppBundle\Storage\SocketSessionData;
use GameBundle\Gateways\EntraceHouse;
use Symfony\Component\Config\Definition\Exception\Exception;

class Factory
{
    /**
     * @param int $type
     *
     * @return AbstractScene
     * @throws \Exception
     */
    static public function createSceneByType(int $type): AbstractScene
    {
        $scene = null;

        switch ($type) {
            case SelectCharacter::TYPE:
                $scene = new SelectCharacter();
                break;
            case ForestHouse::TYPE:
                $scene = new ForestHouse();
                break;
            case ForestHouseStart::TYPE:
                $scene = new ForestHouseStart();
                break;
            case ForestHouseTomb::TYPE:
                $scene = new ForestHouseTomb();
                break;
            case Battleground::TYPE:
                $scene = new Battleground();
                break;
            case MountainsPass::TYPE:
                $scene = new MountainsPass();
                break;
            case CaveExit::TYPE:
                $scene = new CaveExit();
                break;

        }

        if (!$scene) {
            throw new Exception('Can not find scene');
        }

        return $scene;

    }

    /**
     * @param SocketSessionData $socketSessionData
     * @param int               $type
     *
     * @return AbstractScene
     * @throws \Exception
     */
    static public function getExistingScene(SocketSessionData $socketSessionData, int $type): ?AbstractScene
    {
        $scenes   = $socketSessionData->getStateScenes();
        $newScene = null;

        array_map(
            function (AbstractScene $abstractScene) use ($type, &$newScene) {
                if ($abstractScene->getType() == $type) {
                    $newScene = $abstractScene;
                }
            },
            $scenes
        );

        return $newScene;
    }

    /**
     * @param SocketSessionData $socketSessionData
     * @param int               $type
     *
     * @return AbstractScene
     * @throws \Exception
     */
    static public function getExistingSceneOrCreateNew(SocketSessionData $socketSessionData, int $type): AbstractScene
    {
        $newScene = Factory::getExistingScene($socketSessionData, $type);

        if (!$newScene) {
            $newScene = Factory::createSceneByType($type);
        }

        return $newScene;
    }

}
