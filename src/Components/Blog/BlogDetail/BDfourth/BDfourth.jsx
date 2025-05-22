import React from 'react'
import classes from './BDfourth.module.css';
import tick from '../../../Assets/HomePage/tick.jpg';
const BDfourth = () => {
  return (
    <div className={classes.BDfourth}>
        <div className={classes.BDfourthcontent}> 
        <p>How Technical SEO Revolutionizes Website Performance</p>
        <p>Technical SEO serves as the backbone of a website’s success, ensuring its infrastructure aligns with search engine requirements and user expectations. Unlike on-page and off-page SEO, which focus on content and external factors, technical SEO prioritizes the technical aspects that enable search engines and users to navigate and interact with a website seamlessly.</p>
        <div>
            <div className={classes.BDfourthcontenttitle}><p className={classes.BDfourthcontenttitleline}></p><p className={classes.BDfourthcontenttitletext}>Enhancing User Experience</p></div>
            <p className={classes.BDfourthcontenttitleptext}>Technical SEO plays a vital role in improving the overall browsing experience by addressing key performance factors such as fast page loading times, mobile responsiveness, and intuitive navigation. When these elements are optimized, users enjoy a smoother and more engaging experience, which can lead to:</p>
            <div className={classes.point}>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Lower bounce rates: <span>Users are less likely to leave when pages load quickly and are easy to navigates images and use appropriate formats like WebP.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Longer session durations: <span>An enjoyable experience encourages visitors to stay and explore more content.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Higher conversions: <span>Positive user interactions increase the likelihood of completing desired actions, such as signing up or making a purchase.</span></div></div>
            </div>
        </div>
        <div>
        <div className={classes.BDfourthcontenttitle}><p className={classes.BDfourthcontenttitleline}></p><p className={classes.BDfourthcontenttitletext}>Boosting Search Engine Rankings</p></div>
            <p className={classes.BDfourthcontenttitleptext}>Google and other search engines prioritize websites that meet high-performance standards. Technical SEO ensures compliance with critical benchmarks like Core Web Vitals, which measure essential aspects of user experience:</p>
            <div className={classes.point}>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Largest Contentful Paint (LCP): <span>Reflects how quickly the largest visible content loads. Faster LCP scores improve rankings and user satisfaction.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>First Input Delay (FID): <span>Evaluates the time it takes for a page to respond to user interactions. A quick response builds trust and enhances usability.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Cumulative Layout Shift (CLS): <span>Measures visual stability by tracking unexpected content shifts. A stable layout reduces user frustration.</span></div></div>
            </div>
        </div>
        <div>
        <div className={classes.BDfourthcontenttitle}><p className={classes.BDfourthcontenttitleline}></p><p className={classes.BDfourthcontenttitletext}>Supporting Long-Term Growth</p></div>
            <p className={classes.BDfourthcontenttitleptext}>Technical SEO is not just a short-term fix; it sets the stage for sustainable website performance. By minimizing technical debt—issues that arise from outdated or poorly implemented features—it ensures smoother scalability and reduced maintenance costs over time. Regular technical SEO audits help identify and address potential issues before they impact performance. Staying aligned with evolving search engine algorithms ensures consistent growth and adaptability in a competitive digital landscape.</p>
            <div className={classes.point}>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Lower bounce rates: <span>Users are less likely to leave when pages load quickly and are easy to navigates images and use appropriate formats like WebP.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Longer session durations: <span>An enjoyable experience encourages visitors to stay and explore more content.</span></div></div>
                <div className={classes.pointcontent}><div><img src={tick} alt="tick"/></div><div className={classes.pointtext}>Higher conversions: <span>Positive user interactions increase the likelihood of completing desired actions, such as signing up or making a purchase.</span></div></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BDfourth
