import HomePageBlog from "../Components/HomePage/HomePageBlog/HomePageBlog";
import HomePageCaseStudies from "../Components/HomePage/HomePageCaseStudies/HomePageCaseStudies";
import HomePageTop from "../Components/HomePage/HomePageTop/HomePageTop";
import HomeServiceHighlight from "../Components/HomePage/HomeServiceHighlight/HomeServiceHighlight";
import HomeAudit from "../Components/HomePage/HomeAudit/HomeAudit";
import HomeTestimonials from "../Components/HomePage/HomeTestimonials/HomeTestimonials";
import Collab from "../Components/ui/Collab/Collab";
import { Helmet } from "react-helmet-async";
import Landing from "../Components/LandingPage/Landing";
function Homepage() {
  const data = {
    path: "Home",
    title: "title",
    content: "content",
  };
  const text = {
    text: "Trusted by \\b100+\\b companies across 6 Countries worldwide. Our tailored services have helped industries such as e-commerce, healthcare, technology, real estate, and more achieve their digital goals.",
  };
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in USA - SEO, PPC, Web Services</title>
        <meta
          name="description"
          content="Smarttly offers top digital marketing services in the USA, including SEO, PPC, SMO, content creation, web & app development. Drive results with experts!,digital marketing companies near me,best digital marketing agency in USA,online marketing agency USA"/>
      </Helmet>
  
      <HomePageTop />
      <HomeAudit />
      <Collab text={text} />
      <HomeTestimonials />
      <HomeServiceHighlight />
      <HomePageCaseStudies />
      <HomePageBlog />
    </>
  );
}
export default Homepage;
