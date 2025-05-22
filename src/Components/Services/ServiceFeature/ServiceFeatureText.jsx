import React from 'react';
import classes from './ServiceFeatureText.module.css';

const ServiceFeatureText = ({ service }) => {
  return (
    <div className={classes.ServiceFeatureText}>
      <div><b>Reporting and Analytics</b></div>
      <ul>
        {service.text?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceFeatureText;
