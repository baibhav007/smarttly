import React from "react";
import classes from "./ServiceBenefitsContent.module.css";

const ServiceBenefitsContent = ({ service }) => {
  return (
    <div className={classes.ServiceBenefitsContent}>
      {service.titlecontent.map((title, index) => (
        <div key={index} className={classes.Card}>
          <h3 className={classes.CardTitle}>{title}</h3>
          <p className={classes.CardDesc}>{service.titledesc[index]}</p>
        </div>
      ))}
    </div>
  );
};
export default ServiceBenefitsContent;


