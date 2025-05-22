// import AboutUs from "../Components/AboutUs/AboutUs";
import AboutUsEnd from "../Components/AboutUs/AboutUsEnd/AboutUsEnd";
// import AboutUsHeading from "../Components/AboutUs/AboutUsHeading/AboutUsHeading";
import AboutUsSecond from "../Components/AboutUs/AboutUsSecond/AboutUsSecond";
import AboutUsValue from "../Components/AboutUs/AboutUsValue/AboutUsValue";
import AboutUsWhy from "../Components/AboutUs/AboutUsWhy/AboutUsWhy";
import BreadCrumb from "../Components/ui/BreadCrumb/BreadCrumb";
import { Helmet } from "react-helmet-async";

function Homepage(){
    const data={
        // id:"AboutUstop",
        path:"About Us",
        title:"About Us",
        content:"Smarttly is a vibrant and results-driven digital marketing agency specializing in empowering North American businesses to thrive in the ever-evolving online landscape. Our team of skilled experts delivers innovative marketing and development solutions tailored to your unique needs.",
    }
    const text={
        text:"Smarttly has had the privilege of partnering with diverse businesses across North America, ranging from startups and small enterprises to established brands. Our tailored services have helped industries such as e-commerce, healthcare, technology, real estate, and more achieve their digital goals. "
    }
    
    return(
        <>
        <Helmet>
  <title>About Smarttly - Your Trusted Digital Marketing Partner</title>
  <meta
    name="description"
    content="Learn about Smarttly, a leading digital marketing agency specializing in SEO, PPC, web development, and content creation. Discover our mission and expertise."
  />
</Helmet>

        <BreadCrumb data={data}/>
        {/* <AboutUsHeading/> */}
        <AboutUsSecond/>
        <AboutUsValue/>
        <AboutUsWhy text={text}/>
        {/* <AboutUs/> */}
        <AboutUsEnd/>
        </>
    )
}
export default Homepage;