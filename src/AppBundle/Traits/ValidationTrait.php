<?php
namespace AppBundle\Traits;

use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Exception\ValidatorException;
use Symfony\Component\Validator\Validator\RecursiveValidator;

trait ValidationTrait
{
    /**
     * @DI\Inject("validator")
     *
     * @var RecursiveValidator
     */
    public $validator;

    /**
     * @param $entity
     *
     * @return $this
     * @throws \Exception
     */
    protected function _validateAsserts($entity)
    {
        /**
         * @var ConstraintViolationListInterface $errors
         */
        $errors        = $this->_validateRecursive($entity);
        $invalidFields = array();

        if (count($errors)) {
            foreach ($errors as $error) {
                $invalidFields[$error->getPropertyPath()] = $error->getMessage();
            }

            throw new ValidatorException(json_encode($invalidFields));
        }

        return $this;
    }

    /**
     * @param object $entity
     *
     * @return ConstraintViolationListInterface
     */
    protected function _validateRecursive($entity)
    {
        return $this->validator->validate($entity);
    }
}
