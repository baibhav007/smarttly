import React, { useState, useEffect } from "react";
import classes from "./que.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const faq = [
  {
    id: 1,
    genere: "SEO",
    que: "What is SEO, and how does Smarttly approach it?",
    ans: "Search engine optimization (SEO) is the practice of modifying your site to increase the number of visitors to it from search engines, and at the same time, raise the ranking of the site in the search engine results pages (SERPs). At Smarttly, we enhance the visibility of your company online through a combination of industry know-how, access to complex tools, and creativity as we make sure that it supports the depiction of your business and appeals to your target audience."
  },
  {
    id: 2,
    genere: "SEO",
    que: "Why is SEO important for my business?",
    ans: "With Smarttly’s bespoke SEO solutions, your business builds a stronger reputation and attracts more visitors, which ensures better engagement, conversions, and growth for the company in the long haul. SEO is vital for enhancing your visibility over the web simply as ease of access increases the credibility of your business."
  },
  {
    id: 3,
    genere: "SEO",
    que: "What are the main components of SEO?",
    ans: "On-Page SEO: Focused on increasing the relevance of a given website by improving the content and its keywords.Off-Page SEO: Creation of quality backlinks and usage of other websites to improve the domain authority. Technical SEO: The design of a website according to its architecture, speed, and user-friendliness according to the requirements of search engines.Local SEO: Increasing the online presence to entice people from a specific region."
  },
  {
    id: 4,
    genere: "SEO",
    que: "How does Smarttly conduct keyword research?",
    ans: "At Smarttly, keyword queries for your target audience are identified using Google Keyword Planner, Ahrefs, SEMrush, etc. We aim for keywords that are more likely to give us visibility with your target audience and are relevant to your business."
  },
  {
    id: 5,
    genere: "SEO",
    que: "What are backlinks, and how does Smarttly leverage them?",
    ans: "When a website that has some authority points to your site, it is considered a trust signal. Backlinks are important because they are the website´s trust certificate. Smarttly specializes in acquiring high-authority do-follow backlinks that improve your site and domain authority."
  },
  {
    id: 6,
    genere: "SEO",
    que: "How long does it take to see results with Smarttly’s SEO services?",
    ans: "SEO is a long-term investment. Achieving some of the improvements may take months, while the combined extensive techniques Smarttly employs will boost results significantly within 6-12 months based on the competition and your industry."
  },
  {
    id: 7,
    genere: "SEO",
    que: "Do I need ongoing SEO services with Smarttly?",
    ans: "SEO doesn’t have a final point. Changes in search algorithms and behavior will never cease to occur. To keep our established competitive edge, Smarttly makes sure to alter your strategy within the changes."
  },
  {
    id: 8,
    genere: "SEO",
    que: "How does Smarttly ensure my website is mobile-friendly?",
    ans: "Smarttly designs your site with fast load time, responsive design, and easy handling which gets you a good user experience and better rankings while keeping mobile-first indexing in mind."
  },
  {
    id: 9,
    genere: "SEO",
    que: "What role does content quality play in Smarttly’s SEO strategy?",
    ans: "Smarttly concentrates on the user intention and values giving engaging and informative high-quality content. Our professional team executes custom content strategies that create your industry authority while growing organic traffic."
  },
  {
    id: 10,
    genere: "SEO",
    que: "Can Smarttly’s SEO services impact my social media strategy?",
    ans: "Even though social media activity in no way directly relates to SEO ranking, Smarttly combines social media and search engine optimization to maximize the brand reach and gain traffic, quality backlinks, and growth."
  },
  {
    id: 11,
    genere: "SEO",
    que: "How does Smarttly measure the success of my SEO efforts?",
    ans: "Smarttly monitor important metrics such as organic traffic, keyword ranking and positions, bounce rate, and conversions with the help of Google Analytics and Search Console. Their reports, together with these insights, provide us with the assistance we need to focus on details that matter to improve our strategies."
  },
  {
    id: 12,
    genere: "SEO",
    que: "What sets Smarttly’s SEO services apart?",
    ans: "Smarttly merges analytics and creativity. Our dedicated team provides tangible results and a competitive advantage to ensure each component of your website, from content to technical SEO, is optimized."
  },
  {
    id: 13,
    genere: "SMO",
    que: "What is Social Media Optimization (SMO)?",
    ans: "Social Media Optimization involves enhancing your social media presence to drive engagement, increase brand visibility, and achieve marketing goals. Smarttly uses strategic content creation, audience targeting, and analytics to optimize your social media channels."
  },
  {
    id: 14,
    genere: "SMO",
    que: "What platforms does Smarttly optimize for SMO?",
    ans: "We optimize all major social media platforms, including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube, depending on your business's target audience and goals."
  },
  {
    id: 15,
    genere: "SMO",
    que: "How does Smarttly create an SMO strategy?",
    ans: "Our SMO strategies are tailored to your business needs. We analyze your target audience, competitors, and market trends to develop a content plan, posting schedule, and engagement tactics."
  },
  {
    id: 16,
    genere: "SMO",
    que: "What industries does Smarttly serve for SMO?",
    ans: "Smarttly works with a diverse range of industries, including retail, healthcare, education, technology, and more. We customize strategies to suit the specific needs of your industry."
  },
  {
    id: 17,
    genere: "SMO",
    que: "How does SMO benefit my business?",
    ans: "SMO improves your online presence, boosts website traffic, enhances brand credibility, and increases customer engagement, ultimately driving sales and conversions."
  },
  {
    id: 18,
    genere: "SMO",
    que: "Can Smarttly help with content creation for social media?",
    ans: "Yes, we offer end-to-end content creation services, including graphics, videos, captions, and hashtags, all designed to resonate with your audience and reflect your brand identity."
  },
  {
    id: 19,
    genere: "SMO",
    que: "Does Smarttly provide analytics for social media performance?",
    ans: "Absolutely. We track key performance indicators (KPIs) like reach, engagement, click-through rates, and conversions, providing detailed reports and insights for continuous improvement."
  },
  {
    id: 20,
    genere: "SMO",
    que: "How often does Smarttly post on my behalf?",
    ans: "Posting frequency is determined based on your goals and audience activity. We create a customized posting schedule to maximize engagement and visibility."
  },
  {
    id: 21,
    genere: "SMO",
    que: "Can Smarttly help manage paid social media campaigns?",
    ans: "Yes, we specialize in creating and managing paid social media campaigns, including ad design, audience targeting, and performance tracking to ensure the best ROI."
  },
  {
    id: 22,
    genere: "SMO",
    que: "What sets Smarttly’s SMO services apart?",
    ans: "Our expertise in audience analysis, data-driven strategies, and creative content creation ensures that your brand stands out and achieves measurable results on social media."
  },
  {
    id: 23,
    genere: "SMO",
    que: "Does Smarttly offer SMO for small businesses?",
    ans: "Yes, our services are scalable to suit businesses of all sizes. We provide affordable and effective SMO solutions for startups, small businesses, and large enterprises."
  },
  {
    id: 24,
    genere: "SMO",
    que: "How do I start with Smarttly’s SMO services?",
    ans: "You can get started by contacting us for a free consultation. We'll discuss your goals, evaluate your current social media presence, and recommend a strategy tailored to your needs."
  },
  {
    id: 25,
    genere: "PPC Advertising",
    que: "What is PPC Advertising?",
    ans: "PPC (Pay-Per-Click) Advertising is a digital marketing strategy where advertisers pay a fee each time their ad is clicked. It is an effective way to drive traffic and generate leads through platforms like Google Ads, Bing Ads, and social media."
  },
  {
    id: 26,
    genere: "PPC Advertising",
    que: "What PPC platforms does Smarttly manage?",
    ans: "Smarttly manages campaigns on platforms such as Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more. We tailor strategies based on your target audience and goals."
  },
  {
    id: 27,
    genere: "PPC Advertising",
    que: "How does PPC benefit my business?",
    ans: "PPC drives targeted traffic to your website, increases brand visibility, generates high-quality leads, and delivers measurable ROI. It is especially useful for businesses looking for quick results."
  },
  {
    id: 28,
    genere: "PPC Advertising",
    que: "What industries does Smarttly serve for PPC?",
    ans: "Smarttly provides PPC services for a variety of industries, including e-commerce, healthcare, education, finance, technology, and more. Our campaigns are customized to suit your specific business needs."
  },
  {
    id: 29,
    genere: "PPC Advertising",
    que: "How does Smarttly create a PPC campaign?",
    ans: "We begin with an in-depth consultation to understand your goals. Our team conducts keyword research, audience analysis, and competitive benchmarking to create optimized ad campaigns."
  },
  {
    id: 30,
    genere: "PPC Advertising",
    que: "Does Smarttly offer remarketing services?",
    ans: "Yes, we offer remarketing services to re-engage users who have previously visited your website or interacted with your ads, increasing the likelihood of conversions."
  },
  {
    id: 31,
    genere: "PPC Advertising",
    que: "How do you measure PPC performance?",
    ans: "We use analytics tools to track key metrics like click-through rate (CTR), cost-per-click (CPC), conversion rates, and ROI. Detailed performance reports are shared regularly with clients."
  },
  {
    id: 32,
    genere: "PPC Advertising",
    que: "How much should I spend on PPC advertising?",
    ans: "The budget for PPC campaigns depends on your business goals, industry, and competition. We provide guidance on budget allocation to ensure optimal results."
  },
  {
    id: 33,
    genere: "PPC Advertising",
    que: "Can Smarttly optimize my existing PPC campaigns?",
    ans: "Yes, we can review and optimize your existing PPC campaigns by improving ad copy, refining targeting, and adjusting bidding strategies to maximize performance."
  },
  {
    id: 34,
    genere: "PPC Advertising",
    que: "How long does it take to see results from PPC?",
    ans: "PPC delivers quick results compared to other marketing strategies. Depending on your industry and competition, you may start seeing significant traffic and conversions within a few days or weeks."
  },
  {
    id: 35,
    genere: "PPC Advertising",
    que: "What makes Smarttly's PPC services unique?",
    ans: "Our data-driven approach, creative ad copy, precise audience targeting, and continuous optimization ensure that your campaigns achieve the best possible ROI."
  },
  {
    id: 36,
    genere: "PPC Advertising",
    que: "How do I get started with Smarttly’s PPC services?",
    ans: "Contact us for a consultation. We’ll assess your needs, recommend the best PPC strategy for your business, and guide you through the setup process."
  },
  {
    id: 37,
    genere: "Content Creation",
    que: "What is content creation?",
    ans: "Content creation involves producing high-quality, engaging, and relevant materials such as blog posts, articles, social media content, videos, infographics, and more to connect with your target audience and achieve marketing goals."
  },
  {
    id: 38,
    genere: "Content Creation",
    que: "What types of content does Smarttly create?",
    ans: "Smarttly specializes in creating a variety of content, including: Blog posts and articlesSocial media posts and captionsInfographics and visual contentVideo scripts and productionsE-books and whitepapersWebsite content and landing pages"
  },
  {
    id: 39,
    genere: "Content Creation",
    que: "How does Smarttly tailor content for my business?",
    ans: "We begin with a thorough understanding of your business, industry, and target audience. Our content is customized to align with your brand voice and marketing objectives."
  },
  {
    id: 40,
    genere: "Content Creation",
    que: "What industries does Smarttly provide content creation services for?",
    ans: "We work with clients from diverse industries, including healthcare, retail, education, technology, real estate, and more, creating content that resonates with their specific audience."
  },
  {
    id: 41,
    genere: "Content Creation",
    que: "How does content creation benefit my business?",
    ans: "Quality content drives engagement, boosts brand visibility, enhances SEO rankings, builds trust with your audience, and supports lead generation and sales efforts."
  },
  {
    id: 42,
    genere: "Content Creation",
    que: "Does Smarttly handle SEO content?",
    ans: "Yes, our team specializes in creating SEO-optimized content by incorporating relevant keywords, meta descriptions, and formatting techniques to improve search engine visibility."
  },
  {
    id: 43,
    genere: "Content Creation",
    que: "Can Smarttly create content for social media platforms?",
    ans: "Absolutely. We create platform-specific content for social media channels like Facebook, Instagram, LinkedIn, and Twitter, ensuring it is engaging and shareable."
  },
  {
    id: 44,
    genere: "Content Creation",
    que: "How does Smarttly ensure content quality?",
    ans: "Our content goes through a rigorous quality assurance process, including thorough research, professional writing, editing, and proofreading to ensure accuracy, relevance, and high standards."
  },
  {
    id: 45,
    genere: "Content Creation",
    que: "Does Smarttly offer visual content creation?",
    ans: "Yes, we provide a range of visual content services, including infographics, illustrations, and video production, to complement your overall content strategy."
  },
  {
    id: 46,
    genere: "Content Creation",
    que: "Can Smarttly help with content strategy?",
    ans: "Yes, we offer comprehensive content strategy services, including planning, content calendars, and performance tracking to ensure your content aligns with your marketing goals."
  },
  {
    id: 47,
    genere: "Content Creation",
    que: "How often will Smarttly deliver content?",
    ans: "Delivery frequency depends on your requirements. We work with you to create a content calendar and provide consistent, timely content that supports your campaigns."
  },
  {
    id: 48,
    genere: "Content Creation",
    que: "How do I get started with Smarttly’s content creation services?",
    ans: "Contact us to discuss your content needs. We’ll provide a consultation, outline a content plan, and get started on producing materials tailored to your business goals."
  },
  {
    id: 49,
    genere: "App Development",
    que: "What is Mobile App Development?",
    ans: "Mobile App Development involves creating software applications designed to run on mobile devices such as smartphones and tablets. Smarttly specializes in building user-friendly and functional apps tailored to your business needs."
  },
  {
    id: 50,
    genere: "App Development",
    que: "What platforms does Smarttly develop mobile apps for?",
    ans: "We develop apps for both iOS and Android platforms, ensuring compatibility and seamless performance across devices."
  },
  {
    id: 51,
    genere: "App Development",
    que: "What types of apps does Smarttly build?",
    ans: "Smarttly creates a wide range of apps, including:E-commerce apps Social networking apps Business and productivity apps Healthcare and fitness apps Educational apps On-demand service apps"
  },
  {
    id: 52,
    genere: "App Development",
    que: "How does Smarttly ensure app quality?",
    ans: "We follow a rigorous development process that includes research, planning, UI/UX design, coding, testing, and deployment. Our apps are built to deliver exceptional performance, security, and user experience."
  },
  {
    id: 53,
    genere: "App Development",
    que: " Does Smarttly offer custom app development?",
    ans: "Yes, we provide custom app development services, tailoring every aspect of the app to your specific requirements and business goals."
  },
  {
    id: 54,
    genere: "App Development",
    que: "What technologies does Smarttly use for app development?",
    ans: "We use cutting-edge technologies and frameworks like Flutter, React Native, Swift, Kotlin, and Java to develop robust and scalable mobile applications."
  },
  {
    id: 55,
    genere: "App Development",
    que: "How long does it take to develop a mobile app with Smarttly?",
    ans: "The development timeline depends on the complexity and features of the app. After discussing your requirements, we provide a detailed project plan with estimated timelines."
  },
  {
    id: 56,
    genere: "App Development",
    que: "Does Smarttly handle app updates and maintenance?",
    ans: "Yes, we offer post-launch support and maintenance services to ensure your app remains up-to-date, secure, and fully functional."
  },
  {
    id: 57,
    genere: "App Development",
    que: "Can Smarttly integrate third-party services into my app?",
    ans: "Absolutely. We can integrate third-party APIs and services such as payment gateways, analytics tools, and social media platforms to enhance your app’s functionality."
  },
  {
    id: 58,
    genere: "App Development",
    que: "What industries does Smarttly serve for mobile app development?",
    ans: "We serve a variety of industries, including retail, healthcare, education, technology, real estate, and more, delivering tailored app solutions to meet specific industry needs."
  },
  {
    id: 59,
    genere: "App Development",
    que: "How much does it cost to develop a mobile app with Smarttly?",
    ans: "The cost varies based on the app’s complexity, features, and development time. We provide transparent pricing and detailed estimates after understanding your requirements."
  },
  {
    id: 60,
    genere: "App Development",
    que: "How do I get started with Smarttly’s mobile app development services?",
    ans: "Contact us for a consultation. We’ll discuss your app idea, provide expert advice, and guide you through the development process to bring your vision to life."
  },
  {
    id: 61,
    genere: "Web Development",
    que: "What web development services does Smarttly offer?",
    ans: "Smarttly provides comprehensive web development services, including custom website design, responsive web development, e-commerce solutions, content management systems (CMS) integration, and website maintenance."
  },
  {
    id: 62,
    genere: "Web Development",
    que: "How does Smarttly ensure the websites are SEO-friendly?",
    ans: "Our development team follows best practices to ensure that all websites are optimized for search engines. This includes clean coding, fast loading times, mobile responsiveness, and the integration of relevant keywords and meta tags."
  },
  {
    id: 63,
    genere: "Web Development",
    que: "Can Smarttly redesign my existing website?",
    ans: "Yes, we offer website redesign services to enhance the appearance, functionality, and performance of your existing site, ensuring it meets current web standards and aligns with your business goals."
  },
  {
    id: 64,
    genere: "Web Development",
    que: "Do you provide e-commerce website development?",
    ans: "Absolutely. We specialize in developing secure and user-friendly e-commerce platforms tailored to your business needs, complete with payment gateway integration, product management, and shopping cart functionality."
  },
  {
    id: 65,
    genere: "Web Development",
    que: "How long does it take to develop a website with Smarttly?",
    ans: "The timeline for website development varies depending on the project's complexity and specific requirements. After an initial consultation, we provide a detailed project plan with estimated timelines."
  },
  {
    id: 66,
    genere: "Web Development",
    que: "Will I be able to update my website content after it's built?",
    ans: "Yes, we develop websites with user-friendly content management systems (CMS) that allow you to easily update and manage your website content without needing technical expertise."
  },
  {
    id: 67,
    genere: "Web Development",
    que: "Does Smarttly offer website maintenance and support?",
    ans: "Yes, we provide ongoing website maintenance and support services to ensure your site remains up-to-date, secure, and fully functional."
  },
  {
    id: 68,
    genere: "Web Development",
    que: "How much does web development with Smarttly cost?",
    ans: "The cost of web development services varies based on the project's scope and specific requirements. We offer competitive pricing and provide detailed quotes after understanding your needs."
  },
  {
    id: 69,
    genere: "Web Development",
    que: "Can Smarttly integrate social media into my website?",
    ans: "Yes, we can integrate social media platforms into your website to enhance engagement and allow seamless sharing of your content across various channels."
  },
  {
    id: 70,
    genere: "Web Development",
    que: "What industries does Smarttly serve?",
    ans: "We have experience working with clients across various industries, including retail, healthcare, education, finance, and more, providing tailored web development solutions to meet diverse business needs."
  },
];
export default function Questions({ category }) {
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
    setOpenId(null); // Close any open FAQs when switching categories
  }, [category]);

  function toggleFaq(id) {
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  const filteredFaq = category === "All" ? faq : faq.filter((item) => item.genere === category);

  // Calculate the questions to display based on current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredFaq.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Calculate total pages
  const totalPages = Math.ceil(filteredFaq.length / questionsPerPage);

  // Handle page navigation
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setOpenId(null); // Close any open FAQs when changing pages
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setOpenId(null); // Close any open FAQs when changing pages
  };

  // Handle direct page selection
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOpenId(null); // Close any open FAQs when changing pages
  };

  return (
    <div className={classes.container}>
      {filteredFaq.length === 0 ? (
        <div className={classes.noFaqMessage}>No FAQs available for this category.</div>
      ) : (
        <>
          <div className={classes.faqsContainer}>
            {currentQuestions.map((item) => (
              <div key={item.id} className={classes.faqItem}>
                <div
                  className={`${classes.faq} ${openId === item.id ? classes.active : ""}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <p className={classes.para}>{item.que}</p>
                  <MdKeyboardArrowDown
                    style={{
                      fontSize: "1.5rem",
                      transform: openId === item.id ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {openId === item.id && (
                  <div className={classes.ansContainer}>
                    <p className={classes.ansPara}>{item.ans}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className={classes.pagination}>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`${classes.paginationBtn} ${classes.previousBtn} ${
                  currentPage === 1 ? classes.disabled : ""
                }`}
              >
                ← Previous
              </button>
              <div className={classes.pageNumbers}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <span
                    key={pageNumber}
                    className={`${classes.pageIndicator} ${
                      pageNumber === currentPage ? classes.activePage : ""
                    }`}
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {pageNumber}
                  </span>
                ))}
              </div>
              <span className={`${classes.singlePageIndicator} ${classes.activePage}`}>
                {currentPage}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`${classes.paginationBtn} ${currentPage === totalPages ? classes.disabled : ""}`}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}