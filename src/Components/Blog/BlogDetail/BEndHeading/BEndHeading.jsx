import React from 'react'
import classes from './BEndHeading.module.css';
const BEndHeading = ({endheading}) => {
  return (
    <div className={classes.BEndHeading}>
      {endheading}
    </div>
  )
}

export default BEndHeading
