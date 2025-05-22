import React from 'react'
import classes from './ServiceBenefits.module.css';
import ServiceBenefitsContent from './ServiceBenefitsContent';
const ServiceBenefits = ({service}) => {
  return (
    <div className={classes.ServiceBenefitsFrameOuter}>
    <div className={classes.ServiceBenefitsFrame}>
      <div>
        <p>Benefits</p>
        <p>{service.titletag}</p>
      </div>
      <div>
      <ServiceBenefitsContent service={service}/>
      </div>
    </div>
    </div>
  )
}

export default ServiceBenefits
