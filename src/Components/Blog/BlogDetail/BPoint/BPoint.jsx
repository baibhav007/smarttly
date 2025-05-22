import React from 'react'
import classes from './BPoint.module.css';
const BPoint = ({point}) => {
  return (
    <div className={classes.BPoint}>
      {point}
    </div>
  )
}

export default BPoint
