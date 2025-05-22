import classes from "./inTouch.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function InTouch() {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.firstCol}>
          <h1>Get In Touch</h1>
          <p className={classes.p}>
            Whether you need guidance or have a project in mind ,we're ready to help. Let's team up and Explore! 
          </p>
        </div>
        <div className={classes.secCol}>
          <div className={classes.secColItem}>
            <div className={classes.secColIconDiv}>
              <div className={classes.icon}>
                <IoLocationOutline style={{ color: "#34A852" , fontSize: '20px'}} />
              </div>

              <h6 class>Our Address</h6>
            </div>
            <p className={classes.p}>
              30 N Gould St Ste N Sheridan,<br></br>
              WY 82801
            </p>
          </div>
          <div className={classes.secColItem}>
            <div className={classes.secColIconDiv}>
              <div className={classes.icon}>
                <FiPhone style={{ color: "#34A852" , }} />
              </div>

              <h6>Our Contact Info</h6>
            </div>
            <p className={classes.p}>
              +1 6506055098<br></br>
              <Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sales@smarttly.com" style={{textDecoration:'none',color:'var(--maintext)'}} target="_blank" >sales@smarttly.com</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
