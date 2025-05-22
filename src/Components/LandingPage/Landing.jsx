import React, { useState } from "react";
import classes from "./Landing.module.css";
import Button from "../ui/input/reuse/Button/button";
import { GoArrowRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Modal from "./Service/Modal";

// Mapping titletopsub to local image paths
const imageMap = {
  "Captivate, Educate, and Inspire with Expertly Crafted Content": "/images/WebDevelopment.png",
  "Build Seamless Mobile Experiences with Smarttly": "/images/Content.png",
  "Build a High-Performing Website That Engages and Converts": "/images/MobileDevelopment.png",
};

const planImageMap = {
  Google: "/images/google.png", // Path to local Google logo image
  Meta: "/images/Meta1.png", // Path to local Meta logo image
};

const serviceData = [
  {
    id: "seo",
    title: "SEO",
    desc: "Rank higher, grow faster, and reach your target audience with our data-driven SEO strategies. At Smarttly, we fine-tune your website to align with search engine algorithms, ensuring long-term visibility and success.",
    items: [],
    img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSEO.jpg?alt=media&token=659fdf41-aece-4c12-9c5d-461bf3ecc61c",
    btnval: ["Learn More"],
    cards: [
      {
        type: "plan",
        title: "Starter Plans",
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
        tier: "Silver",
        title: "SEO Silver",
        tc: "Silver",
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
        title: "SEO Gold",
        tier: "Gold",
        tc: "Gold",
        price: "$399",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "Upto 26 to 35 Keywords (On-page & Off-page Optimization)",
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
        title: "Advanced Plans",
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
        title: "SEO Platinum",
        tier: "Platinum",
        price: "$599",
        oldPrice: "",
        description: "",
        height: "80",
        points: [
          "Upto 36 to 55 Keywords (On-page & Off-page Optimization)",
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
    items: [],
    img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fcode.png?alt=media&token=0db6c1dd-faa1-4591-a72f-db209912845e",
    btnval: ["See our work"],
    cards: [
      {
        type: "plan",
        title: "Starter Plans",
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
        title: "SMO Silver",
        tier: "Silver",
        price: "$99",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "10 Posts per Month",
          "Up to 5 Social Media Platforms",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation",
          "Performance Tracking",
          "Post Scheduling",
          "In-depth Hashtag Research",
          "Audience Engagement",
          "Basic Monthly Report",
        ],
      },
      {
        type: "plan",
        title: "Advanced Plans",
        height: "78",
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
        title: "SMO Gold",
        tier: "Gold",
        price: "$199",
        oldPrice: "",
        height: "78",
        description: "",
        points: [
          "2 Reels/Shorts per Month",
          "10 Posts per Month",
          "Up to 5 Social Media Platforms",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation",
          "Performance Tracking",
          "Post Scheduling",
          "In-depth Hashtag Research",
          "Audience Engagement",
          "Basic Monthly Report",
        ],
      },
      {
        type: "price",
        title: "SMO Platinum",
        tier: "Platinum",
        price: "$299",
        oldPrice: "",
        description: "",
        height: "78",
        points: [
          "4 Reels/Shorts per Month",
          "15 Posts per Month",
          "Up to 5 Social Media Platforms",
          "Platform-Specific Strategy",
          "Brand Consistency",
          "Content Creation",
          "Performance Tracking",
          "Post Scheduling",
          "In-depth Hashtag Research",
          "Audience Engagement",
          "Basic Monthly Report",
          "Customized Social Media Strategy",
          "Brand Consistency & Visual Content",
          "Content Creation for Optimal Reach",
          "Trend Monitoring",
          "In-depth Analytics & Monthly Reporting",
        ],
      },
    ],
    plan: ["Basic Social Media Packages", "Premium Social Media Packages"],
    text: [
      "Posts per Month",
      "Reels per Month",
      "Social Platforms",
      "Strategy",
      "Content Creation",
      "Performance Tracking",
      "Post Scheduling",
      "In-depth Research",
      "Audience",
      "Reporting Type",
      "Reporting Frequency",
    ],
  },
  {
    id: "ppc",
    title: "PPC Advertising",
    desc: "Maximize your ROI with precision-targeted advertising. Our PPC campaigns ensure every dollar you spend works toward your goals—whether it's more clicks, conversions, or leads.",
    items: [],
    img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fppc.png?alt=media&token=16994ea2-69df-4e63-be9c-d4087ae45d22",
    btnval: ["See our social strategy"],
    cards: [
      {
        type: "plan",
        title: "Google Ads & Meta Ads",
        height: "60",
        content: {
          why: [
            "Entry-Level Campaigns{{b}}\n Focuses on small-scale Google Ads campaigns with basic targeting.\nIdeal for testing the effectiveness of PPC for your business.",
            "Budget-Friendly{{b}}\n A cost-efficient way to drive traffic and leads without overspending.",
            "Specific Goals{{b}}\n Targets a narrow audience, ensuring ROI on limited budgets.",
            "Best For{{b}}\n Startups, small retailers, or businesses exploring paid advertising for the first time.",
            "Larger Campaign Scope{{b}}\n Supports multi-platform campaigns (Google Ads, Meta Ads) with advanced targeting and bid management.\nIdeal for scaling ad reach.",
            "Data-Driven Optimization{{b}}\n Offers detailed analytics, A/B testing, and competitor benchmarking for maximum ROI.",
            "Increased Visibility{{b}}\n Helps maintain a strong presence in competitive markets.",
            "Best For{{b}}\n Established businesses, e-commerce platforms, or those aiming for aggressive lead generation.",
          ],
        },
      },
      {
        type: "price",
        title: "Google & Meta Silver",
        price: "$199+ 15% Ad Spend/Month",
        height: "60",
        tier: "PPC Silver",
        oldPrice: "",
        description: "",
        points: [
          "1-2 campaigns",
          "Basic keyword research",
          "1-2 Ad Variations with A/B Testing",
          "Basic Ad Extensions - Sitelinks, Callouts, etc",
          "Basic Tracking",
          "Monthly Optimization Frequency",
          "Basic targeting -Demographics & Device Targeting",
          "Basic Monthly Report",
          "1-2 campaigns",
          "Basic Targeting - Location, Age, Interests, etc",
          "1-2 Ad Variations (Static Images, Carousel Ads)",
          "Basic Ad Extensions - CTA Buttons, Links etc",
          "Basic Pixel Setup",
          "Monthly Optimization Frequency",
          "Basic Targeting - Location Targeting, Device Targeting etc",
          "Basic Monthly Report",
        ],
      },
      {
        type: "price",
        title: "Google & Meta Gold",
        tier: "PPC Gold",
        price: "$199+ 15% Ad Spend/Month",
        height: "60",
        oldPrice: "",
        description: "",
        points: [
          "Up to 3 campaigns",
          "Advanced Keyword Research & Refinement",
          "Multiple Ad Variations with A/B testing",
          "Basic Extensions + Structured Snippets, etc",
          "Advanced Tracking - Basic Tracking + Goals, Conversions, etc",
          "Weekly Optimization Frequency",
          "Advanced Targeting - Basic Targeting + Behavior Targeting, etc",
          "Basic Landing Page recommendations",
          "Detailed Monthly Report with insights",
          "Up to 3 campaigns",
          "Advanced Targeting - Basic Targeting + Custom & Lookalike Audiences etc",
          "Multiple Ad Variations with A/B testing (Static, Carousel, and Video Ads)",
          "Advanced Ad Extensions - Basic Extensions + Messenger buttons etc",
          "Advanced Pixel setup with event tracking",
          "Weekly Optimization Frequency",
          "Advanced Targeting - Basic Targeting + Behavior Targeting etc",
          "Detailed Monthly Report with insights",
        ],
      },
      {
        type: "price",
        title: "Google & Meta Platinum",
        tier: "PPC Platinum",
        price: "$499+ 15% Ad Spend/Month",
        height: "60",
        oldPrice: "",
        description: "",
        points: [
          "Up to 5 campaigns",
          "Comprehensive Keyword Research & Competitor Analysis",
          "Ad Copy Creation - Multiple Ad Variations with extensive A/B testing",
          "Complete Ad extensions (all available types)",
          "Complete Tracking - Advanced Tracking + Enhanced eCommerce, Remarketing, etc",
          "Bi-weekly Optimization Frequency",
          "Complete Targeting - Advance Targeting + Geo-targeting, Device Targeting, & audience segmentation, etc",
          "Advanced Landing Page recommendations for conversion",
          "Weekly and Monthly detailed Performance Reports",
          "Dedicated Account Manager",
          "Up to 5 campaigns",
          "Complete Targeting - Advanced Targeting + Retargeting, etc",
          "Multiple Ad Variations with extensive A/B testing (Static, Carousel, and Video Ads)",
          "Complete Ad Extensions - CTAs, Collection Ads, Facebook Shops, etc",
          "Advanced Pixel setup with custom events & retargeting",
          "Bi-weekly Optimization Frequency",
          "Hyper-targeting",
          "Weekly and Monthly detailed Performance Reports",
          "Dedicated Account Manager",
        ],
      },
    ],
  },
  {
    id: "cc",
    title: "Content Creation",
    desc: "Content is king, and we make it reign. Smarttly delivers compelling content that captivates audiences, builds trust, and drives engagement. Whether it’s blogs, videos, or graphics, we’ve got you covered.",
    items: [],
    img: "/images/content-creation.jpg",
    btnval: ["Maximize your ROI"],
    titletop: "Content Creation Services",
    titletopsub: "Captivate, Educate, and Inspire with Expertly Crafted Content",
  },
  {
    id: "app",
    title: "Mobile App Development",
    desc: "In an era dominated by mobile technology, having a tailored app is a must. Smarttly develops innovative, scalable solutions to help businesses strengthen connections and expand their reach.",
    items: [],
    img: "/images/app-development.jpg",
    btnval: ["Let’s Build Your Custom App Today"],
    titletop: "App Development Services",
    titletopsub: "Build Seamless Mobile Experiences with Smarttly",
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Your website is your digital storefront. We craft fast, responsive, and visually stunning websites tailored to your brand and goals. With Smarttly, your site becomes an essential tool for customer engagement and conversions.",
    items: [],
    img: "/images/web-development.jpg",
    btnval: ["Explore our designs"],
    titletop: "Website Development Services",
    titletopsub: "Build a High-Performing Website That Engages and Converts",
  },
];

const processPoint = (point) => {
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
  return point.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const Landing = () => {
  // Initialize expandedCards with all services set to true (expanded by default)
  const initialExpandedState = serviceData.reduce((acc, service) => {
    acc[service.id] = true; // Set each service to expanded by default
    return acc;
  }, {});

  const [expandedCards, setExpandedCards] = useState(initialExpandedState);

  const toggleCardExpansion = (serviceId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({
    title: "",
    tier: "",
    isTierDisabled: false,
  });

  const openModal = (serviceTitle, serviceTier = "", disableTier = false) => {
    setSelectedService({
      title: serviceTitle,
      tier: serviceTier,
      isTierDisabled: disableTier,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isSimplePrice = (price) => !price.includes("+") && !price.includes("/");

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
            </div>
          </div>
          {service.cards && service.cards.length > 0 ? (
            <div className={classes.con}>
              <div className={classes.servicecard}>
                {service.cards.map((card, index) => {
                  const cardKey = `${service.id}-${card.title}-${index}`;
                  const isExpanded = expandedCards[service.id];
                  if (card.type === "price") {
                    const isSimple = isSimplePrice(card.price);
                    const titleParts = card.title.split(" ");
                    const subPlanName = service.id === "ppc" ? titleParts.slice(3).join(" ") : card.title;

                    return (
                      <div
                        key={cardKey}
                        style={{ minHeight: "max-content" }}
                        className={classes.PriceCard}
                      >
                        <div className={classes.PriceContent}>
                          <div className={classes.Header}>
                            {service.id === "ppc" ? (
                              <>
                                <div className={classes.LogoContainer}>
                                  <img
                                    src={planImageMap.Google}
                                    alt="Google Logo"
                                    className={classes.MainPlanLogo}
                                    style={{ maxHeight: "40px", marginRight: "10px" }}
                                  />
                                  <span className={classes.PlanName}>&</span>
                                  <img
                                    src={planImageMap.Meta}
                                    alt="Meta Logo"
                                    className={classes.MainPlanLogo}
                                    style={{ maxHeight: "40px" }}
                                  />
                                </div>
                                <div className={classes.SubPlanTitle}>{subPlanName}</div>
                              </>
                            ) : (
                              <div className={classes.MainPlanTitle}>{card.title}</div>
                            )}
                          </div>
                          <div className={classes.PriceButtonWrapper}>
                            <div className={isSimple ? classes.Pricing : `${classes.Pricing} ${classes.singleLine}`}>
                              <p className={classes.np}>
                                {isSimple ? card.price : card.price.replace("+", "+")}
                              </p>
                              {card.oldPrice && (
                                <span className={classes.op}>
                                  <s>{card.oldPrice}</s>
                                </span>
                              )}
                            </div>
                            <button
                              className={classes.btn}
                              onClick={() =>
                                openModal(service.title, card.tier, false)
                              }
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                        {isExpanded && (
                          <div className={classes.Points}>
                            {card.points?.map((point, pointIndex) => (
                              <div key={pointIndex} className={classes.Point}>
                                <div className={classes.TickIcon}>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                                  />
                                </div>
                                <p className={classes.PointText}>
                                  {processPoint(point)}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <span
                className={classes.viewall}
                onClick={() => toggleCardExpansion(service.id)}
              >
                {expandedCards[service.id] ? (
                  <FaMinus color="white" fontSize="0.8rem" />
                ) : (
                  <FaPlus color="white" fontSize="0.8rem" />
                )}
              </span>
            </div>
          ) : (
            <div className={classes.ServiceContact}>
              <div>
                <div>
                  <p className={classes.ServiceContacttoptext}>
                    {service.titletop}
                  </p>
                  <p className={classes.ServiceContactbottext}>
                    {service.titletopsub}
                  </p>
                </div>
                <Button
                  color="var(--backgroundcolor)"
                  backgroundColor="var(--maintext)"
                  borderColor="var(--maintext)"
                  onClick={() => openModal(service.title, null, true)}
                >
                  Contact Us <GoArrowRight />
                </Button>
              </div>
              <div>
                <img
                  src={imageMap[service.titletopsub] || "/images/fallback.jpg"}
                  alt={service.titletopsub}
                />
              </div>
            </div>
          )}
        </div>
      ))}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          serviceTitle={selectedService.title}
          serviceTier={selectedService.tier}
          isTierDisabled={selectedService.isTierDisabled}
        />
      )}
    </div>
  );
};

export default Landing;