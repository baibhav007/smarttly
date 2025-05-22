import React from 'react'
import classes from './AboutUsEnd.module.css';
// import aboutusend from '../../Assets/AboutUs/aboutus.jpg';
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
const AboutUsEnd = () => {
  return (
    <div className={classes.aboutusendFrame}>
    <div className={classes.aboutusend}>
      <div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faboutus.jpg?alt=media&token=40f6a8a6-2797-40c4-b005-42c8351d3cd5" alt="aboutusend" /></div>
      <div>
        <div>Join the Smarttly Journey</div>
        <div>
            <div>Partner with Smarttly and discover the difference a dedicated, results-oriented team can make for your business. Whether you’re looking to improve your online presence, drive traffic, or create impactful digital experiences, Smarttly is here to guide you every step of the way.</div>
            <div>
                <Link to="/contact" className='link'> <Button padding-right="20px" color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)" borderColor="var(--secondarycolor)"
                        >Let's Work together <span><GoArrowRight /> </span></Button></Link>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUsEnd
