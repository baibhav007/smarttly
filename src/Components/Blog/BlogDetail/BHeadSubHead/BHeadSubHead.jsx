import React from 'react'
import classes from './BHeadSubHead.module.css';
const BHeadSubHead = ({subheading}) => {
  return (
    <div className={classes.BHeadSubHead}>
      {subheading}
    </div>
  )
}

export default BHeadSubHead
