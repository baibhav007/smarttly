import React, { useState, useEffect } from "react";
import Button from "../../ui/input/reuse/Button/button";
import classes from "./HomeServiceHighlight.module.css";
import HomeServiceData from "./HomeServiceData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const HomeServiceHighlight = () => {
  const servicedata = [
    {
      title: "SEO",
      desc: "Rank higher, grow faster, and reach your target audience with our data-driven SEO strategies. At Smarttly, we fine-tune your website to align with search engine algorithms, ensuring long-term visibility and success.",
      id: 'seo', 
    },
    {
      title: "SMO",
      desc: "Turn followers into brand advocates. At Smarttly, we optimize your social media presence to boost engagement, increase followers, and amplify your brand message.",
      id: 'Social Media Optimization'
    },
    { 
      id: 'PPC_Advertising',
      title: "PPC Advertising",
      desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works towards your goals - whether it's more clicks, conversions, or leads.",
    },
    { 
      id: 'ContentC reation',
      title: "Content Creation",
      desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
    },
    { 
      id: 'Mobile App Development',
      title: "Mobile App Development",
      desc: "In an era dominated by mobile technology, having a tailored app is a must. Smarttly develops innovative, scalable solutions to help businesses strengthen connections and expand their reach.",
    },
    { 
      id: 'Web Development',
      title: "Web Development",
      desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobileView ? 1 : 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % servicedata.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + servicedata.length) % servicedata.length);
  };

  const getVisibleData = () => {
    const endIndex = startIndex + visibleCount;
    return [
      ...servicedata,
      ...servicedata, // Duplicate data for looping
    ].slice(startIndex, endIndex);
  };

  const buttons = [
    "SEO",
    "SMO",
    "PPC Advertising",
    "Content Creation",
    "App Development",
    "Web Development",
  ];

  return (
    <div className={classes.HomeServiceHighlightFrame}>
      <div className={classes.HomeServiceHighlight}>
        <div>
          <p>Service Highlights</p>
          <p>Transforming Businesses with Data-Driven Digital Marketing Solutions</p>
        </div>
        <div className={classes.tabContainer}>
          {buttons.map((buttonLabel, index) => (
            <Link
              key={index}
              to={`/services#${servicedata[index]?.id}`}
              className="link"
            >
              <Button
                color="var(--secondarycolor)"
                backgroundColor="Transparent"
                borderColor="var(--secondarycolor)"
                className={classes.servicebutton}
              >
                {buttonLabel}
              </Button>
            </Link>
          ))}
        </div>
        {isMobileView ? (
          <div className={classes.scroller}>
            <Button
              color="var(--backgroundcolor)"
              backgroundColor="var(--secondarycolor)"
              borderColor="var(--secondarycolor)"
              onClick={handlePrevious}
            >
              <GoArrowLeft />
            </Button>
            <div className={classes.mobileView}>
              <HomeServiceData
                key={startIndex}
                title={servicedata[startIndex].title}
                desc={servicedata[startIndex].desc}
                id={servicedata[startIndex].id}
              />
            </div>
            <Button
              color="var(--backgroundcolor)"
              backgroundColor="var(--secondarycolor)"
              borderColor="var(--secondarycolor)"
              onClick={handleNext}
            >
              <GoArrowRight />
            </Button>
          </div>
        ) : (
          <div className={classes.scroller}>
            <button
              className={classes.navButton}
              onClick={handlePrevious}
            >
              <GoArrowLeft />
            </button>
            {getVisibleData().map((data, index) => (
              <div key={index}>
                <HomeServiceData title={data.title} desc={data.desc} id={data.id} />
              </div>
            ))}
            <button
             className={classes.navButton}
              onClick={handleNext}
            >
              <GoArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeServiceHighlight;