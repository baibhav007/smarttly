// import React, { useState } from "react";
// import classes from "./Service.module.css";
// import Button from "../ui/input/reuse/Button/button";
// import ServiceContent from "./ServiceContent";

// export const Service = () => {
//   const serviceData = [
//     {
//       id: "seo",
//       title: "SEO",
//       desc: "Rank higher, grow faster, and reach your target audience with our data-driven SEO strategies. At Smarttly, we fine-tune your website to align with search engine algorithms, ensuring long-term visibility and success.",
//       items: [
//         "We conduct in-depth keyword research to target terms, your customers are searching for.",
//         "Optimizing your website’s on-page elements including titles, meta descriptions, and internal linking.",
//         "We enhance performance with technical SEO: site speed, mobile responsiveness, and error-free code.",
//         "Building a robust backlink profile for better domain authority.",
//         "Monitoring rankings and adjusting strategies to maintain consistent growth.",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSEO.jpg?alt=media&token=659fdf41-aece-4c12-9c5d-461bf3ecc61c",
//       btnval: ["Learn More"],
//     },
//     {
//       id: "Social_Media_Optimization",
//       title: "Social Media Optimization",
//       desc: "Turn followers into brand advocates. At Smarttly, we optimize your social media presence to boost engagement, increase followers, and amplify your brand message.",
//       items: [
//         "Developing custom strategies for platforms like Instagram, Facebook, LinkedIn, etc.",
//         "We create visually appealing and shareable content to enhance your online presence.",
//         "Implementing targeted posting schedules based on your audience’s behavior.",
//         "We make the most of platform-specific features to achieve the best results.",
//         "Monitoring analytics and engagement metrics to refine and improve your strategy.",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcode.png?alt=media&token=0db6c1dd-faa1-4591-a72f-db209912845e",
//       btnval: ["See our work"],
//     },
//     {
//       id: "PPC_Advertising",
//       title: "PPC Advertising",
//       desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works toward your goals—whether it's more clicks, conversions, or leads.",
//       items: [
//         "We run Google Ads campaigns targeting keywords that deliver the highest ROI for your business.",
//         "Our team leverages social media advertising on platforms to reach your ideal audience.",
//         "We define custom audience segments, ensuring your ads are hyper-targeted based on demographics and behaviors.",
//         "By conducting A/B testing, we identify the best-performing ad creatives for maximum impact.",
//         "We continuously optimize your ads to reduce cost-per-click and drive better conversions.",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fppc.png?alt=media&token=16994ea2-69df-4e63-be9c-d4087ae45d22",
//       btnval: ["See our social strategy"],
//     },
//     {
//       id: "Content_Creation",
//       title: "Content Creation",
//       desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
//       items: [
//         "We curate blog writing that ranks for keywords and offers valuable insights to your audience.",
//         "Our team creates engaging social media posts that spark conversations and drive shares.",
//         "We design eye-catching visuals aligned with your brand voice and identity for maximum impact.",
//         "Professional video content is created to connect with audiences across all platforms.",
//         "We provide detailed content calendars to ensure consistent delivery and maximum impact.",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fsmo.png?alt=media&token=14a6eab2-7d44-4111-8308-0fca7d6c426f",
//       btnval: ["Maximize your ROI"],
//     },
//     {
//       id: "Mobile_App_Development",
//       title: "Mobile App Development",
//       desc: "In an era dominated by mobile technology, having a tailored app is a must. Smarttly develops innovative, scalable solutions to help businesses strengthen connections and expand their reach.",
//       items: [
//         "We focus on designing user-friendly interfaces that provide a smooth and enjoyable experience for your audience.",
//         "We use advanced technologies to deliver high-performing solutions across platforms.",
//         "We implement advanced security measures to safeguard user data and ensure compliance with industry standards.",
//         "Our solutions integrate seamlessly with your ecosystem, including CRM, e-commerce platforms, and other tools.",
//         "We perform rigorous testing to deliver apps that are bug-free, reliable, and optimized for performance.",
//         "We also provide ongoing support and updates to ensure your app remains relevant and functional.",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcode.png?alt=media&token=0db6c1dd-faa1-4591-a72f-db209912845e",
//       btnval: ["Let’s Build Your Custom App Today"],
//     },
//     {
//       id: "Web_Development",
//       title: "Web Development",
//       desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
//       items: [
//         "We develop customized, mobile-responsive websites that look great on any device.",
//         "We use modern technologies like HTML5, CSS3, JavaScript, and WordPress to build scalable solutions.",
//         "We ensure faster load times by optimizing coding and design elements for peak performance. ",
//         "Our team integrates SEO best practices into your site’s structure to boost visibility and rankings.",
//         "Highlight your success with a visually engaging portfolio that showcases your best projects. ",
//       ],
//       img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcomp.png?alt=media&token=3db45cfb-703b-437d-9b8f-54a7b7920422",
//       btnval: ["Explore our designs"],
//     },
//   ];

