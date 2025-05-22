import React from 'react'
import classes from './ServiceFeatureMobile.module.css'
import Button from '../../ui/input/reuse/Button/button'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const ServiceFeatureMobile = () => {
  return (
    <div className={classes.ServiceFeatureMobile}>
      <div className={classes.ServiceFeatureMobileNavigation}>
        <p className={classes.ServiceFeatureMobileNavigationTitle}>Feature Plan List</p>
        <p className={classes.ServiceFeatureMobileNavigationButtons}>
            <Button color="black" backgroundColor="Transparent" borderColor="black"><GoArrowLeft /></Button>
            <Button color="black" backgroundColor="Transparent" borderColor="black"><GoArrowRight /></Button>
        </p>
      </div>
    </div>
  )
}
export default ServiceFeatureMobile
