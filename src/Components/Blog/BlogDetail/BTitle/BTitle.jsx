import React from 'react'
import classes from './BTitle.module.css';
const BTitle = ({title}) => {
  return (
    <div className={classes.BTitle}>
      {title}
    </div>
  )
}

export default BTitle
