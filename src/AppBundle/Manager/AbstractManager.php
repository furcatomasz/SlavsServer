<?php

namespace AppBundle\Manager;

use Doctrine\Common\Persistence\ObjectRepository;
use Doctrine\ORM\EntityManager;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("manager.abstract")
 */
abstract class AbstractManager
{

    /**
     * @var EntityManager
     */
    protected $em;

    /**
     * @return ObjectRepository
     */
    abstract public function getRepo();

    /**
     * @DI\InjectParams({
     *      "em" = @DI\Inject("doctrine.orm.entity_manager")
     * })
     *
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * Removes an object instance and flush
     *
     * A removed object will be removed from the database as a result of the flush operation.
     *
     * @param int $id The object id to remove.
     *
     * @return $this
     */
    public function removeById($id)
    {
        $this->remove(
            $this->find($id)
        );

        return $this;
    }

    /**
     * Updates an object instance and flush
     *
     * @param object $object The object instance to remove.
     *
     * @return $this
     */
    public function update($object)
    {
        $this->em->persist($object);
        $this->em->flush();

        return $this;
    }

    /**
     * @param object $object
     *
     * @return $this
     */
    public function persist($object)
    {
        $this->em->persist($object);

        return $this;
    }

    /**
     * Removes an object instance and flush
     *
     * A removed object will be removed from the database as a result of the flush operation.
     *
     * @param object $object The object instance to remove.
     *
     * @return $this
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function remove($object)
    {
        $this->em->remove($object);
        $this->em->flush();

        return $this;
    }

    /**
     * @param $object
     *
     * @return $this
     * @throws \Doctrine\ORM\ORMException
     */
    public function refresh($object) {

        $this->em->refresh($object);

        return $this;
    }

    /**
     * @return $this
     * @throws \Doctrine\Common\Persistence\Mapping\MappingException
     */
    public function clearAllCache() {

        $this->em->clear();

        return $this;
    }

    /**
     * @param int    $id
     * @param string $exceptionMessage
     *
     * @return object
     * @throws \Exception
     */
    public function find($id, $exceptionMessage = 'Not found.')
    {
        if ($object = $this->getRepo()->find($id)) {
            return $object;
        }

        throw new \Exception($exceptionMessage);
    }
}
