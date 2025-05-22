import React from 'react'
import HomePageBlog from "../Components/HomePage/HomePageBlog/HomePageBlog";
import HomePageCaseStudies from "../Components/HomePage/HomePageCaseStudies/HomePageCaseStudies";
import HomeServiceHighlight from "../Components/HomePage/HomeServiceHighlight/HomeServiceHighlight";
import HomeAudit from '../Components/HomePage/HomeAudit/HomeAudit';
import HomeTestimonials from "../Components/HomePage/HomeTestimonials/HomeTestimonials";
import Collab from "../Components/ui/Collab/Collab";
import ThankYou from '../Components/ThankYou/ThankYou';
function ThankU() {
  const text={
    text:"Trusted by \\b100+\\b companies across 10 Countries worldwide. Our tailored services have helped industries such as e-commerce, healthcare, technology, real estate, and more achieve their digital goals."
}
  return (
    <>
        <ThankYou/>
        <HomeAudit/>
        <Collab text={text}/>
        <HomeTestimonials/>
        <HomeServiceHighlight/>
        <HomePageCaseStudies/>
        <HomePageBlog/>
    </>
  )
}
export default ThankU;


