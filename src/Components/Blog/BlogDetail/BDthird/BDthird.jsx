import React from "react";
import classes from "./BDthird.module.css";
const BDthird = () => {
  return (
    <div className={classes.BDthird}>
      <div className={classes.BDthirdcontent}>
        <p>Key Elements of Technical SEO</p>
        <div>
            <div>
                <div className={classes.BDthirdcontenttop}><p className={classes.line}></p><p className={classes.BDthirdcontenttoptext}>Website Speed and Performance</p></div>
                <p className={classes.BDthirdcontenttopsectext}>Website speed is critical for both search engine rankings and user engagement. Even a few seconds of delay in page loading time can result in higher bounce rates and reduced user engagement.</p>
            </div>
            <div className={classes.BDthirdcontentbottom}>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Importance</p>
                    <p>With the majority of users accessing websites through mobile devices, ensuring mobile
                    compatibility is no longer optional—it’s essential.</p>
                </div>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Optimization Tips</p>
                    <p>Compress images and use appropriate formats like WebP. Minify HTML, CSS, and JavaScript to reduce unnecessary characters and spaces. Opt for reliable hosting services with Content Delivery Network (CDN) support to ensure consistent performance.</p>
                </div>
            </div>
        </div>
        <div>
        <div>
                <div className={classes.BDthirdcontenttop}><p className={classes.line}></p><p className={classes.BDthirdcontenttoptext}>Mobile-Friendliness</p></div>
                <p className={classes.BDthirdcontenttopsectext}>With the majority of users accessing websites through mobile devices, ensuring mobile compatibility is no longer optional—it&# 39;s essential.</p>
            </div>
            <div className={classes.BDthirdcontentbottom}>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Why It Matters</p>
                    <p>Google’s mobile-first indexing ranks websites based on their mobile versions. A mobile friendly site directly improves SEO performance.</p>
                </div>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Optimization Tips</p>
                    <p>Use responsive design to adapt to various screen sizes. Simplify navigation for smaller screens by prioritizing essential elements. Test your website’s mobile-friendliness using tools like Google’s Mobile - Friendly Test.</p>
                </div>
            </div>
        </div>
        <div>
        <div>
                <div className={classes.BDthirdcontenttop}><p className={classes.line}></p><p className={classes.BDthirdcontenttoptext}>Crawlability and Indexing</p></div>
                <p className={classes.BDthirdcontenttopsectext}>Crawlability and indexing determine whether search engines can access and understand your website’s content effectively.</p>
            </div>
            <div className={classes.BDthirdcontentbottom}>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Why It Matters</p>
                    <p>Google’s mobile-first indexing ranks websites based on their mobile versions. A mobile friendly site directly improves SEO performance.</p>
                </div>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Best Practices</p>
                    <p>Maintain an updated XML sitemap for efficient crawling. Use a clean and logical URL structure. Implement robots.txt files to guide search engine crawlers to important pages while excluding irrelevant ones.</p>
                </div>
            </div>
        </div>
        <div>
        <div>
                <div className={classes.BDthirdcontenttop}><p className={classes.line}></p><p className={classes.BDthirdcontenttoptext}>Website Security</p></div>
                <p className={classes.BDthirdcontenttopsectext}>Security enhances user trust and search engine favourability. Websites using HTTPS (secured through SSL certificates) are prioritized by search engines.</p>
            </div>
            <div className={classes.BDthirdcontentbottom}>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Implementation</p>
                    <p>Ensure HTTPS protocols are active across all website pages.</p>
                </div>
                <div className={classes.BDthirdcontentbottomdiv}>
                    <p>Benefits</p>
                    <p>Encrypts data transmission for secure browsing. Mitigates risks of cyber-attacks and builds user trust</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BDthird;
