<?php

namespace AppBundle\Repository;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping;
use Doctrine\ORM\QueryBuilder;

abstract class AbstractRepository extends EntityRepository
{
    /**
     * @var string
     */
    protected static $_alias = '';

    /**
     * @var string
     */
    protected static $_entityAlias = '';

    /**
     * @inheritDoc
     */
    public function __construct($em, Mapping\ClassMetadata $class)
    {
        if (!static::$_alias) {
            throw new \Exception(sprintf('No alias set in %s', get_class($this)));
        }

        if (!static::$_entityAlias) {
            throw new \Exception(
                sprintf(
                    'No entityAlias set in %s',
                    get_class($this)
                )
            );
        }

        parent::__construct($em, $class);
    }

    /**
     * @return string
     */
    public static function getAlias()
    {
        return static::$_alias;
    }

    /**
     * @param string $string
     *
     * @return string
     */
    protected static function _injectAlias($string)
    {
        return sprintf($string, static::getAlias());
    }

    /**
     * @param int $limit
     * @param int $offset
     *
     * @return Collection
     */
    public function findAll($limit = null, $offset = null)
    {
        $array = $this
            ->_getQueryBuilder(null, $limit, $offset)
            ->getQuery()
            ->getResult();

        return new ArrayCollection($array);
    }

    /**
     * @return int
     */
    public function countAll()
    {
        return $this
            ->_getQueryBuilder()
            ->select(
                sprintf(
                    'count(%s)',
                    static::$_alias
                )
            )
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * @param string $string
     * @param string $rootAlias
     *
     * @return string
     */
    protected function _injectAliases($string, $rootAlias = null)
    {
        if (!$rootAlias) {
            $rootAlias = static::getAlias();
        }

        return str_replace('%s', $rootAlias, $string);
    }

    /**
     * @param string $alias
     * @param int    $limit
     * @param int    $offset
     *
     * @return QueryBuilder
     */
    protected function _getQueryBuilder($alias = null, $limit = null, $offset = null)
    {
        if (!$alias) {
            $alias = static::$_alias;
        }

        $qb = $this
            ->getEntityManager()
            ->createQueryBuilder()
            ->select($alias)
            ->from(static::$_entityAlias, $alias);

        if ($limit) {
            $qb->setMaxResults($limit)->setFirstResult($offset);
        }

        return $qb;
    }


}