import React from 'react'
import classes from './BPara.module.css';
const BPara = ({para}) => {
  return (
    <div className={classes.BPara}>
      {para}
    </div>
  )
}

export default BPara
