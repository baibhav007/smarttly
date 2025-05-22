import React from "react";
import classes from "./AboutUsSecond.module.css";
// import aboutussecond from "../../Assets/AboutUs/aboutus.jpg";
const AboutUsSecond = () => {
  return (
    <div className={classes.AboutUsSecondFrame}>
    <div className={classes.AboutUsSecond}>
      <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faboutus.jpg?alt=media&token=40f6a8a6-2797-40c4-b005-42c8351d3cd5" alt="about" />
      <div>
        <div className={classes.AboutUsSecondcard}>
          <div className={classes.AboutUsSecondcardheading}>Our Mission</div>
          To empower businesses to achieve their digital marketing goals through innovative strategies, cutting-edge technologies, and a deep understanding of the North American market.
        </div>
        <div className={classes.AboutUsSecondcard}>
          <div className={classes.AboutUsSecondcardheading}>Our Vision</div>
          To be a trusted leader in digital marketing and development, shaping the future of businesses with creative solutions, data-driven insights, and unmatched expertise.
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsSecond;
