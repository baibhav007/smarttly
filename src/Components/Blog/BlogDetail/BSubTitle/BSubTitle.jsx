import React from 'react'
import classes from './BSubTitle.module.css';
const BSubTitle = ({subtitle}) => {
  return (
    <div className={classes.BSubTitle}>
      {subtitle}
    </div>
  )
}

export default BSubTitle
