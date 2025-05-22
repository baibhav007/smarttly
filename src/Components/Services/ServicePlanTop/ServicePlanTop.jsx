import React from 'react'
import classes from './ServicePlanTop.module.css';
// import plan from '../../Assets/Service/plan.png';
import Button from '../../ui/input/reuse/Button/button';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
const ServicePlanTop = ({service}) => {
  return (
    <div className={classes.ServicePlanTop}>
      <div className={classes.ServicePlanTopContent}>
        <div>
          <div>
            {/* <Button color="var(--secondarycolor)" backgroundColor="Transparent" borderColor="Transparent" className={classes.btn}><GoArrowLeft /><span>Back</span></Button> */}
          <Link to=".." style={{textDecoration:"none"}}><button style={{color:"#34A852",backgroundColor:"transparent",border:"none",cursor:"pointer",display:'flex',gap:'0.5rem' , fontFamily:"Inter",fontSize:"16px"}}><GoArrowLeft /><span>Back</span></button></Link>
          </div>
          <div>
            <div>{service.titletop}</div>
            <div>{service.titletopsub}</div>
            <div>
              {/* {service.titletopdesc} */}
              {service.titletopdesc.split('\n').map((line, index) => (
                <>
                <p key={index}>{line}</p>
                <p>&nbsp;</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div><img src={service.serviceimg} alt="plan"/></div>
      </div>
    </div>
  )
}

export default ServicePlanTop
