import React from 'react'
import styles from './AboutUsSecondFrame.module.css';
const AboutUsSecondFrame = ({title,content}) => {
  return (
    <div className={styles.AboutUsSecondFrame}>
      <div>{title}</div>
      <div>
      {content.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}

export default AboutUsSecondFrame;