//   const buttonss = [
//     "SEO",
//     "SMO",
//     "PPC",
//     "Content Creation",
//     "App Development",
//     "Web Development",
//   ];
//   const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
//   return (
//     <div className={classes.service}>
//       <div className={classes.serviceintro}>
//           {buttonss.map((buttonLabel, index) => (
//             <Button
//               key={index}
//               color={
//                 selectedServiceIndex === index
//                   ? "var(--backgroundcolor)"
//                   : "var(--secondarycolor)"
//               }
//               backgroundColor={
//                 selectedServiceIndex === index
//                   ? "var(--secondarycolor)"
//                   : "Transparent"
//               }
//               borderColor="var(--secondarycolor)"
//               onClick={() => setSelectedServiceIndex(index)}
//               className={classes.servicebutton}
//             >
//               {buttonLabel}
//             </Button>
//           ))}
//       </div>
//       <div className={classes.selectedService}>
//         {selectedServiceIndex !== null && (
//           <div id={serviceData[selectedServiceIndex].id}>
//             <ServiceContent
//             id={serviceData[selectedServiceIndex].id}
//               img={serviceData[selectedServiceIndex].img}
//               title={serviceData[selectedServiceIndex].title}
//               desc={serviceData[selectedServiceIndex].desc}
//               items={serviceData[selectedServiceIndex].items}
//             />
//           </div>
//         )}
//       </div>
//       <div className={classes.servicework}>
//         {serviceData
//           .filter((_, index) => index !== selectedServiceIndex)
//           .map((data, index) => (
//             <div id={data.id}>
//               <ServiceContent
//                 key={index}
//                 id={data.id}
//                 img={data.img}
//                 title={data.title}
//                 desc={data.desc}
//                 items={data.items}
//                 btnvalue={data.btnval}
//               />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Service;


import React, { useState } from "react";
import classes from "./Service.module.css";
import Button from "../ui/input/reuse/Button/button";
import ServiceContent from "./ServiceContent";

