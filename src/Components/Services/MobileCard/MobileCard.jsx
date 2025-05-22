import React from 'react'
import classes from './MobileCard.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';
const MobileCard = ({service}) => {

  const processPoint = (point) => {
      if (point.startsWith("\n") && point.endsWith("\n")) {
        return (
          <strong>
            {point
              .trim()
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </strong>
        );
      }
      return point.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    };
  
  
    const processWhyContent = (item) => {
      return item.split("{{b}}").map((text, index) => {
        if (index % 2 === 0) {
          return (
            <strong key={index} style={{ fontSize: "1.3rem" }}>
              {text.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </strong>
          );
        }
        // Handle regular text with \n
        return text.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            <br />
          </React.Fragment>
        ));
      });
    };
  return (
    <div className={classes.MobileCard}>
      <div className={classes.CardTop}>
        <p className={classes.CardService}>
          {service.title}
        </p>
        <p className={classes.CardPrice}>
            <span className={classes.discountprice}>
                $250
            </span>
            <span className={classes.originalprice}>
                $450
            </span>
        </p>
      </div>
      <Button backgroundColor="var(--maintext)" color="white" borderColor="var(--maintext)" >Get Started</Button>
      {/* <p>point</p> */}
      {service.cards?.map((card, index) => (
        <div
          key={index}
          className={
            card.type === "plan" ? classes.PlanCard : classes.PriceCard
          }
        >

          {card.type === "plan" ? (
            <div className={classes.PlanContent}>
              <div className={classes.Points}>
                {card.content.why.map((item, whyIndex) => (
                  <div key={whyIndex} className={classes.Point}>
                    <div className={classes.TickIcon}>
                      <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94" alt="tick-image" style={{paddingTop:'0.05rem'}}/>
                    </div>
                    <p style={{ fontFamily: "Roboto" }}>
                      {processWhyContent(item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={classes.PriceContent}>
              {console.log(card.height)}
              <div>
                <div className={classes.Pricing}>
                  <p className={classes.CurrentPrice}>
                    <span className={classes.np}>{card.price}</span>{" "}
                    <span className={classes.op}>
                      <s> {card.oldPrice}</s>
                    </span>
                  </p>
                </div>
                <div>
                  <Link to="/contact" className="link">
                    <button className={classes.btn}>Get Started</button>
                  </Link>
                </div>
              </div>
              <div className={classes.Description}>{card.description}</div>
              <div className={classes.Points}>
                {card.points.map((point, pointIndex) => (
                  <div key={pointIndex} className={classes.Point}>
                    <div className={classes.TickIcon}>
                      <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94" alt="tick-image" style={{height:'1.25rem'}} />
                    </div>
                    <p style={{ fontFamily: "Roboto" }}>
                      {processPoint(point)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MobileCard
