import Button from "../../../ui/input/reuse/Button/button";
import classes from "./planCard.module.css";
export default function PlanCard({ buttons, planName, subHeading, price,reportingAndAnalytics  }) {
  console.log({planName});
  return (
    <div className={classes.main} 
    style={{height:"230px"}}
    >
      {buttons ? (
        <div className={classes.buttonsContainer} style={{height:"100%", alignItems: "center", justifyContent:"center", width:"307px", }}>
            <p className={classes.buttonsContainerp}>Reporting and Analytics</p>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.child1}>
            <div>
              <h3 className={classes.heading}>SEO Booster</h3>              
            </div>
            <p className={classes.para}>Our Most Popular Plan</p>
          </div>
          <div className={classes.child2}>
            <p className={classes.price}>
              $250<span>/Month</span>
            </p>
            <div className={classes.buttonContainer}>
              <Button color="var(--backgroundcolor)" backgroundColor="var(--maintext)" borderColor="var(--maintext)" className={classes.Button}>Get it Now</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
