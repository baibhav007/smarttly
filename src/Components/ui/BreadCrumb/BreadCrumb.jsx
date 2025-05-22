import React from 'react'
import classes from './BreadCrumb.module.css';
const BreadCrumb = ({data}) => {
  return (
    <div className={classes.BreadCrumb} id={data.id}>
      <div className={classes.BreadCrumbContent}>
        <div>Home / <span>{data.path}</span></div>
        <div>
            <p>{data.title}</p>
            <p>{data.content}</p>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
