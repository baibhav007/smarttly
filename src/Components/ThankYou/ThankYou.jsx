import React from 'react'
import classes from './ThankYou.module.css';
// import submit from '../Assets/Footer/modalimg.png';
import Button from '../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';
const ThankYou = () => {
  return (
    <div className={classes.ThankYouFrame}>
      <div className={classes.ThankYou}>
        <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fmodalimg.png?alt=media&token=15c6589b-17dc-4402-8596-9e26b56dd85b" alt="submit" className={classes.submitimg}/>
        <p className={classes.thankyousubmit}>Successfully Submitted</p>
        <p className={classes.contact}>Someone from Smarttly will get in touch with you within 24 Hours.</p>
        <p className={classes.check}>Meanwhile Check our Testimonials, Case Stuides and Blogs</p>
        {/* <Link to="/Home" className='link'><Button color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)" borderColor="var(--secondarycolor)">Back To Home</Button></Link> */}
        </div>
    </div>
  )
}

export default ThankYou
