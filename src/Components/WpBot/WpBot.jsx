import React from "react";
import classes from "./WpBot.module.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const WpBot = () => {
  return (
    <>
    <div className={classes.WpBot}>
      <Link
        to="#"
        onClick={() =>
          window.open(
            "https://wa.me/16506055098?text=Hi%20there!%20I%27d%20like%20to%20learn%20more%20about%20your%20services.",
            "_blank"
          )
        }
      >
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FWhatsapp.png?alt=media&token=cfbf5233-1034-4a70-8bc5-8e84f6ea5c80"
          alt="WhatsApp"
        /> */}
        <FaWhatsapp style={{color:'white'}}/>
      </Link>
      </div>
    </>
  );
};

export default WpBot;
