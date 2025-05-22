import React, { useRef, useEffect } from "react";
import classes from "./ServiceFeatureDataOne.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { Link } from "react-router-dom";

const ServiceFeatureDataOne = ({ service }) => {
  // Combine all plans into a single array for the table
  const allPlans = [...service.planone, ...service.plantwo];
  const allPrices = [...service.planpriceone, ...service.planpricetwo];
  const allPriceTimes = [...service.planpriceonetime, ...service.planpricetwotime];
  let allTextValues = [...service.textValueOne, ...service.textValueTwo];

  // Ensure allTextValues length matches allPlans length to prevent extra columns
  if (allTextValues.length !== allPlans.length) {
    console.warn(`Mismatch: allTextValues.length (${allTextValues.length}) does not match allPlans.length (${allPlans.length})`);
    if (allTextValues.length < allPlans.length) {
      const emptyArray = Array(maxFeatures).fill("-");
      while (allTextValues.length < allPlans.length) {
        allTextValues.push(emptyArray);
      }
    } else {
      allTextValues = allTextValues.slice(0, allPlans.length);
    }
  }

  // Use the `text` prop as the feature labels
  const featureLabels = service.text;

  // Determine the maximum number of features in any textValue array
  const maxFeatures = Math.max(...allTextValues.map((features) => features.length));

  // Ensure the featureLabels array has enough labels for all features
  while (featureLabels.length < maxFeatures) {
    featureLabels.push(`Feature ${featureLabels.length + 1}`);
  }

  // Reference to the tableWrapper to set initial scroll position
  const tableWrapperRef = useRef(null);

  // Set initial scroll position to the left
  useEffect(() => {
    const tableWrapper = tableWrapperRef.current;
    if (tableWrapper) {
      tableWrapper.scrollLeft = 0; // Ensure the table starts at the leftmost edge
    }
  }, []);

  return (
    <div className={classes.featureContainer}>
      <div className={classes.tableWrapper} ref={tableWrapperRef}>
        <table className={classes.featureTable}>
          <thead>
            {/* Section Headers */}
            <tr>
              <th className={classes.firstColumn}></th> {/* Empty cell for the first column */}
              <th colSpan={allPlans.length} className={classes.sectionHeader}>
                {service.plan[0]}
              </th>
            </tr>
            {/* Plan Names, Prices, and Buttons */}
            <tr>
              <th className={classes.firstColumn}>Reporting and Analytics</th>
              {allPlans.map((plan, index) => (
                <th key={index} className={classes.planHeader}>
                  <div className={classes.planHeaderContent}>
                    <div>
                      <span className={classes.planLine}>{plan}</span>
                    </div>
                    <p className={classes.planPrice}>
                      {allPrices[index]}
                      <span className={classes.planPriceTime}>
                        {allPriceTimes[index]}
                      </span>
                    </p>
                    <Link to="/contact" className={classes.link}>
                      <button className={classes.btn}>Get Started</button>
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Dynamically render all features from textValue arrays */}
            {Array.from({ length: maxFeatures }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className={classes.firstColumn}>{featureLabels[rowIndex]}</td>
                {allTextValues.map((features, colIndex) => (
                  <td key={colIndex} className={classes.planCell}>
                    <div className={classes.featureItem}>
                      {features[rowIndex] ? (
                        features[rowIndex] === "true" ? (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.svg?alt=media&token=5cb41068-5b82-4640-a067-251504124c34"
                            alt="tick"
                            className={classes.icon}
                          />
                        ) : features[rowIndex] === "false" ? (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcross.svg?alt=media&token=9357e508-71a3-4df2-90ca-c2444a72e336"
                            alt="cross"
                            className={classes.icon}
                          />
                        ) : (
                          features[rowIndex]
                        )
                      ) : (
                        "-"
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceFeatureDataOne;