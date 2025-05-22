import React from "react";
import classes from "./AboutUsemployee.module.css";

const AboutUsemployee = ({ img, name, desc, onClick }) => {
  return (
    <div
      className={classes.aboutcard}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit:"cover",
        border:"1px solid var(--secondarytext)",
      }}
      onClick={onClick} // Handle click event
    >
      <div className={classes.aboutcardinfo}>
        <div className={classes.aboutname}>{name}</div>
        <div className={classes.aboutcarddesc}>{desc}</div>
      </div>
    </div>
  );
};

export default AboutUsemployee;
