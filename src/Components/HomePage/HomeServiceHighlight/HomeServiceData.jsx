import React from 'react'
import classes from './HomeServiceData.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
const HomeServiceData = ({title,desc,id}) => {
  return (
    <div className={classes.HomeServiceData}>
      <div><div className={classes.line}></div><div className={classes.linecontent}>{title}</div></div>
      <div className={classes.desc}>{desc}</div>
      
      <div><Link to={`/services/${id}`} className='link'><Button className={classes.buttonn} color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)"  borderColor="var(--secondarycolor)">Learn More </Button></Link></div>
    </div>
  )
}
export default HomeServiceData