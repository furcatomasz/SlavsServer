<?php
namespace UserBundle\Form;

use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class RegistrationFormType
 *
 * @DI\FormType
 */

class RegistrationFormType extends BaseType
{
    /**
     * @var Request
     */
    public $request;

    /**
     * RegistrationFormType constructor.
     *
     * @DI\InjectParams({
     *     "class" = @DI\Inject("%fos_user.model.user.class%"),
     *     "request" = @DI\Inject("request_stack")
     * })
     *
     * @param string $class
     */
    public function __construct($class, $request)
    {
        $this->request = $request;
        parent::__construct($class);
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildForm($builder, $options);
        $builder->remove('username');

    }

    /**
     * @return string
     */
    public function getBlockPrefix()
    {
        return 'app_user_registration';
    }

    /**
     * @return string
     */
    public function getParent()
    {
        return 'FOS\UserBundle\Form\Type\RegistrationFormType';
    }
}
