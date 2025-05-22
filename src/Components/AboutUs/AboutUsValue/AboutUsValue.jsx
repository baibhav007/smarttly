import React from 'react';
import classes from './AboutUsValue.module.css';
// import tick from '../../Assets/HomePage/tick.jpg';
// import aboutusvalue from '../../Assets/AboutUs/aboutusvalue.jpg'
// import aboutusvaluesecond from '../../Assets/AboutUs/aboutusvaluesecond.jpg'
const AboutUsValue = () => {
  return (
    <div className={classes.AboutUsValueFrame}>
    <div className={classes.AboutUsValue}>
      <div>
        <div>Our Values</div>
        <div>
        <div><img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="img" /><div><span className={classes.AboutUsValuespan}>Innovation: We embrace change and continuously strive to deliver forward-thinking solutions.</span></div></div>
        <div><img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="img" /><div><span className={classes.AboutUsValuespan}>Excellence: We are committed to delivering the highest quality services and exceeding client expectations.</span></div></div>
        <div><img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="img" /><div><span className={classes.AboutUsValuespan}>Integrity: Honesty and transparency form the foundation of everything we do.</span></div></div>
        <div><img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="img" /><div><span className={classes.AboutUsValuespan}>Collaboration: We work closely with our clients, fostering partnerships that drive mutual success.</span></div></div>
        <div ><img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="img" /><div><span className={classes.AboutUsValuespan}>Customer-Centric Approach: Our clients’ goals are at the heart of our strategies, ensuring tailored solutions that deliver results.</span> </div></div>



        {/* <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Innovation:</span>  We embrace change and continuously strive to deliver forward-thinking solutions.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Excellence :</span> We are committed to delivering the highest quality services and exceeding client expectations.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Integrity:</span> Honesty and transparency form the foundation of everything we do.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Collaboration:</span> We work closely with our clients, fostering partnerships that drive mutual success.</div></div>
                    <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Customer-Centric Approach:</span>Customer-Centric Approach: Our clients’ goals are at the heart of our strategies, ensuring tailored solutions that deliver results.</div></div> */}
        </div>
      </div>
      <div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faboutusvalue.jpg?alt=media&token=c54ededd-a653-4fd2-b9cd-8ee9b684d01d" alt="about" className={classes.aboutUsValueImage} />
            <div className={classes.imagination}>Imagination <span>At Work</span></div>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faboutusvaluesecond.jpg?alt=media&token=7ae94d55-b337-495d-8cf0-e66fbb2ffa72" alt="aboutus" className={classes.aboutUsValue2Image}  />
      </div>
    </div>
    </div>
  )
}

export default AboutUsValue
