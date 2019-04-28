<?php

namespace AppBundle\Storage;

use GameBundle\Rooms\Room;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * Class Rooms
 *
 * @package AppBundle\Storage
 *
 * @DI\Service("app.server.rooms")
 */
class Rooms
{
    /** @var array */
    private $rooms;

    /**
     * Rooms constructor.
     */
    public function __construct()
    {
        $this->rooms = [];
    }


    /**
     * @param Room $room
     *
     * @return Rooms
     * @throws \Exception
     */
    public function addRoom(Room $room): Rooms
    {
        $id = $room->getId();
        if (!array_key_exists($id, $this->rooms)) {
            $this->rooms[$id] = $room;
        }

        return $this;
    }

    /**
     * @param string $roomId
     *
     * @return Room|null
     * @throws \Exception
     */
    public function getRoom(string $roomId): ?Room
    {
        return (array_key_exists($roomId, $this->rooms)) ? $this->rooms[$roomId] : null;
    }

    /**
     * @param string $roomId
     *
     * @return bool
     * @throws \Exception
     */
    public function deleteRoom(string $roomId): bool
    {
        if($this->getRoom($roomId)) {
            unset($this->rooms[$roomId]);

            return true;
        }

        return false;
    }
}
