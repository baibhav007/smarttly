import { Link, useParams } from "react-router-dom";
import ServicePlanTop from "../Components/Services/ServicePlanTop/ServicePlanTop";
import ServiceBenefits from "../Components/Services/ServiceBenefits/ServiceBenefits";
import ServicePlanDetail from "../Components/Services/ServicePlanDetail/ServicePlanDetail";
import ServicePlanBottom from "../Components/Services/ServicePlanBottom/ServicePlanBottom";
import ServiceContact from "../Components/Services/ServiceContact/ServiceContact";
import ServiceFeature from "../Components/Services/ServiceFeature/ServiceFeature";
import { Helmet } from "react-helmet-async";
import MobileCardLayout from "../Components/Services/MobileCard/MobileCardLayout";
import ServiceFeatureMobile from '../Components/Services/ServiceFeatureMobile/ServiceFeatureMobile';

const serviceData = [
  {
    title: "SEO",
    metaTitle:'Best SEO Company USA - Boost Rankings & Drive Traffic',
    metaDescription:'Boost your online presence with Smarttly’s expert SEO services. Increase traffic, rankings, and conversions with customized strategies tailored for you.,best SEO company USA',
    titletag:
      "Maximize your online visibility with targeted keyword strategies, localized optimizations, technical excellence, and continuous performance monitoring tailored to your audience.",
    titlecontent: [
      "Comprehensive Keyword Research",
      "Localized On-Page SEO Optimization",
      "Technical SEO Enhancements",
      "Strategic Backlink Building",
      "Ongoing Monitoring and Optimization",
      "Rich Snippet Implementation",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fplan.png?alt=media&token=0c8e0c57-3bf9-4821-8361-e78f1cc8416e",
    titledesc: [
      "We analyze North America-specific search trends to identify high-value keywords that align with your business goals. By targeting the right terms, we connect you with audiences actively seeking your services.",
      "From optimizing meta descriptions and title tags to enhancing user engagement, we ensure your website appeals to both search engines and North American users, delivering an exceptional browsing experience.",
      "We address performance issues like page speed, mobile responsiveness, and crawl errors. Our focus on technical excellence ensures your website ranks higher and provides seamless access across devices.",
      "Our team builds your website's authority by securing links from trusted North American sources, boosting your credibility and driving valuable referral traffic.",
      "SEO is an ever-changing field. We continuously track rankings, analyze visitor behavior, and refine strategies to keep your site competitive amidst search engine algorithm updates.",
      "We enhance your search visibility by structuring data for featured snippets and quick answers.",
    ],
    titletop: "Best SEO Services",
    titletopsub: "How Smarttly Optimizes Your Website for Success?",
    titletopdesc:
      "In North America’s competitive digital landscape, securing top search engine rankings is essential for business growth. Smarttly offers tailored SEO services designed to maximize your website’s potential, attract high-quality organic traffic, and establish your brand as a leader in your industry.\nTransform your website into a powerful tool for driving organic traffic and visibility in North America. Partner with Smarttly for innovative SEO solutions that make a measurable impact on your success.",
    titlebottom: "Why Choose Smarttly as your North America SEO Partner?",
    titlebotdesc: [
      "Data-Driven Strategies - Proven techniques to deliver measurable results.",
      "Transparency - Regular updates and reports to keep you informed.",
      "Tailored Solutions - Customized SEO plans aligned with your unique business goals and regional needs.",
    ],
    cards: [
      {
        type: "price",
        title: "SEO\n Silver",
        tier: "Silver",
        price: "$199",
        oldPrice: "",
        description: "",
        genre:"starter",
        height: "81",
        points: [
          "\nUpto 10 to 15 Keywords (On-page & Off-page Optimization\n",
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
        title: "SEO\n Gold",
          tier: "Gold",
        price: "$399",
        oldPrice: "",
        description: "",
        genre:"starter",
        height: "81",
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
        title: "SEO\n Platinum",
        price: "$599",
        tier: "Platinum",
        oldPrice: "",
        description: "",
        genre:"starter",
        height: "81",
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
    ],
    plan: ["Starter Plan", "Advanced Plan"],
    text: [
      "Keywords",
      "Technical Website Analysis",
      "Duplicate Content Analysis",
      "Keyword Analysis",
      "Keyword Mapping to route pages",
      "Canonicalization Analysis",
      "Initial External Link Analysis, and Disavow",
      "Link Building & Link Redirect Audit",
      "Internal Linking Restructuring & Optimization",
      "Branding Guidelines Development",
      "Link Building Architecture Development",
      "Google Analytics Set Up & WMT",
      "Keyword Rich Content Writing",
      "Content Marketing (Blogging & Article Links)",
      "Title Tags & Meta Descriptions Tags Header Tags Optimized",
      "XML Sitemap Creation",
      "Local Citation/Classified",
      "Custom 404 Error Page Setup",
      "Reporting",
      "Press Release (Writing & Distribution)",
      "Google Map Listing Optimisation",
    ],
    plantwo: [],
    planone: ["SEO\n Silver", "SEO\n Gold", "SEO\n Platinum"],
    planpriceone: ["$199", "$399", "$599"],
    planpricetwo: [],
    planpriceonetime: ["/Month", "/Month", "/Month"],
    planpricetwotime: [],
    textValueOne: [
      [
        "10 to 15",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "false",
      ],
      [
        "16 to 25",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "false",
      ],
      [
        "26 to 35",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
      ],
    ],
    textValueTwo: [],
  },
  {
    title: "Social Media Optimization",
    metaTitle:'Social Media Experts - Boost Your Brand’s Online Presence',
    metaDescription:'Work with top social media experts in the USA to enhance your brand\'s online presence, engage your audience, and drive growth across platforms.,best social media marketing agency in USA,social media management Agency USA,social media marketing near me,social media marketing agency USA',
    titletag:
      "Customized social media solutions—from eye-catching profiles to data-driven campaigns—that increase engagement and create lasting connections.",
    titlecontent: [
      "Optimized Profiles That Stand Out",
      "Custom Content Calendars",
      "Viral-Worthy Campaigns",
      "Platform-Specific Strategies",
      "Data-Driven Improvements",
      "Community Management",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSMObg.png?alt=media&token=90b9be85-f56c-4af6-9658-db2213d61144",
    titledesc: [
      "We enhance your social media profiles to ensure they’re visually appealing, professionally crafted, and aligned with your brand voice.",
      "Consistency is key. Our tailored posting schedules ensure your audience always has fresh and engaging content",
      "We create shareable content and execute paid campaigns that maximize your reach and engagement across platforms.",
      "From Instagram Reels to LinkedIn articles, we leverage the unique strengths of each platform to boost your visibility.",
      "Our team monitors analytics to refine your social media strategy and ensure consistent growth.",
      "Foster meaningful relationships by engaging directly with your audience through comments, messages, and live interactions.",
    ],
    titletop: "SMO Services",
    titletopsub: "Turn Social Media Into a Growth Engine for Your Business",
    titletopdesc:
      "A strong social media presence is vital in the digital world. Smarttly helps you use your platforms to engage audiences, grow your brand, and build lasting customer relationships.\nConnect with your audience like never before with Smarttly’s expert SMO services.",
    titlebottom: "Why Choose Smarttly for Social Media Optimization (SMO)?",
    titlebotdesc: [
      "Proven techniques to grow your followers and engagement.",
      "Strategies customized for each social platform.",
      "Transparent results and measurable success.",
    ],
    cards: [
      {
        type: "price",
        title: "SMO\n Silver\n ",
         tier: "Silver",
        price: "$99",
        oldPrice: "",
        description: "",
        genre:"starter",
        height: "73.5",
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
        title: "SMO\n Gold\n",
          tier: "Gold",
        price: "$199",
        oldPrice: "",
        height: "76",
        description: "",
        genre:"advanced",
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
        title: "SMO\n Platinum\n",
          tier: "Platinum",
        price: "$299",
        oldPrice: "",
        description: "",
        genre:"advanced",
        height: "76",
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
    ],
    plan: ["Basic Social Media Packages", "Premium Social Media Packages"],
    text: [
      "Posts per Month	",
      "Reels per Month",
      "Social Media Platforms",
      "Strategy	",
      "Content Creation	Reach",
      "Performance Tracking	",
      "Post Scheduling	",
      "In-depth Hashtag Research	",
      "Audience	Engagement",
      "Reporting Type",
      "Reporting Frequency",
    ],
    plantwo: [],
    planone: ["SMO\n Silver", "SMO\n Gold", "SMO\n Platinum"],
    planpricetwo: [],
    planpriceone: ["$99", "$199", "$299"],
    planpriceonetime: ["/Month", "/Month", "/Month"],
    planpricetwotime: [],
    textValueOne: [
      [
        "10	",
        "None",
        " 5	",
        " Platform-Specific	",
        " Non-Specific	",
        " Yes	",
        " Yes	",
        " Yes	",
        " Yes	",
        " Basic	",
        " Monthly	",
      ],
      [
        "5	",
        "None",
        "5	",
        "Customized	",
        "Optimal	",
        "Yes	",
        "Yes	",
        "Yes	",
        "Yes	",
        "In-depth with Analytics	",
        "Monthly",
      ],
      [
        "20	",
        "None",
        " 5	",
        " Customized	",
        " Optimal	",
        " Yes	",
        " Yes	",
        " Yes	",
        " Yes	",
        " Advanced with Insights	",
        " Weekly & Monthly",
      ],
    ],
    textValueTwo: [],
  },
  {
    title: "PPC Advertising",
    metaTitle:'PPC - Boost Your Brand’s Online Presence',
    metaDescription:'google ad management services USA,ppc agency near me',
    titletag:
      "Boost your conversions and lower costs with tailored PPC campaigns, real-time tracking, and strategic budget management.",
    titlecontent: [
      "ROI-Focused Google Ads",
      "Social Media Advertising",
      "A/B Testing for Better Performance",
      "Budget Optimization",
      "Real-Time Performance Tracking",
      "Conversion Rate Optimization (CRO)",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fppcbg.png?alt=media&token=227c82f1-0561-47fa-bd59-ee266e9393d1",
    titledesc: [
      "Reach your ideal customers with keyword-targeted ads designed to deliver the highest returns.",
      "We craft engaging ad campaigns for platforms like Facebook, Instagram, and LinkedIn to expand your reach and impact.",
      "Our team tests multiple ad variations to identify what works best, ensuring maximum results.",
      "Every dollar counts. We optimize your campaigns to lower costs and improve results without overspending.",
      "Stay informed with transparent reporting and insights into your campaign’s success",
      "We refine landing pages and ad creatives to ensure your campaigns generate maximum leads or sales.",
    ],
    titletop: "PPC Advertising Services",
    titletopsub:
      "Drive Quick, Measurable Results with Data-Driven PPC Campaigns",
    titletopdesc:
      "Smarttly helps to create focused PPC campaigns that maximize your budget, boost website traffic, and convert clicks into customers.Let Smarttly’s experts help you achieve faster, more impactful advertising results.",
    titlebottom: "Why Choose Smarttly for PPC Advertising?",
    titlebotdesc: [
      "Expert strategies - that deliver measurable ROI.",
      "Transparent management - of your ad budget.",
      "Tailored campaigns - aligned with your goals.",
    ],
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
          "\n1-2 campaigns \n",
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
          "\nUp to 3 campaigns \n",
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
          "\nUp to 5 campaigns \n",
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
    plan: ["\nGoogle Ads \n Meta Ads"],
    text: [
      "No of Campaigns	",
      "Keyword Research	",
      "Ad Variations	",
      "A/B Testing	",
      "Ad Extensions	",
      "Type of Tracking	",
      "Optimization Frequency",
      "Type of Targeting	",
      "Landing Page	Optimizations",
      "Reporting Type	",
      "Reporting Frequency	",
      "Dedicated Account Manager",
      "Targeting",
      "Pixel Setup",
    ],
    planone: ["PPC\n Silver", "PPC\n Gold", "PPC\n Platinum"],
    plantwo: [],
    planpriceone: ["$199", "$299", "$499"],
    planpricetwo: [],
    planpriceonetime: [
      "+15% Ad Spend/Month",
      "+15% Ad Spend/Month",
      "+15% Ad Spend/Month",
    ],
    planpricetwotime: [],
    textValueOne: [
      [
        "1 or 2	",
        "Basic	",
        "1 or 2	",
        "None	",
        "Basic	",
        "Basic	",
        "Monthly	",
        "Basic	",
        "None	",
        "Basic	",
        "Monthly	",
        "None	",
        "None",
        "None",
      ],
      [
        "Up to 3	",
        "Advanced	",
        "Multiple	",
        "Yes	",
        "Advanced	",
        "Advanced	",
        "Weekly	",
        "Advanced	",
        "Basic	",
        "In-depth with Analytics",
        "Monthly	",
        "None	",
        "None",
        "None",
      ],
      [
        "Up to 5	",
        "Comprehensive john	",
        "Multiple	",
        "Yes	",
        "Complete	",
        "Complete	",
        "Bi-weekly	",
        "Complete	",
        "Advanced	",
        "Advanced with Insights	",
        "Weekly & Monthly	",
        "Yes	",
        "None",
        "None",
      ],
    ],
    textValueTwo: [],
  },
  {
    title: "Content Creation",
    metaTitle:'Content Creation - Boost Your Brand’s Online Presence',
    metaDescription:'',
    titletag:
      "Creating content that speaks to your audience, from SEO blogs to compelling videos and social media posts, driving brand recognition and engagement.",
    titlecontent: [
      "SEO-Optimized Blog Posts",
      "Social Media Content",
      "Visual Content and Infographics",
      "Professional Video Content",
      "Consistent Delivery",
      "Localization Services",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fccbg.png?alt=media&token=0c24806a-c3f0-4b13-bff9-17100d2dfa89",
    titledesc: [
      "Your website is your digital storefront. We design visually stunning, user-friendly websites that showcase your brand’s personality and leave a lasting impression.",
      "We create scroll-stopping posts that spark conversations and drive shares across platforms like Instagram, Facebook, and LinkedIn.",
      "Our custom graphics and infographics simplify complex ideas and make your message more engaging and shareable.",
      "From product demos to storytelling videos, we produce high-quality visuals that leave a lasting impact on your audience.",
      "We plan, create, and deliver content on a consistent schedule to keep your audience engaged and your brand top of mind.",
      "Adapt your content for regional audiences, ensuring relevance and cultural alignment.",
    ],
    titletop: "Content Creation Services",
    titletopsub:
      "Captivate, Educate, and Inspire with Expertly Crafted Content",
    titletopdesc:
      "Great content does more than inform—it connects. At Smarttly, we create SEO-focused content that reflects your brand’s story, builds trust with your audience, and encourages engagement.\nCreate content that not only informs but also converts with Smarttly’s expertise.",
    titlebottom: "Why Choose Smarttly for Content Creation?",
    titlebotdesc: [
      "Expert creators - with an eye for storytelling.",
      "SEO-focused content to - boost your online presence.",
      "Tailored solutions - that reflect your brand voice.",
    ],
  },
  {
    title: "Mobile App Development",
    metaTitle:'Mobile App Development Company - Create Your App Today,Best Mobile App Development Company,mobile app development company near me',
    metaDescription:'Transform your ideas into reality with expert mobile app development services. Build custom apps for iOS & Android with top-notch solutions.',
    titletag:
      "Create meaningful connections with mobile apps designed to expand alongside your business.",
    titlecontent: [
      "Custom App Design and Development",
      "User-Focused Experience (UX/UI)",
      "Scalable and Future-Ready Solutions",
      "Integration with Existing Systems",
      "Rigorous Testing and Support",
      "Push Notification Strategies",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fappbg.png?alt=media&token=14bc26c9-0d16-41f1-9784-6980a2a26546",
    titledesc: [
      "From concept to launch, we craft mobile applications tailored to your business goals. Whether it’s an iOS, Android, or cross-platform app, we ensure it’s engaging, feature-rich, and aligned with your brand identity.",
      "We prioritize creating apps that are visually appealing and easy to use. Our UX/UI experts design interfaces that deliver seamless navigation and exceptional user satisfaction.",
      "Our apps are built to grow with your business. Using the latest technologies, we ensure your app remains functional, secure, and ready for future enhancements.",
      "Need your app to sync with your website, CRM, or other tools? We ensure seamless integration to create a unified digital experience.",
      "We conduct thorough testing to ensure your app is bug-free and performs flawlessly. Post-launch, our team provides ongoing support to maintain and enhance your app.",
      "Engage users effectively with personalized, timely push notifications that encourage action and retention.",
    ],
    titletop: "App Development Services",
    titletopsub: "Build Seamless Mobile Experiences with Smarttly",
    titletopdesc:
      "As mobile technology drives the digital world, having a tailored app is a must. Smarttly delivers intuitive, scalable mobile applications that bring your business closer to your audience.\nSmarttly helps businesses create powerful mobile apps that drive engagement, enhance user experience, and achieve business success.",
    titlebottom: "Why Choose Smarttly for Mobile App Development?",
    titlebotdesc: [
      "Expertise - in cutting-edge technologies.",
      "Tailored solutions - designed for your industry and audience.",
      "Transparent communication and agile development - processes for faster delivery.",
    ],
  },
  {
    title: "Web Development",
    metaTitle:'Top Web Development Company in the USA - Smart Solutions',
    metaDescription:'Expert web development services in the USA. Custom websites, e-commerce solutions, and responsive designs to enhance your online presence.,Web development company near me,Web development company USA,Best Web development Company,website development company in usa,wordpress development agency usa,web development services in usa',
    titletag:
      "From custom designs to mobile-first development, we build secure, fast, and SEO-optimized websites tailored to enhance your brand and grow your business.",
    titlecontent: [
      "Tailored Designs for Your Brand",
      "Mobile-First Development",
      "Cutting-Edge Technologies",
      "SEO-Optimized Architecture",
      "Speed and Performance Optimization",
      "Robust Security Measures",
    ],
    serviceimg:
      "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fwebbg.png?alt=media&token=81807bfe-3c96-4b8b-b757-b2f6de2439f4",
    titledesc: [
      "Your website is your digital storefront. We design visually stunning, user-friendly websites that showcase your brand’s personality and leave a lasting impression.",
      "With mobile users making up most of the online traffic, we prioritize creating responsive websites that deliver seamless experiences across all devices.",
      "Using advanced tools like HTML5, CSS3, JavaScript, and WordPress, we develop secure, scalable, and future-ready websites that grow with your business.",
      "We integrate SEO best practices directly into your website’s structure, giving you an edge in search engine rankings from when your site goes live.",
      "Fast-loading websites means better user experience and higher search rankings. We optimize every element to ensure your site performs flawlessly.",
      "We implement SSL certificates, data encryption, and secure payment gateways to safeguard your users’ information.",
    ],
    titletop: "Website Development Services",
    titletopsub: "Build a High-Performing Website That Engages and Converts",
    titletopdesc:
      "Smarttly transforms websites into powerful tools for growth by designing digital experiences that captivate and convert. Whether you need a refined corporate site or a vibrant e-commerce platform, our services align with your business needs.\nPartner with Smarttly to build a website that stands out and drives success.",
    titlebottom: "Why Choose Smarttly for Website Development?",
    titlebotdesc: [
      "Customized solutions - that align with your goals.",
      "A balance of stunning design - and functional excellence.",
      "Full support - from ideation to post-launch maintenance.",
    ],
  },
];

function ServiceDetailPage() {
  const { serviceName } = useParams();

  const service = serviceData.find((s) =>
    s.title.toLowerCase().includes(serviceName?.toLowerCase())
  );

  if (!service) {
    return (
      <div>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <p>
          <Link to="..">Back</Link>
        </p>
      </div>
    );
  }

  // Filter out cards with type: "plan" to prevent rendering PlanContent
  const filteredService = {
    ...service,
    cards: service.cards?.filter((card) => card.type !== "plan"),
  };

  return (
    <>
      <Helmet>
        <title>{filteredService?.metaTitle || "Smarttly"}</title>
        <meta
          name="description"
          content={filteredService?.metaDescription || "Smarttly Content Creation"}
        />
      </Helmet>
      <div style={{ backgroundColor: "#F8F9FA" }}>
        <ServicePlanTop service={filteredService} />
        <ServiceBenefits service={filteredService} />
        {(filteredService.title === "SEO" ||
          filteredService.title === "Social Media Optimization" ||
          filteredService.title === "PPC Advertising") && (
          <ServicePlanDetail service={filteredService} />
        )}
        {(filteredService.title === "SEO" ||
          filteredService.title === "Social Media Optimization" ||
          filteredService.title === "PPC Advertising") && (
          <ServiceFeature service={filteredService} />
        )}
        <ServicePlanBottom service={filteredService} />
        {(filteredService.title === "Web Development" ||
          filteredService.title === "Content Creation" ||
          filteredService.title === "Mobile App Development") && (
          <ServiceContact service={filteredService} />
        )}
      </div>
    </>
  );
}

export default ServiceDetailPage;