export const Service = () => {
  const serviceData = [
    {
      id: "seo",
      title: "SEO",
      desc: "Rank higher, grow faster, and reach your target audience with our data-driven SEO strategies. At Smarttly, we fine-tune your website to align with search engine algorithms, ensuring long-term visibility and success.",
      items: [
        "We conduct in-depth keyword research to target terms, your customers are searching for.",
        "Optimizing your website’s on-page elements including titles, meta descriptions, and internal linking.",
        "We enhance performance with technical SEO: site speed, mobile responsiveness, and error-free code.",
        "Building a robust backlink profile for better domain authority.",
        "Monitoring rankings and adjusting strategies to maintain consistent growth.",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSEO.jpg?alt=media&token=659fdf41-aece-4c12-9c5d-461bf3ecc61c",
      btnval: ["Learn More"],
    },
    {
      id: "Social Media Optimization",
      title: "Social Media Optimization",
      desc: "Turn followers into brand advocates. At Smarttly, we optimize your social media presence to boost engagement, increase followers, and amplify your brand message.",
      items: [
        "Developing custom strategies for platforms like Instagram, Facebook, LinkedIn, etc.",
        "We create visually appealing and shareable content to enhance your online presence.",
        "Implementing targeted posting schedules based on your audience’s behavior.",
        "We make the most of platform-specific features to achieve the best results.",
        "Monitoring analytics and engagement metrics to refine and improve your strategy.",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcode.png?alt=media&token=0db6c1dd-faa1-4591-a72f-db209912845e",
      btnval: ["Learn More"],
    },
    {
      id: "PPC Advertising",
      title: "PPC Advertising",
      desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works toward your goals—whether it's more clicks, conversions, or leads.",
      items: [
        "We run Google Ads campaigns targeting keywords that deliver the highest ROI for your business.",
        "Our team leverages social media advertising on platforms to reach your ideal audience.",
        "We define custom audience segments, ensuring your ads are hyper-targeted based on demographics and behaviors.",
        "By conducting A/B testing, we identify the best-performing ad creatives for maximum impact.",
        "We continuously optimize your ads to reduce cost-per-click and drive better conversions.",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fppc.png?alt=media&token=16994ea2-69df-4e63-be9c-d4087ae45d22",
      btnval: ["Learn More"],
    },
    {
      id: "Content Creation",
      title: "Content Creation",
      desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
      items: [
        "We curate blog writing that ranks for keywords and offers valuable insights to your audience.",
        "Our team creates engaging social media posts that spark conversations and drive shares.",
        "We design eye-catching visuals aligned with your brand voice and identity for maximum impact.",
        "Professional video content is created to connect with audiences across all platforms.",
        "We provide detailed content calendars to ensure consistent delivery and maximum impact.",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fsmo.png?alt=media&token=14a6eab2-7d44-4111-8308-0fca7d6c426f",
      btnval: ["Learn More"],
    },
    {
      id: "Mobile App Development",
      title: "Mobile App Development",
      desc: "In an era dominated by mobile technology, having a tailored app is a must. Smarttly develops innovative, scalable solutions to help businesses strengthen connections and expand their reach.",
      items: [
        "We focus on designing user-friendly interfaces that provide a smooth and enjoyable experience for your audience.",
        "We use advanced technologies to deliver high-performing solutions across platforms.",
        "We implement advanced security measures to safeguard user data and ensure compliance with industry standards.",
        "Our solutions integrate seamlessly with your ecosystem, including CRM, e-commerce platforms, and other tools.",
        "We perform rigorous testing to deliver apps that are bug-free, reliable, and optimized for performance.",
        "We also provide ongoing support and updates to ensure your app remains relevant and functional.",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcode.png?alt=media&token=0db6c1dd-faa1-4591-a72f-db209912845e",
      btnval: ["Learn More"],
    },
    {
      id: "Web Development",
      title: "Web Development",
      desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
      items: [
        "We develop customized, mobile-responsive websites that look great on any device.",
        "We use modern technologies like HTML5, CSS3, JavaScript, and WordPress to build scalable solutions.",
        "We ensure faster load times by optimizing coding and design elements for peak performance. ",
        "Our team integrates SEO best practices into your site’s structure to boost visibility and rankings.",
        "Highlight your success with a visually engaging portfolio that showcases your best projects. ",
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcomp.png?alt=media&token=3db45cfb-703b-437d-9b8f-54a7b7920422",
      btnval: ["Learn More"],
    },
  ];

  const buttonss = [
    "SEO",
    "SMO",
    "PPC",
    "Content Creation",
    "App Development",
    "Web Development",
  ];
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  return (
  <>
     <h2 className={classes.heading} >
    Our Services
  </h2>
  <p className={classes.para} >
    At Smarttly, we empower Businesses across North America with tailored digital marketing strategies, including SEO, social media management and more that align with your goals to drive growth and outshine competitors.
  </p>
  <div className={classes.service}>
      <div className={classes.serviceintro}>
        {/* Add the screenshot content here */}
       
        {/* Buttons now come after the heading and description */}
        {buttonss.map((buttonLabel, index) => (
          <Button
            key={index}
            color={
              selectedServiceIndex === index
                ? "var(--backgroundcolor)"
                : "var(--secondarycolor)"
            }
            backgroundColor={
              selectedServiceIndex === index
                ? "var(--secondarycolor)"
                : "Transparent"
            }
            borderColor="var(--secondarycolor)"
            onClick={() => setSelectedServiceIndex(index)}
            className={classes.servicebutton}
          >
            {buttonLabel}
          </Button>
        ))}
      </div>
      <div className={classes.selectedService}>
        {selectedServiceIndex !== null && (
          <div id={serviceData[selectedServiceIndex].id}>
            <ServiceContent
              id={serviceData[selectedServiceIndex].id}
              img={serviceData[selectedServiceIndex].img}
              title={serviceData[selectedServiceIndex].title}
              desc={serviceData[selectedServiceIndex].desc}
              items={serviceData[selectedServiceIndex].items}
            />
          </div>
        )}
      </div>
      <div className={classes.servicework}>
        {serviceData
          ?.filter((_, index) => index !== selectedServiceIndex)
          .map((data, index) => (
            <div id={data.id}>
              <ServiceContent
                key={index}
                id={data.id}
                img={data.img}
                title={data.title}
                desc={data.desc}
                items={data.items}
                btnvalue={data.btnval}
              />
            </div>
          ))}
      </div>
    </div>
  </>
 
   
  );
};

export default Service;