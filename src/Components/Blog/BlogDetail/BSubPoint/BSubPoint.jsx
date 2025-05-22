import React from "react";
import classes from "./BSubPoint.module.css";

const BSubPoint = ({ subpoints }) => {
  const parts = subpoints.split("\\b");

  return (
    <div className={classes.BSubPoint}>
      {parts.length === 2 ? (
        <>
          <ul>
            <li>
              <strong>{parts[0]}</strong> {parts[1]}
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li>{subpoints}</li>
        </ul>
      )}
    </div>
  );
};

export default BSubPoint;
