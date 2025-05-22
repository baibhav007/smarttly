import React from 'react'
import styles from './HomePage.module.css'
import Slider from "react-slick";
import serviceimage from '../Assets/HomePage/service-highlight-bg.jpg';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import collab from '../Assets/HomePage/collablogo.png';
import grp from '../Assets/HomePage/case studies grp.png';
import blogadminpc from '../Assets/HomePage/blogadmin.jpg';
import blogpage from '../Assets/HomePage/blog.jpg';
import tick from '../Assets/HomePage/tick.jpg';
import Button from '../ui/input/reuse/Button/button';
import first from '../Assets/HomePage/1st image.jpg';
const HomePage = () => {
  const data=[
    {
      heading:'Search Engine Optimization (SEO)',
      img:serviceimage,
      description:'Achieve top search engine rankings with customized SEO strategies that enhance visibility, drive organic website traffic, and grow your business organically'
    },
    {
      heading:'Custom Website Design & Development',
      img:serviceimage,
      description:'Create stunning, mobile-friendly websites tailored to your brand. Optimize user experience and drive conversions with cutting-edge web development solutions.'
    },
    {
      heading:'Engaging Content Marketing',
      img:serviceimage,
      description:'Attract and retain customers with compelling blog posts, captivating visuals, and high-quality video content optimized for engagement and SEO.'
    },
    {
      heading:'Social Media Optimization',
      img:serviceimage,
      description:'Elevate your brands online presence with effective social media optimization strategies that drive engagement and build community across platforms like leading platforms like Facebook, Instagram, X, etc'
    },
    {
      heading:'PPC Advertising',
      img:serviceimage,
      description:'Launch data-driven pay-per-click campaigns to generate qualified leads, boost conversions, and achieve the highest return on investment ( ROI)'
    },
    {
      heading:'Analytics & Actionable Insights',
      img:serviceimage,
      description:'Make informed decisions with in-depth reporting and real-time analytics that empower you to refine marketing strategies and achieve measurable success.'
    },
    {
      heading:'Mobile App Development',
      img:serviceimage,
      description:'Empower your business with custom mobile apps crafted for the digital age. Smarttly delivers innovative, scalable solutions to enhance engagement and grow your reach with ease.'
    }
]
const cardData=[
  {
    title:"Lorem ipsum sit amet dolor",
    logo:collab,
    desc:"Lorem ipsum dolor sit amet consectetur. Nisi nisl viverra nisl diam pulvinar auctor at. N.",
    icons:grp
  },
  {
    title:"Lorem ipsum sit amet dolor",
    logo:collab,
    desc:"Lorem ipsum dolor sit amet consectetur. Nisi nisl viverra nisl diam pulvinar auctor at. N.",
    icons:grp
  },
  {
    title:"Lorem ipsum sit amet dolor",
    logo:collab,
    desc:"Lorem ipsum dolor sit amet consectetur. Nisi nisl viverra nisl diam pulvinar auctor at. N.",
    icons:grp
  }
]
const blogData=[
  {
    time:"30 min ago",
    heading:"lorem ipsum door sit",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, assumenda!",
    blogadmin:blogadminpc,
    blogadminname:"Shivam kumar",
    blogadmindes:'CEO of baseCamp Cord',
    blogpage:blogpage
  },
  {
    time:"10 min ago",
    heading:"lorem ipsum door sit",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, assumenda!",
    blogadmin:blogadminpc,
    blogadminname:"Shivam kumar",
    blogadmindes:'CEO of baseCamp Cord',
    blogpage:blogpage
  },
  {
    time:"10 min ago",
    heading:"lorem ipsum door sit",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, assumenda!",
    blogadmin:blogadminpc,
    blogadminname:"Shivam kumar",
    blogadmindes:'CEO of baseCamp Cord',
    blogpage:blogpage
  }
]
const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 3
};

  return (
    <div className={styles.homepage}>


        <div className={styles.hompagetopframe}>
            <div>
              <div>
              <p style={{ color: "pink"}}>Grow Your Brand with a <span>Full-Service Marketing Agency</span></p>
              </div>
              <div>
              <ul>
                <li><div><span><img src={tick} alt="tick"/></span><span>Empowering businesses across North America.</span></div></li>
                <li><div><span><img src={tick} alt="tick"/></span><span>Providing tailored SEO, PPC, Social Media, and Content Marketing.</span></div></li>
                <li><div><span><img src={tick} alt="tick"/></span><span>Focusing on growth and Maximizing ROI for our clients.</span></div></li>
                <li><div><span><img src={tick} alt="tick"/></span><span>Designing result-driven Digital Marketing Strategies.</span></div></li>
                <li><div><span><img src={tick} alt="tick"/></span><span>Developing customized user centric Mobile apps and Websites.</span></div></li>
              </ul>
              </div>
              <div>
                <form>
                  <input type="text" placeholder='Enter Name' value="name"/>
                  <input type="text" placeholder='Enter Phone Number' value="number"/>
              <Button color="var(--background-color)" backgroundColor="var(--maintext)">Free Consultation <GoArrowRight className='rightarrow'/></Button>
              </form>
              </div>
            </div>
            <div>
              <div>
                <img src={first} alt="first"  height={238} width={238}/>
              </div>
              <div></div>
            </div>
      </div>






      {/* <div className={styles.auditreportframe">
      <div className={styles.auditreport">
      </div>
      </div> */}
      {/* <div className={styles.servicehighlight}>
        <div className={styles.servicehighlightcontent}>
          <div className={styles.serviceheading}><h1>Service Highlights</h1><span>Comprehensive Digital Marketing Services Designed for Success</span></div>
          <div className={styles.servicefilter}>
            <button>SEO</button>
            <button>Web Development</button>
            <button>Social Media Optimization</button>
            <button>PPC Advertising</button>
            <button>Content Creation</button>
            <button>Analytics & Reporting</button>
            <button>Mobile App Development</button>
          </div>
          <div className={styles.servicecontent}>
          <Slider {...settings}>
              {
                data.map((d)=>(
                  <div className={styles.servicedata}>
                    <div className={styles.servicehead}>{d.heading}</div>
                    <div className={styles.servicedesc}>{d.description}</div>
                  </div>
                ))
              }
              </Slider>
          </div>
        </div>
      </div> */}
      <div className={styles.casestudiessection}>
        <div className={styles.caseintro}>
          <div className={styles.caseheading}>Case Studies</div>
          <div className={styles.casedesc}>
            <div className={styles.casedesctext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut, laborum nisi deleniti tempora, nulla labore expedita iste ipsa ea corrupti a, sunt odit quae aliquam magnam error. Corrupti, architecto!</div>
            <button type="submit">Ready to boost your brand?</button>
          </div>
        </div>
        <div className={styles.casebutton}>
          <div className={styles.casebuttonframe}>
          <button><GoArrowLeft className={styles.caseicon}/></button>
          <button className={styles.casebuttonblack}> <GoArrowRight className={`${styles.caseicon} ${styles.black}`} /></button>
          </div>
        </div>
        <div className={styles.casestudies}>
          {cardData.map((data)=>(
            <div className={styles.card}>
              <div className={styles.cardtop}>
                <div className={styles.cardtopleft}>
                  <div className={styles.cardtopleftheading}>{data.title}</div>
                  <div className={styles.cardlefttopbrandgrp}><img src={data.icons} alt="icons"/></div>
                </div>
                <div className={styles.cardtopright}><img src={data.logo} alt="logo"/></div>
              </div>
              <div className={styles.cardbottom}>
                <div className={styles.casestudydesc}>{data.desc}</div>
                <div><button type="submit"><GoArrowRight className={styles.caseicon}/></button></div>
              </div>
            </div>
          ))}
        </div>
      <div className={styles.blogsection}>
        <div className={styles.blogintro}>
          <div className={styles.blogheading}>Blog</div>
          <div className={styles.blogdesc}>
            <div className={styles.blogdesctext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut, laborum nisi deleniti tempora, nulla labore expedita iste ipsa ea corrupti a, sunt odit quae aliquam magnam error. Corrupti, architecto!</div>
          </div>
        </div>
        <div className={styles.blogbutton}>
          <div className={styles.blogbuttonframe}>
          <button><GoArrowLeft className={styles.caseicon}/></button>
          <button className={styles.blogbuttonblack}><GoArrowRight className={`${styles.caseicon} ${styles.black}`} /></button>
          </div>
        </div>
        <div className={styles.blogstudies}>
          {blogData.map((data)=>(
            <div className={styles.blogcard}>
              <div className={styles.blogcardimage}><img src={data.blogpage} alt="blogpage"/></div>
              <div className={styles.blogcardcontent}>
                <div className={styles.blogcardcontenttop}>
                  <div>
                  <p className={styles.datatime}>{data.time}</p>
                  <p className={styles.dataheading}>{data.heading}</p>
                  </div>
                  <p className={styles.datadesc}>{data.desc}</p>
                </div>
                <div className={styles.blogcardcontentbottom}>
                  <div className={styles.blogcardcontentbottomimg}>
                    <img src={data.blogadmin} alt="admin"/>
                  </div>
                  <div className={styles.blogcardcontentbottomimgdes}>
                    <p className={styles.blogadminname}>{data.blogadminname}</p>
                    <p className={styles.blogadmindesc}>{data.blogadmindes}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
  )
}

export default HomePage;
