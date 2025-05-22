import React from 'react'
import classes from './AboutUsWhy.module.css';
// import aboutuswhy from '../../Assets/AboutUs/whyimg.jpg';
// import tick from '../../Assets/AboutUs/tick.png';
import Collab from '../../ui/Collab/Collab';
const AboutUsWhy = ({text}) => {
  return (
    <div className={classes.AboutUsWhyFrame}>
    <div className={classes.AboutUsWhy}>
      <div>
        <div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fwhyimg.jpg?alt=media&token=7158311e-b4ce-4697-9e79-d58322de34c0" alt="aboutuswhy" />
            </div>
            <div>
            <div>Why Choose Smarttly?</div>
        <div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Expertise:</span> Across Industries: Our team of professionals brings years of experience in diverse fields.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Tailored Strategies:</span> No cookie-cutter solutions—our services are customized to your business’s needs.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>Proven Results:</span> Data-driven approaches that deliver measurable growth and success.</div></div>
          <div><div><img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.png?alt=media&token=6fc5227e-d1a4-401e-98f7-aaecfa1491f2" alt="tick"/></div><div className='aboutuswhypoint'><span>End-to-End Support:</span> From strategy development to execution and optimization, we’re with you every step of the way.</div></div>
        </div>
            </div>
        </div>
        <div>
       <span>  Shilabs  is the service delivery partner of Smarttly specializing in Digital Marketing Agency services and agrees to deliver services on behalf of Smarttly to Smarttly’s clients. Shilabs has provided Smarttly right to include its client logos, client stories, service partners and testimonials on our website for promotional purposes.</span>
        </div>
      </div>
        <Collab className={classes.collab} text={text}/>
    </div>
    </div>
  )
}

export default AboutUsWhy
