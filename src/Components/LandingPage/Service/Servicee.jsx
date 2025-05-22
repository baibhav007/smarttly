import React, { useState } from "react";
import classes from "./Servicee.module.css";
import SEO from "../../Assets/Service/SEO.jpg";
import Comp from "../../Assets/Service/comp.png";
import Button from "../../ui/input/reuse/Button/button";
import code from "../../Assets/Service/code.png";
import smo from "../../Assets/Service/smo.png";
import ppc from "../../Assets/Service/ppc.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import tick from "../../Assets/HomePage/tick.jpg";
import servicecontent from "../../Assets/Service/servicecontact.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Modal from './Modal';

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
    img: SEO,
    btnval: ["Learn More"],
    cards: [
      {
        type: "plan",
        title: "\nStarter Plan...s\n",
        height: "80",
        content: {
          why: [
            "Cost-Effective Solution{{b}}\n Focuses on optimizing 10–35 keywords, suitable for smaller businesses or local SEO efforts.\n A good starting point for businesses with limited budgets",
            "Basic Optimization{{b}}\n Includes on-page and off-page SEO essentials, like technical website analysis and duplicate content checks. \nIdeal for businesses just beginning their online journey.",
            "Local Reach{{b}}\n Targets a manageable set of keywords, making it effective for reaching a local or niche audience.",
            "Best For{{b}}\n Start-ups, local businesses, or those seeking foundational SEO improvements.",
          ],
        },
      },
      {
        type: "price",
        title: "SEO Basic",
        tc:'seobasic',
        price: "$199",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "Upto 10 to 15 Keywords (On-page & Off-page Optimization",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
      {
        type: "price",
        title: "SEO Plus",
        tc:'seoplus',
        price: "$299",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "\nUpto 16 to 25 Keywords (On-page & Off-page Optimization)\n",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
      {
        type: "price",
        title: "SEO Booster",
        tc:'seobooster',
        price: "$399",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "\nUpto 26 to 35 Keywords (On-page & Off-page Optimization)\n",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
      {
        type: "plan",
        title: "\nAdvanced Plans\n",
        height: "80",
        content: {
          why: [
            "Broader Keyword Targeting{{b}}\n Covers 36-100 keywords, offering more opportunities to rank in competitive markets.\n Includes advanced techniques like press release distribution and Google Map listing optimization.",
            "Enhanced Technical Features{{b}} \n Provides in-depth analysis and optimization for better search engine performance.",
            "Scalability {{b}} \n Designed for businesses planning to expand their online reach beyond local or niche audiences.",
            "Best For {{b}} \n Growing businesses, e-commerce sites, or brands aiming for regional/national visibility.",
          ],
        },
      },
      {
        type: "price",
        title: "SEO Silver",
        price: "$599",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "\nUpto 36 to 55 Keywords (On-page & Off-page Optimization)\n",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
      {
        type: "price",
        title: "SEO Gold",
        price: "$799",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "\nUpto 56 to 75 Keywords (On-page & Off-page Optimization)\n",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
      {
        type: "price",
        title: "SEO Platinum",
        price: "$999",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "\nUpto 76 to 100 Keywords (On-page & Off-page Optimization)\n",
          "Technical Website Analysis",
          "Duplicate Content Analysis",
          "Keyword Analysis",
          "Keyword Mapping To Target Pages",
          "Canonicalization Analysis",
          "Initial External Link Analysis, and Disavow",
          "Link Building & Link Redirect Audit",
          "Internal Linking Restructuring & Optimization",
          "Branding Guidelines Development",
          "Link Building Architecture Development",
          "Google Analytics Set Up & WMT",
          "Keyword Rich Content Writing",
          "Content Marketing (Blogging & Article Links)",
          "Title Tags & Meta Descriptions,Header Tags Optimized",
          "XML Sitemap Creation",
          "Local Citation/Classified",
          "Custom 404 Error Page Setup",
          "Reporting",
        ],
      },
    ],
  },
  {
    id: "smo",
    title: "Social Media Optimization",
    desc: "Turn followers into brand advocates. At Smarttly, we optimize your social media presence to boost engagement, increase followers, and amplify your brand message.",
    items: [
      "Developing custom strategies for platforms like Instagram, Facebook, LinkedIn, etc.",
      "We create visually appealing and shareable content to enhance your online presence.",
      "Implementing targeted posting schedules based on your audience’s behavior.",
      "We make the most of platform-specific features to achieve the best results.",
      "Monitoring analytics and engagement metrics to refine and improve your strategy.",
    ],
    img: code,
    btnval: ["See our work"],
    cards: [
      {
        type: "plan",
        title: "\nStarter Plans\n",
        height: "78",
        content: {
          why: [
            "Basic Social Presence{{b}}\n 10 posts per month across up to 5 platforms.\nFocuses on consistency and brand awareness.",
            "Simple Strategy{{b}}\n Platform-specific strategies that don't overwhelm smaller businesses.",
            "Affordable Entry{{b}}\n A cost-effective way to maintain a steady social media presence without high investment.",
            "Best For{{b}}\n Small businesses, personal brands, or those new to social media marketing.",
          ],
        },
      },
      {
        type: "price",
        title: "SMO Starter",
        price: "$99",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "\n10 Posts per Month \n",
          "Up to 5 Social Media Platforms	",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Audience Engagement	",
          "Basic Monthly Report	",
        ],
      },
      {
        type: "price",
        title: "SMO Value Pack",
        price: "$149",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "\n15 Posts per Month	\n",
          "Up to 5 Social Media Platforms	",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Audience Engagement	",
          "Basic Monthly Report	",
          "\nCustomized Social Media Strategy\n",
          "\nBrand Consistency & Visual Content\n",
          "\nContent Creation for Optimal Reach\n",
          "\nTrend Monitoring\n",
          "\nIn-depth Analytics & Monthly Reporting\n",
        ],
      },
      {
        type: "price",
        title: "SMO Standard Pack",
        price: "$199",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "\n20 Posts per Month\n",
          "Up to 5 Social Media Platforms",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Audience Engagement",
          "Basic Monthly Report",
          "Customized Social Media Strategy",
          "Brand Consistency & Visual Content",
          "Content Creation for Optimal Reach",
          "Trend Monitoring",
          "In-depth Analytics & Monthly Reporting",
          "\nAdvanced Reporting with Insights\n",
          "\nTrend & Competitor Monitoring\n",
          "\nWeekly & Monthly Performance Reports\n",
        ],
      },
      {
        type: "plan",
        height: "78",
        title: "\nAdvanced Plans\n",
        content: {
          why: [
            "Greater Engagement{{b}}\n Offers 15+ posts per month with reels/shorts and advanced content creation.\nIncludes competitor analysis and trend monitoring for optimized campaigns.",
            "Strategic Customization{{b}}\n Tailored strategies for targeted audience engagement and higher brand visibility.",
            "Multi-Platform Expansion{{b}}\n Supports content creation and management for multiple platforms with detailed performance tracking.",
            "Best For{{b}}\n Growing businesses, influencers, or brands aiming for impactful social media campaigns.",
          ],
        },
      },
      {
        type: "price",
        title: "SMO Silver Pack",
        price: "$199",
        oldPrice: "",
        height: "78",
        description: "",
        points: [
          "\n2 Reels/Shorts per Month\n",
          "10 Posts per Month	",
          "Up to 5 Social Media Platforms	",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Audience Engagement	",
          "Basic Monthly Report	",
        ],
      },
      {
        type: "price",
        title: "SMO Gold Pack",
        price: "$349",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "\n4 Reels/Shorts per Month\n",
          "15 Posts per Month	",
          "Up to 5 Social Media Platforms	",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Audience Engagement	",
          "Basic Monthly Report	",
          "\nCustomized Social Media Strategy\n",
          "\nBrand Consistency & Visual Content\n",
          "\nContent Creation for Optimal Reach\n",
          "\nTrend Monitoring\n",
          "\nIn-depth Analytics & Monthly Reporting\n",
        ],
      },
      {
        type: "price",
        title: "SMO Platinum Pack",
        price: "$599",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "\n8 Reels/Shorts per Month\n",
          "20 Posts per Month	",
          "Up to 5 Social Media Platforms	",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation	",
          "Performance Tracking	",
          "Post Scheduling	",
          "In-depth Hashtag Research	",
          "Basic Monthly Report",
          "Customized Social Media Strategy",
          "Audience Engagement",
          "Brand Consistency & Visual Content",
          "Content Creation for Optimal Reach",
          "Trend Monitoring",
          "In-depth Analytics & Monthly Reporting",
          "\nAdvanced Reporting with Insights\n",
          "\nTrend & Competitor Monitoring\n",
          "\nWeekly & Monthly Performance Reports\n",
        ],
      },
    ],
    plan: ["Basic Social Media Packages", "Premium Social Media Packages"],
    text: [
      "Posts per Month	",
      "Reels per Month",
      "Social Platforms	",
      "Strategy	",
      "Content Creation	",
      "Performance Tracking	",
      "Post Scheduling	",
      "In-depth Research	",
      "Audience	",
      "Reporting Type	",
      "Reporting Frequency",
    ],
  },
  {
    id: "ppc",
    title: "PPC Advertising",
    desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works toward your goals—whether it's more clicks, conversions, or leads.",
    items: [
      "We run Google Ads campaigns targeting keywords that deliver the highest ROI for your business.",
      "Our team leverages social media advertising on platforms to reach your ideal audience.",
      "We define custom audience segments, ensuring your ads are hyper-targeted based on demographics and behaviors.",
      "By conducting A/B testing, we identify the best-performing ad creatives for maximum impact.",
      "We continuously optimize your ads to reduce cost-per-click and drive better conversions.",
    ],
    img: ppc,
    btnval: ["See our social strategy"],
    cards: [
      {
        type: "plan",
        title: "\nGoogle Ads Packages\n",
        height: "60",
        content: {
          why: [
            "Entry-Level Campaigns{{b}}\n Focuses on small-scale Google Ads campaigns with basic targeting.\nIdeal for testing the effectiveness of PPC for your business.",
            "Budget-Friendly{{b}}\n A cost-efficient way to drive traffic and leads without overspending.",
            "Specific Goals{{b}}\n Targets a narrow audience, ensuring ROI on limited budgets.",
            "Best For{{b}}\n Startups, small retailers, or businesses exploring paid advertising for the first time.",
          ],
          // why: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
          // what: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
        },
      },
      {
        type: "price",
        title: "Silver Pack",
        price: "$200+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "1-2 campaigns",
          "Basic keyword research	",
          "1-2 Ad Variations with A/B Testing	",
          "Basic Ad Extensions - Sitelinks, Callouts, etc",
          "Basic Tracking	",
          "Monthly Optimization Frequency	",
          "Basic targeting -Demographics & Device Targeting",
          "Basic Monthly Report	",
        ],
      },
      {
        type: "price",
        title: "Gold",
        price: "$300+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "\nUp to 3 campaigns\n",
          "Advanced Keyword Research & Refinement	",
          "Multiple Ad Variations with A/B testing	",
          "Basic Extensions + Structured Snippets, etc	",
          "Advanced Tracking - Basic Tracking + Goals, Conversions, etc",
          "Weekly Optimization Frequency	",
          "Advanced Targeting - Basic Targeting + Behavior Targeting, etc",
          "Basic Landing Page recommendations	",
          "Detailed Monthly Report with insights	",
        ],
      },
      {
        type: "price",
        title: "Platinum",
        price: "$500+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "\nUp to 5 campaigns\n",
          "Comprehensive Keyword Research & Competitor Analysis	",
          "Ad Copy Creation - Multiple Ad Variations with extensive A/B testing	",
          "Complete Ad extensions (all available types)	",
          "Complete Tracking - Advanced Tracking + Enhanced eCommerce, Remarketing, etc	",
          "Bi-weekly Optimization Frequency	",
          "Complete Targeting - Advance Targeting + Geo-targeting, Device Targeting, & audience segmentation, etc	",
          "Advanced Landing Page recommendations for conversion	",
          "Weekly and Monthly detailed Performance Reports	",
          "\nDedicated Account Manager\n",
        ],
      },
      {
        type: "plan",
        title: "\nMeta Ads Packages\n",
        height: "60",

        content: {
          why: [
            "Larger Campaign Scope{{b}}\n Supports multi-platform campaigns (Google Ads, Meta Ads) with advanced targeting and bid management.\nIdeal for scaling ad reach.",
            "Data-Driven Optimization{{b}}\n Offers detailed analytics, A/B testing, and competitor benchmarking for maximum ROI.",
            "Increased Visibility{{b}}\n Helps maintain a strong presence in competitive markets.",
            "Best For{{b}}\n Established businesses, e-commerce platforms, or those aiming for aggressive lead generation.",
          ],
          // why: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
          // what: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
        },
      },
      {
        type: "price",
        title: "Silver",
        price: "$200+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "1-2 campaigns",
          "Basic Targeting - Location, Age, Interests, etc	",
          "1-2 Ad Variations (Static Images, Carousel Ads)	",
          "Basic Ad Extensions - CTA Buttons, Links etc",
          "Basic Pixel Setup	",
          "Monthly Optimization Frequency	",
          "Basic Targeting - Location Targeting, Device Targeting etc	",
          "Basic Monthly Report	",
        ],
      },
      {
        type: "price",
        title: "Gold",
        price: "$300+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "\nUp to 3 campaigns\n",
          "Advanced Targeting - Basic Targeting + Custom & Lookalike Audiences etc	",
          "Multiple Ad Variations with A/B testing (Static, Carousel, and Video Ads)	",
          "Advanced Ad Extensions - Basic Extensions + Messenger buttons etc	",
          "Advanced Pixel setup with event tracking	",
          "Weekly Optimization Frequency	",
          "Advanced Targeting - Basic Targeting + Behavior Targeting etc	",
          "Detailed Monthly Report with insights	",
        ],
      },
      {
        type: "price",
        title: "Platinum",
        price: "$500+\n15% Ad Spend/Month",
        height: "60",

        oldPrice: "",
        description: "",
        points: [
          "\nUp to 5 campaigns\n",
          "Complete Targeting - Advanced Targeting + Retargeting, etc	",
          "Multiple Ad Variations with extensive A/B testing (Static, Carousel, and Video Ads)	",
          "Complete Ad Extensions - CTAs, Collection Ads, Facebook Shops, etc	",
          "Advanced Pixel setup with custom events & retargeting	",
          "Bi-weekly Optimization Frequency	",
          "Hyper-targeting	",
          "Weekly and Monthly detailed Performance Reports	",
          "\nDedicated Account Manager\n",
        ],
      },
    ],
  },
  {
    id: "cc",
    title: "Content Creation",
    desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
    items: [
      "We curate blog writing that ranks for keywords and offers valuable insights to your audience.",
      "Our team creates engaging social media posts that spark conversations and drive shares.",
      "We design eye-catching visuals aligned with your brand voice and identity for maximum impact.",
      "Professional video content is created to connect with audiences across all platforms.",
      "We provide detailed content calendars to ensure consistent delivery and maximum impact.",
    ],
    img: smo,
    btnval: ["Maximize your ROI"],
    titletop: "Content Creation Services",
    titletopsub:
      "Captivate, Educate, and Inspire with Expertly Crafted Content",
  },
  {
    id: "app",
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
    img: code,
    btnval: ["Let’s Build Your Custom App Today"],
    titletop: "App Development Services",
    titletopsub: "Build Seamless Mobile Experiences with Smarttly",
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
    items: [
      "We develop customized, mobile-responsive websites that look great on any device.",
      "We use modern technologies like HTML5, CSS3, JavaScript, and WordPress to build scalable solutions.",
      "We ensure faster load times by optimizing coding and design elements for peak performance. ",
      "Our team integrates SEO best practices into your site’s structure to boost visibility and rankings.",
      "Highlight your success with a visually engaging portfolio that showcases your best projects. ",
    ],
    img: Comp,
    btnval: ["Explore our designs"],
    titletop: "Website Development Services",
    titletopsub: "Build a High-Performing Website That Engages and Converts",
  },
];
const processPoint = (point) => {
  // Check if the point starts and ends with \n
  if (point.startsWith("\n") && point.endsWith("\n")) {
    return (
      <strong>
        {point
          .trim()
          .split("\n")
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </strong>
    );
  }
  // Handle general case for \n
  return point.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

// Process titles with \n and special formatting
const processTitle = (title) => {
  if (title.startsWith("\n") && title.endsWith("\n")) {
    return (
      <p
        className={classes.SpecialTitle}
        style={{ color: "var(--secondarycolor)" }}
      >
        {title.trim()}
      </p>
    );
  }
  return <p className={classes.Title}>{title}</p>;
};

// Process `why` content with bold (`{{b}}`) and line breaks (`\n`)
const processWhyContent = (item) => {
  return item.split("{{b}}").map((text, index) => {
    if (index % 2 === 0) {
      // Apply bold formatting for text inside `{{b}}`
      return (
        <strong key={index} style={{ fontSize: "1.3rem" }}>
          {text.split("\n").map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </strong>
      );
    }
    // Handle regular text with \n
    return text.split("\n").map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {line}
        <br />
      </React.Fragment>
    ));
  });
};
const Service = () => {
  const [expandedCards, setExpandedCards] = useState({}); // Track expanded state per card


  const toggleCard = (serviceId, cardTitle,index) => {
    const cardKey = `${serviceId}-${cardTitle}-${index}`;
    console.log(cardKey);
    
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey], // Only toggles the clicked card
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");

  const openModal = (serviceTitle) => {
    setSelectedServiceTitle(serviceTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={classes.Service}>
      {serviceData.map((service) => (
        <div className={classes.servicetop} key={service.id}>
          <div
            key={service.id}
            className={classes.ServiceContent}
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(${service.img}) 50% / cover no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <div className={classes.title}>{service.title}</div>
              <div className={classes.desc}>{service.desc}</div>
            </div>

            <div>
              <div className={classes.list}>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/services/${service.title}`} className={classes.link}>
                <Button
                  color="var(--backgroundcolor)"
                  backgroundColor="var(--secondarycolor)"
                  borderColor="var(--secondarycolor)"
                  className={classes.buttonn}
                >
                  Learn More <GoArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          {service.cards && service.cards.length > 0 ? (
            <div className={classes.servicecard}>
              {service.cards.map((card, index) => {
                 const cardKey = `${service.id}-${card.title}-${index}`; // Unique key per card
                return (
                  card.type === "price" && (
                    <div key={cardKey} style={{ maxHeight: "min-content" }} className={classes.PriceCard}>
                      <div className={classes.Header}>
                        {processTitle(card.title)}
                      </div>
                      <div className={classes.PriceContent}>
                        <div className={classes.Pricing}>
                          <p className={classes.CurrentPrice}>
                            <span className={classes.np}>{card.price}</span>{" "}
                            {card.oldPrice && (
                              <span className={classes.op}>
                                <s>{card.oldPrice}</s>
                              </span>
                            )}
                          </p>
                        </div>
                        <div>
                          {/* <Link to="/contact" className="link"> */}
                            <button className={classes.btn} onClick={() => openModal(service.title)}>Get Started</button>
                          {/* </Link> */}
                        </div>

                        <div className={classes.add} onClick={() => toggleCard(service.id, card.title,index)}>
                          {/* {console.log(service.id+card.title+index)} */}
                          <span
                            style={{
                              border: "1px solid var(--secondarycolor)",  
                              padding: "0.5rem",
                              borderRadius: "0.5rem",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {expandedCards[cardKey] ? (
                              <FaMinus color="var(--secondarycolor)" />
                            ) : (
                              <FaPlus color="var(--secondarycolor)" />
                            )}
                          </span>
                        </div>

                        {expandedCards[cardKey] && (
                          <div className={classes.Points}>
                            {card.points?.map((point, pointIndex) => (
                              <div key={pointIndex} className={classes.Point}>
                                <div className={classes.TickIcon}>
                                  <img src={tick} alt="tick" />
                                </div>
                                <p style={{ fontFamily: "Roboto" }}>
                                  {processPoint(point)}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          ) :
           (
            <div className={classes.ServiceContact}>
              <div>
                <div>
                  <p className={classes.ServiceContacttoptext} 
                  style={{
                        fontFamily:"Lexend",
                        fontSize:"500",
                            }}>
                    Contact us to get {service.titletop}
                  </p>
                  <p className={classes.ServiceContactbottext}>
                    {service.titletopsub}
                  </p>
                </div>
                {/* <Link to="/contact" className="link"> */}
                  <Button
                    color="var(--backgroundcolor)"
                    backgroundColor="var(--maintext)"
                    borderColor="var(--maintext)"
                    onClick={() => openModal(service.title)}
                  >
                    Contact Us <GoArrowRight />
                  </Button>
                {/* </Link> */}
              </div>
              <div>
                <img src={servicecontent} alt="content" />
              </div>
            </div>
          )}
        </div>
      ))}       

{isModalOpen && (
        <Modal closeModal={closeModal} serviceTitle={selectedServiceTitle} />
      )}
    </div>
  );
};

export default Service;








// import React, { useState } from "react";
// import classes from "./Servicee.module.css";
// import SEO from "../../Assets/Service/SEO.jpg";
// import Comp from "../../Assets/Service/comp.png";
// import Button from "../../ui/input/reuse/Button/button";
// import code from "../../Assets/Service/code.png";
// import smo from "../../Assets/Service/smo.png";
// import ppc from "../../Assets/Service/ppc.png";
// import { Link } from "react-router-dom";
// import { GoArrowRight } from "react-icons/go";
// import tick from "../../Assets/HomePage/tick.jpg";
// import servicecontent from "../../Assets/Service/servicecontact.png";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// import Modal from './Modal';

// const serviceData = [
//   {
//     id: "seo",
//     title: "SEO",
//     desc: "Rank higher, grow faster, and reach your target audience with our data-driven SEO strategies. At Smarttly, we fine-tune your website to align with search engine algorithms, ensuring long-term visibility and success.",
//     items: [
//       "We conduct in-depth keyword research to target terms, your customers are searching for.",
//       "Optimizing your website’s on-page elements including titles, meta descriptions, and internal linking.",
//       "We enhance performance with technical SEO: site speed, mobile responsiveness, and error-free code.",
//       "Building a robust backlink profile for better domain authority.",
//       "Monitoring rankings and adjusting strategies to maintain consistent growth.",
//     ],
//     img: SEO,
//     btnval: ["Learn More"],
//     cards: [
//       {
//         type: "plan",
//         title: "\nStarter Plan...s\n",
//         height: "80",
//         content: {
//           why: [
//             "Cost-Effective Solution{{b}}\n Focuses on optimizing 10–35 keywords, suitable for smaller businesses or local SEO efforts.\n A good starting point for businesses with limited budgets",
//             "Basic Optimization{{b}}\n Includes on-page and off-page SEO essentials, like technical website analysis and duplicate content checks. \nIdeal for businesses just beginning their online journey.",
//             "Local Reach{{b}}\n Targets a manageable set of keywords, making it effective for reaching a local or niche audience.",
//             "Best For{{b}}\n Start-ups, local businesses, or those seeking foundational SEO improvements.",
//           ],
//         },
//       },
//       {
//         type: "price",
//         title: "SEO Silver",
//         tc:'seobasic',
//         price: "$199",
//         oldPrice: "",
//         description: "",
//         height: "80",
//         points: [
//           "Upto 10 to 15 Keywords (On-page & Off-page Optimization",
//           "Technical Website Analysis",
//           "Duplicate Content Analysis",
//           "Keyword Analysis",
//           "Keyword Mapping To Target Pages",
//           "Canonicalization Analysis",
//           "Initial External Link Analysis, and Disavow",
//           "Link Building & Link Redirect Audit",
//           "Internal Linking Restructuring & Optimization",
//           "Branding Guidelines Development",
//           "Link Building Architecture Development",
//           "Google Analytics Set Up & WMT",
//           "Keyword Rich Content Writing",
//           "Content Marketing (Blogging & Article Links)",
//           "Title Tags & Meta Descriptions,Header Tags Optimized",
//           "XML Sitemap Creation",
//           "Local Citation/Classified",
//           "Custom 404 Error Page Setup",
//           "Reporting",
//         ],
//       },
//       // {
//       //   type: "price",
//       //   title: "SEO Plus",
//       //   tc:'seoplus',
//       //   price: "$299",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "80",
//       //   points: [
//       //     "\nUpto 16 to 25 Keywords (On-page & Off-page Optimization)\n",
//       //     "Technical Website Analysis",
//       //     "Duplicate Content Analysis",
//       //     "Keyword Analysis",
//       //     "Keyword Mapping To Target Pages",
//       //     "Canonicalization Analysis",
//       //     "Initial External Link Analysis, and Disavow",
//       //     "Link Building & Link Redirect Audit",
//       //     "Internal Linking Restructuring & Optimization",
//       //     "Branding Guidelines Development",
//       //     "Link Building Architecture Development",
//       //     "Google Analytics Set Up & WMT",
//       //     "Keyword Rich Content Writing",
//       //     "Content Marketing (Blogging & Article Links)",
//       //     "Title Tags & Meta Descriptions,Header Tags Optimized",
//       //     "XML Sitemap Creation",
//       //     "Local Citation/Classified",
//       //     "Custom 404 Error Page Setup",
//       //     "Reporting",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "SEO Gold",
//       //   tc:'seobooster',
//       //   price: "$399",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "80",
//       //   points: [
//       //     "\nUpto 26 to 35 Keywords (On-page & Off-page Optimization)\n",
//       //     "Technical Website Analysis",
//       //     "Duplicate Content Analysis",
//       //     "Keyword Analysis",
//       //     "Keyword Mapping To Target Pages",
//       //     "Canonicalization Analysis",
//       //     "Initial External Link Analysis, and Disavow",
//       //     "Link Building & Link Redirect Audit",
//       //     "Internal Linking Restructuring & Optimization",
//       //     "Branding Guidelines Development",
//       //     "Link Building Architecture Development",
//       //     "Google Analytics Set Up & WMT",
//       //     "Keyword Rich Content Writing",
//       //     "Content Marketing (Blogging & Article Links)",
//       //     "Title Tags & Meta Descriptions,Header Tags Optimized",
//       //     "XML Sitemap Creation",
//       //     "Local Citation/Classified",
//       //     "Custom 404 Error Page Setup",
//       //     "Reporting",
//       //   ],
//       // },
//       {
//         type: "plan",
//         title: "\nAdvanced Plans\n",
//         height: "80",
//         content: {
//           why: [
//             "Broader Keyword Targeting{{b}}\n Covers 36-100 keywords, offering more opportunities to rank in competitive markets.\n Includes advanced techniques like press release distribution and Google Map listing optimization.",
//             "Enhanced Technical Features{{b}} \n Provides in-depth analysis and optimization for better search engine performance.",
//             "Scalability {{b}} \n Designed for businesses planning to expand their online reach beyond local or niche audiences.",
//             "Best For {{b}} \n Growing businesses, e-commerce sites, or brands aiming for regional/national visibility.",
//           ],
//         },
//       },
//       // {
//       //   type: "price",
//       //   title: "SEO Platinum",
//       //   price: "$599",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "80",
//       //   points: [
//       //     "\nUpto 36 to 55 Keywords (On-page & Off-page Optimization)\n",
//       //     "Technical Website Analysis",
//       //     "Duplicate Content Analysis",
//       //     "Keyword Analysis",
//       //     "Keyword Mapping To Target Pages",
//       //     "Canonicalization Analysis",
//       //     "Initial External Link Analysis, and Disavow",
//       //     "Link Building & Link Redirect Audit",
//       //     "Internal Linking Restructuring & Optimization",
//       //     "Branding Guidelines Development",
//       //     "Link Building Architecture Development",
//       //     "Google Analytics Set Up & WMT",
//       //     "Keyword Rich Content Writing",
//       //     "Content Marketing (Blogging & Article Links)",
//       //     "Title Tags & Meta Descriptions,Header Tags Optimized",
//       //     "XML Sitemap Creation",
//       //     "Local Citation/Classified",
//       //     "Custom 404 Error Page Setup",
//       //     "Reporting",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "SEO Gold",
//       //   price: "$799",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "80",
//       //   points: [
//       //     "\nUpto 56 to 75 Keywords (On-page & Off-page Optimization)\n",
//       //     "Technical Website Analysis",
//       //     "Duplicate Content Analysis",
//       //     "Keyword Analysis",
//       //     "Keyword Mapping To Target Pages",
//       //     "Canonicalization Analysis",
//       //     "Initial External Link Analysis, and Disavow",
//       //     "Link Building & Link Redirect Audit",
//       //     "Internal Linking Restructuring & Optimization",
//       //     "Branding Guidelines Development",
//       //     "Link Building Architecture Development",
//       //     "Google Analytics Set Up & WMT",
//       //     "Keyword Rich Content Writing",
//       //     "Content Marketing (Blogging & Article Links)",
//       //     "Title Tags & Meta Descriptions,Header Tags Optimized",
//       //     "XML Sitemap Creation",
//       //     "Local Citation/Classified",
//       //     "Custom 404 Error Page Setup",
//       //     "Reporting",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "SEO Platinum",
//       //   price: "$999",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "80",
//       //   points: [
//       //     "\nUpto 76 to 100 Keywords (On-page & Off-page Optimization)\n",
//       //     "Technical Website Analysis",
//       //     "Duplicate Content Analysis",
//       //     "Keyword Analysis",
//       //     "Keyword Mapping To Target Pages",
//       //     "Canonicalization Analysis",
//       //     "Initial External Link Analysis, and Disavow",
//       //     "Link Building & Link Redirect Audit",
//       //     "Internal Linking Restructuring & Optimization",
//       //     "Branding Guidelines Development",
//       //     "Link Building Architecture Development",
//       //     "Google Analytics Set Up & WMT",
//       //     "Keyword Rich Content Writing",
//       //     "Content Marketing (Blogging & Article Links)",
//       //     "Title Tags & Meta Descriptions,Header Tags Optimized",
//       //     "XML Sitemap Creation",
//       //     "Local Citation/Classified",
//       //     "Custom 404 Error Page Setup",
//       //     "Reporting",
//       //   ],
//       // },
//     ],
//   },
//   {
//     id: "smo",
//     title: "Social Media Optimization",
//     desc: "Turn followers into brand advocates. At Smarttly, we optimize your social media presence to boost engagement, increase followers, and amplify your brand message.",
//     items: [
//       "Developing custom strategies for platforms like Instagram, Facebook, LinkedIn, etc.",
//       "We create visually appealing and shareable content to enhance your online presence.",
//       "Implementing targeted posting schedules based on your audience’s behavior.",
//       "We make the most of platform-specific features to achieve the best results.",
//       "Monitoring analytics and engagement metrics to refine and improve your strategy.",
//     ],
//     img: code,
//     btnval: ["See our work"],
//     cards: [
//       {
//         type: "plan",
//         title: "\nStarter Plans\n",
//         height: "78",
//         content: {
//           why: [
//             "Basic Social Presence{{b}}\n 10 posts per month across up to 5 platforms.\nFocuses on consistency and brand awareness.",
//             "Simple Strategy{{b}}\n Platform-specific strategies that don't overwhelm smaller businesses.",
//             "Affordable Entry{{b}}\n A cost-effective way to maintain a steady social media presence without high investment.",
//             "Best For{{b}}\n Small businesses, personal brands, or those new to social media marketing.",
//           ],
//         },
//       },
//       {
//         type: "price",
//         title: "SMO Silver",
//         price: "$99",
//         oldPrice: "",
//         description: "",
//         height: "78",
//         points: [
//           "\n10 Posts per Month \n",
//           "Up to 5 Social Media Platforms	",
//           "Platform-Specific Strategy",
//           "Brand Consistency",
//           "Content Creation	",
//           "Performance Tracking	",
//           "Post Scheduling	",
//           "In-depth Hashtag Research	",
//           "Audience Engagement	",
//           "Basic Monthly Report	",
//         ],
//       },
//       // {
//       //   type: "price",
//       //   title: "SMO Value Pack",
//       //   price: "$149",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "78",
//       //   points: [
//       //     "\n15 Posts per Month	\n",
//       //     "Up to 5 Social Media Platforms	",
//       //     "Platform-Specific Strategy",
//       //     "Brand Consistency",
//       //     "Content Creation	",
//       //     "Performance Tracking	",
//       //     "Post Scheduling	",
//       //     "In-depth Hashtag Research	",
//       //     "Audience Engagement	",
//       //     "Basic Monthly Report	",
//       //     "\nCustomized Social Media Strategy\n",
//       //     "\nBrand Consistency & Visual Content\n",
//       //     "\nContent Creation for Optimal Reach\n",
//       //     "\nTrend Monitoring\n",
//       //     "\nIn-depth Analytics & Monthly Reporting\n",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "SMO Standard Pack",
//       //   price: "$199",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "78",
//       //   points: [
//       //     "\n20 Posts per Month\n",
//       //     "Up to 5 Social Media Platforms",
//       //     "Platform-Specific Strategy",
//       //     "Brand Consistency",
//       //     "Content Creation	",
//       //     "Performance Tracking	",
//       //     "Post Scheduling	",
//       //     "In-depth Hashtag Research	",
//       //     "Audience Engagement",
//       //     "Basic Monthly Report",
//       //     "Customized Social Media Strategy",
//       //     "Brand Consistency & Visual Content",
//       //     "Content Creation for Optimal Reach",
//       //     "Trend Monitoring",
//       //     "In-depth Analytics & Monthly Reporting",
//       //     "\nAdvanced Reporting with Insights\n",
//       //     "\nTrend & Competitor Monitoring\n",
//       //     "\nWeekly & Monthly Performance Reports\n",
//       //   ],
//       // },
//       {
//         type: "plan",
//         height: "78",
//         title: "\nAdvanced Plans\n",
//         content: {
//           why: [
//             "Greater Engagement{{b}}\n Offers 15+ posts per month with reels/shorts and advanced content creation.\nIncludes competitor analysis and trend monitoring for optimized campaigns.",
//             "Strategic Customization{{b}}\n Tailored strategies for targeted audience engagement and higher brand visibility.",
//             "Multi-Platform Expansion{{b}}\n Supports content creation and management for multiple platforms with detailed performance tracking.",
//             "Best For{{b}}\n Growing businesses, influencers, or brands aiming for impactful social media campaigns.",
//           ],
//         },
//       },
//       {
//         type: "price",
//         title: "SMO Gold",
//         price: "$199",
//         oldPrice: "",
//         height: "78",
//         description: "",
//         points: [
//           "\n2 Reels/Shorts per Month\n",
//           "10 Posts per Month	",
//           "Up to 5 Social Media Platforms	",
//           "Platform-Specific Strategy",
//           "Brand Consistency",
//           "Content Creation	",
//           "Performance Tracking	",
//           "Post Scheduling	",
//           "In-depth Hashtag Research	",
//           "Audience Engagement	",
//           "Basic Monthly Report	",
//         ],
//       },
//       {
//         type: "price",
//         title: "SMO Platinum",
//         price: "$349",
//         oldPrice: "",
//         description: "",
//         height: "78",
//         points: [
//           "\n4 Reels/Shorts per Month\n",
//           "15 Posts per Month	",
//           "Up to 5 Social Media Platforms	",
//           "Platform-Specific Strategy",
//           "Brand Consistency",
//           "Content Creation	",
//           "Performance Tracking	",
//           "Post Scheduling	",
//           "In-depth Hashtag Research	",
//           "Audience Engagement	",
//           "Basic Monthly Report	",
//           "\nCustomized Social Media Strategy\n",
//           "\nBrand Consistency & Visual Content\n",
//           "\nContent Creation for Optimal Reach\n",
//           "\nTrend Monitoring\n",
//           "\nIn-depth Analytics & Monthly Reporting\n",
//         ],
//       },
//       // {
//       //   type: "price",
//       //   title: "SMO Platinum Pack",
//       //   price: "$599",
//       //   oldPrice: "",
//       //   description: "",
//       //   height: "78",
//       //   points: [
//       //     "\n8 Reels/Shorts per Month\n",
//       //     "20 Posts per Month	",
//       //     "Up to 5 Social Media Platforms	",
//       //     "Platform-Specific Strategy",
//       //     "Brand Consistency",
//       //     "Content Creation	",
//       //     "Performance Tracking	",
//       //     "Post Scheduling	",
//       //     "In-depth Hashtag Research	",
//       //     "Basic Monthly Report",
//       //     "Customized Social Media Strategy",
//       //     "Audience Engagement",
//       //     "Brand Consistency & Visual Content",
//       //     "Content Creation for Optimal Reach",
//       //     "Trend Monitoring",
//       //     "In-depth Analytics & Monthly Reporting",
//       //     "\nAdvanced Reporting with Insights\n",
//       //     "\nTrend & Competitor Monitoring\n",
//       //     "\nWeekly & Monthly Performance Reports\n",
//       //   ],
//       // },
//     ],
//     plan: ["Basic Social Media Packages", "Premium Social Media Packages"],
//     text: [
//       "Posts per Month	",
//       "Reels per Month",
//       "Social Platforms	",
//       "Strategy	",
//       "Content Creation	",
//       "Performance Tracking	",
//       "Post Scheduling	",
//       "In-depth Research	",
//       "Audience	",
//       "Reporting Type	",
//       "Reporting Frequency",
//     ],
//   },
//   {
//     id: "ppc",
//     title: "PPC Advertising",
//     desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works toward your goals—whether it's more clicks, conversions, or leads.",
//     items: [
//       "We run Google Ads campaigns targeting keywords that deliver the highest ROI for your business.",
//       "Our team leverages social media advertising on platforms to reach your ideal audience.",
//       "We define custom audience segments, ensuring your ads are hyper-targeted based on demographics and behaviors.",
//       "By conducting A/B testing, we identify the best-performing ad creatives for maximum impact.",
//       "We continuously optimize your ads to reduce cost-per-click and drive better conversions.",
//     ],
//     img: ppc,
//     btnval: ["See our social strategy"],
//     cards: [
//       {
//         type: "plan",
//         title: "\nGoogle & Meta\n",
//         height: "60",
//         content: {
//           why: [
//             "Entry-Level Campaigns{{b}}\n Focuses on small-scale Google Ads campaigns with basic targeting.\nIdeal for testing the effectiveness of PPC for your business.",
//             "Budget-Friendly{{b}}\n A cost-efficient way to drive traffic and leads without overspending.",
//             "Specific Goals{{b}}\n Targets a narrow audience, ensuring ROI on limited budgets.",
//             "Best For{{b}}\n Startups, small retailers, or businesses exploring paid advertising for the first time.",
//           ],
//           // why: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
//           // what: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
//         },
//       },
//       // {
//       //   type: "price",
//       //   title: "Silver Pack",
//       //   price: "$200+\n15% Ad Spend/Month",
//       //   height: "60",

//       //   oldPrice: "",
//       //   description: "",
//       //   points: [
//       //     "1-2 campaigns",
//       //     "Basic keyword research	",
//       //     "1-2 Ad Variations with A/B Testing	",
//       //     "Basic Ad Extensions - Sitelinks, Callouts, etc",
//       //     "Basic Tracking	",
//       //     "Monthly Optimization Frequency	",
//       //     "Basic targeting -Demographics & Device Targeting",
//       //     "Basic Monthly Report	",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "Gold Pack",
//       //   price: "$300+\n15% Ad Spend/Month",
//       //   height: "60",

//       //   oldPrice: "",
//       //   description: "",
//       //   points: [
//       //     "\nUp to 3 campaigns\n",
//       //     "Advanced Keyword Research & Refinement	",
//       //     "Multiple Ad Variations with A/B testing	",
//       //     "Basic Extensions + Structured Snippets, etc	",
//       //     "Advanced Tracking - Basic Tracking + Goals, Conversions, etc",
//       //     "Weekly Optimization Frequency	",
//       //     "Advanced Targeting - Basic Targeting + Behavior Targeting, etc",
//       //     "Basic Landing Page recommendations	",
//       //     "Detailed Monthly Report with insights	",
//       //   ],
//       // },
//       // {
//       //   type: "price",
//       //   title: "Platinum Pack",
//       //   price: "$500+\n15% Ad Spend/Month",
//       //   height: "60",

//       //   oldPrice: "",
//       //   description: "",
//       //   points: [
//       //     "\nUp to 5 campaigns\n",
//       //     "Comprehensive Keyword Research & Competitor Analysis	",
//       //     "Ad Copy Creation - Multiple Ad Variations with extensive A/B testing	",
//       //     "Complete Ad extensions (all available types)	",
//       //     "Complete Tracking - Advanced Tracking + Enhanced eCommerce, Remarketing, etc	",
//       //     "Bi-weekly Optimization Frequency	",
//       //     "Complete Targeting - Advance Targeting + Geo-targeting, Device Targeting, & audience segmentation, etc	",
//       //     "Advanced Landing Page recommendations for conversion	",
//       //     "Weekly and Monthly detailed Performance Reports	",
//       //     "\nDedicated Account Manager\n",
//       //   ],
//       // },
//       // {
//       //   type: "plan",
//       //   title: "\nMeta Ads Packages\n",
//       //   height: "60",

//       //   content: {
//       //     why: [
//       //       "Larger Campaign Scope{{b}}\n Supports multi-platform campaigns (Google Ads, Meta Ads) with advanced targeting and bid management.\nIdeal for scaling ad reach.",
//       //       "Data-Driven Optimization{{b}}\n Offers detailed analytics, A/B testing, and competitor benchmarking for maximum ROI.",
//       //       "Increased Visibility{{b}}\n Helps maintain a strong presence in competitive markets.",
//       //       "Best For{{b}}\n Established businesses, e-commerce platforms, or those aiming for aggressive lead generation.",
//       //     ],
//       //     // why: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
//       //     // what: "Comprehensive website analysis includes technical audits, keyword review, duplicate content checks, and optimization strategies.",
//       //   },
//       // },
//       {
//         type: "price",
//         title: "Silver",
//         price: "$99+\n15% Ad Spend/Month",
//         height: "60",

//         oldPrice: "",
//         description: "",
//         points: [
//           "1-2 campaigns",
//           "Basic Targeting - Location, Age, Interests, etc	",
//           "1-2 Ad Variations (Static Images, Carousel Ads)	",
//           "Basic Ad Extensions - CTA Buttons, Links etc",
//           "Basic Pixel Setup	",
//           "Monthly Optimization Frequency	",
//           "Basic Targeting - Location Targeting, Device Targeting etc	",
//           "Basic Monthly Report	",
//         ],
//       },
//       {
//         type: "price",
//         title: "Gold ",
//         price: "$199+\n15% Ad Spend/Month",
//         height: "60",

//         oldPrice: "",
//         description: "",
//         points: [
//           "\nUp to 3 campaigns\n",
//           "Advanced Targeting - Basic Targeting + Custom & Lookalike Audiences etc	",
//           "Multiple Ad Variations with A/B testing (Static, Carousel, and Video Ads)	",
//           "Advanced Ad Extensions - Basic Extensions + Messenger buttons etc	",
//           "Advanced Pixel setup with event tracking	",
//           "Weekly Optimization Frequency	",
//           "Advanced Targeting - Basic Targeting + Behavior Targeting etc	",
//           "Detailed Monthly Report with insights	",
//         ],
//       },
//       {
//         type: "price",
//         title: "Platinum",
//         price: "$499+\n15% Ad Spend/Month",
//         height: "60",

//         oldPrice: "",
//         description: "",
//         points: [
//           "\nUp to 5 campaigns\n",
//           "Complete Targeting - Advanced Targeting + Retargeting, etc	",
//           "Multiple Ad Variations with extensive A/B testing (Static, Carousel, and Video Ads)	",
//           "Complete Ad Extensions - CTAs, Collection Ads, Facebook Shops, etc	",
//           "Advanced Pixel setup with custom events & retargeting	",
//           "Bi-weekly Optimization Frequency	",
//           "Hyper-targeting	",
//           "Weekly and Monthly detailed Performance Reports	",
//           "\nDedicated Account Manager\n",
//         ],
//       },
//     ],
//   },
//   {
//     id: "cc",
//     title: "Content Creation",
//     desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
//     items: [
//       "We curate blog writing that ranks for keywords and offers valuable insights to your audience.",
//       "Our team creates engaging social media posts that spark conversations and drive shares.",
//       "We design eye-catching visuals aligned with your brand voice and identity for maximum impact.",
//       "Professional video content is created to connect with audiences across all platforms.",
//       "We provide detailed content calendars to ensure consistent delivery and maximum impact.",
//     ],
//     img: smo,
//     btnval: ["Maximize your ROI"],
//     titletop: "Content Creation Services",
//     titletopsub:
//       "Captivate, Educate, and Inspire with Expertly Crafted Content",
//   },
//   {
//     id: "app",
//     title: "Mobile App Development",
//     desc: "In an era dominated by mobile technology, having a tailored app is a must. Smarttly develops innovative, scalable solutions to help businesses strengthen connections and expand their reach.",
//     items: [
//       "We focus on designing user-friendly interfaces that provide a smooth and enjoyable experience for your audience.",
//       "We use advanced technologies to deliver high-performing solutions across platforms.",
//       "We implement advanced security measures to safeguard user data and ensure compliance with industry standards.",
//       "Our solutions integrate seamlessly with your ecosystem, including CRM, e-commerce platforms, and other tools.",
//       "We perform rigorous testing to deliver apps that are bug-free, reliable, and optimized for performance.",
//       "We also provide ongoing support and updates to ensure your app remains relevant and functional.",
//     ],
//     img: code,
//     btnval: ["Let’s Build Your Custom App Today"],
//     titletop: "App Development Services",
//     titletopsub: "Build Seamless Mobile Experiences with Smarttly",
//   },
//   {
//     id: "web",
//     title: "Web Development",
//     desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
//     items: [
//       "We develop customized, mobile-responsive websites that look great on any device.",
//       "We use modern technologies like HTML5, CSS3, JavaScript, and WordPress to build scalable solutions.",
//       "We ensure faster load times by optimizing coding and design elements for peak performance. ",
//       "Our team integrates SEO best practices into your site’s structure to boost visibility and rankings.",
//       "Highlight your success with a visually engaging portfolio that showcases your best projects. ",
//     ],
//     img: Comp,
//     btnval: ["Explore our designs"],
//     titletop: "Website Development Services",
//     titletopsub: "Build a High-Performing Website That Engages and Converts",
//   },
// ];
// const processPoint = (point) => {
//   // Check if the point starts and ends with \n
//   if (point.startsWith("\n") && point.endsWith("\n")) {
//     return (
//       <strong>
//         {point
//           .trim()
//           .split("\n")
//           .map((line, index) => (
//             <React.Fragment key={index}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//       </strong>
//     );
//   }
//   // Handle general case for \n
//   return point.split("\n").map((line, index) => (
//     <React.Fragment key={index}>
//       {line}
//       <br />
//     </React.Fragment>
//   ));
// };

// // Process titles with \n and special formatting
// const processTitle = (title) => {
//   if (title.startsWith("\n") && title.endsWith("\n")) {
//     return (
//       <p
//         className={classes.SpecialTitle}
//         style={{ color: "var(--secondarycolor)" }}
//       >
//         {title.trim()}
//       </p>
//     );
//   }
//   return <p className={classes.Title}>{title}</p>;
// };

// // Process `why` content with bold (`{{b}}`) and line breaks (`\n`)
// const processWhyContent = (item) => {
//   return item.split("{{b}}").map((text, index) => {
//     if (index % 2 === 0) {
//       // Apply bold formatting for text inside `{{b}}`
//       return (
//         <strong key={index} style={{ fontSize: "1.3rem" }}>
//           {text.split("\n").map((line, lineIndex) => (
//             <React.Fragment key={lineIndex}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </strong>
//       );
//     }
//     // Handle regular text with \n
//     return text.split("\n").map((line, lineIndex) => (
//       <React.Fragment key={lineIndex}>
//         {line}
//         <br />
//       </React.Fragment>
//     ));
//   });
// };
// const Service = () => {
//   const [expandedCards, setExpandedCards] = useState({}); // Track expanded state per card


//   const toggleCard = (serviceId, cardTitle,index) => {
//     const cardKey = `${serviceId}-${cardTitle}-${index}`;
//     console.log(cardKey);
    
//     setExpandedCards((prev) => ({
//       ...prev,
//       [cardKey]: !prev[cardKey], // Only toggles the clicked card
//     }));
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedServiceTitle, setSelectedServiceTitle] = useState("");

//   const openModal = (serviceTitle) => {
//     setSelectedServiceTitle(serviceTitle);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div className={classes.Service}>
//       {serviceData.map((service) => (
//         <div className={classes.servicetop} key={service.id}>
//           <div
//             key={service.id}
//             className={classes.ServiceContent}
//             style={{
//               background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(${service.img}) 50% / cover no-repeat`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div>
//               <div className={classes.title}>{service.title}</div>
//               <div className={classes.desc}>{service.desc}</div>
//             </div>

//             <div>
//               <div className={classes.list}>
//                 <ul>
//                   {service.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//               <Link to={`/services/${service.title}`} className={classes.link}>
//                 <Button
//                   color="var(--backgroundcolor)"
//                   backgroundColor="var(--secondarycolor)"
//                   borderColor="var(--secondarycolor)"
//                   className={classes.buttonn}
//                 >
//                   Learn More <GoArrowRight />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//           {service.cards && service.cards.length > 0 ? (
//             <div className={classes.servicecard}>
//               {service.cards.map((card, index) => {
//                  const cardKey = `${service.id}-${card.title}-${index}`; // Unique key per card
//                 return (
//                   card.type === "price" && (
//                     <div key={cardKey} style={{ maxHeight: "min-content" }} className={classes.PriceCard}>
//                       <div className={classes.Header}>
//                         {processTitle(card.title)}
//                       </div>
//                       <div className={classes.PriceContent}>
//                         <div className={classes.Pricing}>
//                           <p className={classes.CurrentPrice}>
//                             <span className={classes.np}>{card.price}</span>{" "}
//                             {card.oldPrice && (
//                               <span className={classes.op}>
//                                 <s>{card.oldPrice}</s>
//                               </span>
//                             )}
//                           </p>
//                         </div>
//                         <div>
//                           {/* <Link to="/contact" className="link"> */}
//                             <button className={classes.btn} onClick={() => openModal(service.title)}>Get Started</button>
//                           {/* </Link> */}
//                         </div>

//                         <div className={classes.add} onClick={() => toggleCard(service.id, card.title,index)}>
//                           {/* {console.log(service.id+card.title+index)} */}
//                           <span
//                             style={{
//                               border: "1px solid var(--secondarycolor)",  
//                               padding: "0.5rem",
//                               borderRadius: "0.5rem",
//                               cursor: "pointer",
//                               display: "inline-flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                             }}
//                           >
//                             {expandedCards[cardKey] ? (
//                               <FaMinus color="var(--secondarycolor)" />
//                             ) : (
//                               <FaPlus color="var(--secondarycolor)" />
//                             )}
//                           </span>
//                         </div>

//                         {expandedCards[cardKey] && (
//                           <div className={classes.Points}>
//                             {card.points?.map((point, pointIndex) => (
//                               <div key={pointIndex} className={classes.Point}>
//                                 <div className={classes.TickIcon}>
//                                   <img src={tick} alt="tick" />
//                                 </div>
//                                 <p style={{ fontFamily: "Roboto" }}>
//                                   {processPoint(point)}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 );
//               })}
//             </div>
//           ) :
//            (
//             <div className={classes.ServiceContact}>
//               <div>
//                 <div>
//                   <p className={classes.ServiceContacttoptext}>
//                     Contact us to get {service.titletop}
//                   </p>
//                   <p className={classes.ServiceContactbottext}>
//                     {service.titletopsub}
//                   </p>
//                 </div>
//                 {/* <Link to="/contact" className="link"> */}
//                   <Button
//                     color="var(--backgroundcolor)"
//                     backgroundColor="var(--maintext)"
//                     borderColor="var(--maintext)"
//                     onClick={() => openModal(service.title)}
//                   >
//                     Contact Us <GoArrowRight />
//                   </Button>
//                 {/* </Link> */}
//               </div>
//               <div>
//                 <img src={servicecontent} alt="content" />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}       

// {isModalOpen && (
//         <Modal closeModal={closeModal} serviceTitle={selectedServiceTitle} />
//       )}
//     </div>
//   );
// };

// export default Service;
