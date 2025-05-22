import React from 'react'
import classes from './ServicePlanBottom.module.css';
// import sb from '../../Assets/Service/servicebottom.png';
// import tick from '../../Assets/AboutUs/tick.png';
const ServicePlanBottom = ({service}) => {
  return (
    <div className={classes.ServicePlanBottom}>
      <div className={classes.ServicePlanBottomContent}>
        <div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fservicebottom.png?alt=media&token=f828dd9c-e618-4001-9e4d-98d4e6ebc118" alt="sb"/></div>
        <div>
            <p>{service.titlebottom}</p>
            <div>
            {service.titlebotdesc.map((desc, index) => {
              const [mainText, innerText] = desc.split(" - "); // Split into parts
              return (
                <div key={index} className={classes.sbppointdesc}>
                  <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="Tick Icon" />
                  </div>
                  <div className={classes.spbpoint}>
                    {mainText} {" "}
                    <span className={classes.spbinner}>{innerText}</span>
                  </div>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePlanBottom
