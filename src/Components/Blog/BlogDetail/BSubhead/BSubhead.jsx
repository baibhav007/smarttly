import React from 'react'
import classes from './BSubhead.module.css';
const BSubhead = ({point}) => {
  return (
    <div className={classes.BSubhead}>
      {point}
    </div>
  )
}

export default BSubhead
