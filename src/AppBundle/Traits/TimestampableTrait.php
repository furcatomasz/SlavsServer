<?php

namespace AppBundle\Traits;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

trait TimestampableTrait
{
    /**
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(name="created_date", type="datetime")
     *
     * @var \DateTime $createdDate
     */
    protected $createdDate;

    /**
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(name="updated_date", type="datetime")
     *
     * @var \DateTime $updatedDate
     */
    protected $updatedDate;

    /**
     * Get createdDate
     *
     * @return \DateTime
     */
    public function getCreatedDate()
    {
        return $this->createdDate;
    }

    /**
     * Set createdDate
     *
     * @param \DateTime $createdDate
     *
     * @return $this
     */
    public function setCreatedDate($createdDate)
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    /**
     * Get updatedDate
     *
     * @return \DateTime
     */
    public function getUpdatedDate()
    {
        return $this->updatedDate;
    }

    /**
     * Set updatedDate
     *
     * @param \DateTime $updatedDate
     *
     * @return $this
     */
    public function setUpdatedDate($updatedDate)
    {
        $this->updatedDate = $updatedDate;

        return $this;
    }
}
