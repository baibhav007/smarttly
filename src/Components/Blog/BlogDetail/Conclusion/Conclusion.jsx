import React from 'react'
import classes from './Conclusion.module.css';
const Conclusion = ({blog}) => {
  return (
    <div className={classes.Conclusion}>
      <div className={classes.Conclusioncontent}>
        <p className={classes.Conclusioncontenttop}>Conclusion</p>
        <p className={classes.Conclusioncontenttoptext}>{blog.conclusionhead}</p>
        {blog.conclusiondesc?.split("\n").map((line,index)=>
          <span key={index}>
            <div className={classes.Conclusioncontenttext}>{line}</div>
            {index < blog.conclusiondesc?.split("\n").length-1 && <><br/></>}
          </span>
        )}
      </div>
    </div>
  )
}

export default Conclusion
