import React from 'react';
import classes from './ServicePlanDetail.module.css';
import ServicePlanPricing from './ServicePlanPricing';
import { Link } from 'react-router-dom';

const ServicePlanDetail = ({ service }) => {

  return (
    <div className={classes.ServicePlanDetail}>
      <div className={classes.header}>
        
          <p style={{textAlign:'start'}}>Choose the right plan for your website</p>
      </div>

      <div className={classes.cardsContainer}>
              <ServicePlanPricing 
                service={service}
              />
      </div>
    </div>
  );
};

export default ServicePlanDetail;
