import React from "react";
import classes from "./HomePageCase.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const HomePageCase = ({ title, desc, img, country, service, id, slug }) => {
  return (
    <div className={classes.HomePageCase}>
      <div className={classes.title}>{title}</div>
      <div className={classes.contentWrapper}>
        <div className={classes.leftContent}>
          <p className={classes.green}>{service}</p>
          <div
            // style={{
            //   maxWidth: '260px',
            //   fontFamily: 'Poppins',
            //   fontStyle: 'normal',
            //   fontWeight: 400,
            //   fontSize: '16px',
            //   lineHeight: '145%',
            //   letterSpacing: '0%',
            //   alignSelf: 'stretch',
            //   color: '#6C757D'
            // }}
          className={classes.desc}>
            {desc}
          </div>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.topimg}>
            <img src={img} alt="redis" height={110} width={150} />
            <img
              src={country}
              alt="country"
              height={38}
              width={58}
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div>
            <Link to={`/casestudies#${slug}`}>
              <button
                color="var(--backgroundcolor)"
               className={classes.navButton}
              >
                <GoArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageCase;