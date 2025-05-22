import React from 'react'
import classes from './ServiceFeature.module.css';
import ServiceFeatureText from './ServiceFeatureText';
import ServiceFeatureDataOne from './ServiceFeatureDataOne';
const ServiceFeature = ({service}) => {
  return (
    <div className={classes.ServiceFeatureFrame}>
    <div className={classes.ServiceFeature} id='feature'>
      <div>Feature Plan List</div>
      <div>
       
        <div>
        <ServiceFeatureDataOne service={service}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServiceFeature
