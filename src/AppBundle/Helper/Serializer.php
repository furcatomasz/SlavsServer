<?php

namespace AppBundle\Helper;

use JMS\Serializer\SerializerBuilder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer as SymfonySerializer;

class Serializer
{
    /**
     * @return \JMS\Serializer\Serializer
     */
    static public function getSerializerWithNormalizer()
    {
//        $encoder    = new JsonEncoder();
//        $normalizer = new ObjectNormalizer();
//        $normalizer->setCircularReferenceHandler(
//            function ($object) {
//                if (method_exists($object, 'getId')) {
//                    return $object->getId();
//                } else {
//                    return null;
//                }
//            }
//        );
//
//        return new SymfonySerializer([$normalizer], [$encoder]);

        return SerializerBuilder::create()->build();
    }

}