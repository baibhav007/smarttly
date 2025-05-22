import React from 'react'
import classes from './ServiceContact.module.css';
// import servicecontent from '../../Assets/Service/servicecontact.png';
import Button from '../../ui/input/reuse/Button/button';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const ServiceContact = ({service}) => {
  return (
    <div className={classes.ServiceContact}>
      <div>
        <div>
            <p className={classes.ServiceContacttoptext}>Contact us to get {service.titletop}</p>
            <p className={classes.ServiceContactbottext}>{service.titletopsub}</p>
        </div>
        <Link
                          to={{
                            pathname: "/contact",
                            search: `?service=${encodeURIComponent(
                              service.title
                            )}`,
                          }}
                          className="link"
                        ><Button color="var(--backgroundcolor)" backgroundColor="var(--maintext)" borderColor="var(--maintext)" >Contact Us <GoArrowRight /></Button></Link>
      </div>
      <div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fservicecontact.png?alt=media&token=988bc73f-d0cf-4d80-9d59-5db592f2d4ac" alt="content" /></div>
    </div>
  )
}

export default ServiceContact
