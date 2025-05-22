import React from 'react'
import classes from './AboutUsHeading.module.css';
const AboutUsHeading = () => {
  return (
    <div className={classes.aboutusheading}>
      <div>About Us</div>
      <div className={classes.text}>
        <span>At Smarttly, we empower businesses to thrive in the digital landscape by delivering innovative marketing and development solutions tailored to your unique needs. With expertise in SEO, website development, content creation, social media optimization, PPC advertising, analytics, and mobile app development, we are your strategic partner for achieving measurable success online.</span>
        <br />
        <span>We pride ourselves on offering comprehensive services that drive results, enhance visibility, and foster meaningful connections between brands and their audiences.</span>
        </div>
    </div>
  )
}

export default AboutUsHeading
