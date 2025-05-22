import React, { useState, useEffect } from "react";
import classes from "./HomeTestimonials.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";

const HomeTestimonials = () => {
  const testimonialsdata = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FNAST.png?alt=media&token=57ee50fd-ad69-454d-b233-69d9055ee563",
      adminame: "Team NAST",
      admincompany: "Transportation",
      desc: "My dear representatives of Smarttly, thank you very much for the great work that has been done with NAST or North America Shuttle Transfer. I highly recommend you for the work you have done with me. I congratulate all of you for doing a great job. Thank you again—greetings from the NAST team.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLocal%20Morocco%20Tours.png?alt=media&token=913fca4d-a0dc-4546-8709-8e95d829ffb8",
      adminame: "Simo Guide",
      admincompany: "Morocco Local Tours",
      desc: "I contacted this company regarding SEO for my website. They’re very professional, ready to answer all my questions, and have started working on my website. So, I am happy that I contacted this company. Thank you; you are the best.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLlanganuco%20Mountain%20Lodge.png?alt=media&token=039282be-39aa-42f2-8ace-0c53fa173d2d",
      adminame: "Charlie Good",
      admincompany: "Llanganuco Mountain Lodge",
      desc: "The team is doing a great job on my SEO, backlinks, web page renovation, multiple languages, Google My Business, and all sorts of other stuff I do not even understand. My Google ranking is going through the personally think that we will have a business relationship for decades. Thanks team, please keep up the good work.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FBluedrake.png?alt=media&token=370c5d18-0ca8-4aac-8e94-f960e74dcb61",
      adminame: "Suneil Nayak",
      admincompany: "Bluedrake",
      desc: "Amazing team and very professional. They are very cooperative and have nice insights.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FVia%20Capitale.png?alt=media&token=82fcfd1e-b1d1-426c-ae9d-a8b18c12921c",
      adminame: "Tere Nerys",
      admincompany: "Via Capitale",
      desc: "We are in Puerto Vallarta, Mexico, and we engaged the services of Smarttly for SEO and improving our website. We couldn’t be more pleased with their fast response and work.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FRegent%20Street%20Clinic%E2%84%A2.png?alt=media&token=e6465a5c-0025-426d-8c26-c3aa3b8673fb",
      adminame: "Bobby Ahmed",
      admincompany: "Regent Street Clinic",
      desc: "I would like to thank Smarttly for their outstanding work for our company. They are accessible, trustworthy, and honest, and they work diligently to fulfill their clients' requirements. I would give them 1000 stars if I could. Please use their services; they will be the best investment you will make for your business.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FBoat%20Lagoon%20Yachting.png?alt=media&token=a0f03740-50b8-4eb4-bb4e-6678223de8df",
      adminame: "Rico Stapel",
      admincompany: "Boat Lagoon Yachting",
      desc: "Excellent job, I am seeing improvement even in the first month.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FBQ%20Emporium.png?alt=media&token=0463dcc7-2767-4b6e-8c6c-37a5fe2e8575",
      adminame: "Bernard Quansah",
      admincompany: "BQ Emporium",
      desc: "This company and the project manager are very professional. I didn’t know much about what was going on except that I needed SEO done on my website. But Smarttly helped our company a lot.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll in mobile view
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsdata.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile, testimonialsdata.length]);

  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonialsdata.length / cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentIndex * cardsPerPage;
  const visibleTestimonials = testimonialsdata.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className={classes.HomeTestimonials}>
      <div className={classes.HomeTestimonialscontent}>
        <div className={classes.HomeTestimonialstext} id="testimonials">
          Our Clients Say
        </div>
        <div className={classes.HomeTestimonialscontentbottom}>
          {!isMobile && (
            <div className={classes.HomeTestimonialscontentbottombtn}>
              <button
                color="var(--backgroundcolor)"
                backgroundColor="var(--secondary, #34a852)"
                borderColor="var(--secondary, #34a852)"
                onClick={handlePrevious}
                disabled={totalPages <= 1}
                className={classes.navButton}
              >
                <GoArrowLeft />
              </button>
            </div>
          )}
          <div className={classes.TestimonialCardsContainer}>
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className={classes.TestimonialCardWrapper}>
                <div className={classes.TestimonialCard}>
                  <FaQuoteLeft className={classes.QuoteIcon} />
                  <div className={classes.TestimonialText}>
                    {testimonial.desc.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                  </div>
                  <div className={classes.ClientInfo}>
                    <img
                      src={testimonial.img}
                      alt={`${testimonial.admincompany} logo`}
                      className={classes.ClientImage}
                    />
                    <div className={classes.ClientDetails}>
                      <p className={classes.ClientName}>{testimonial.adminame}</p>
                      <p className={classes.ClientCompany}>{testimonial.admincompany}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!isMobile && (
            <div className={classes.HomeTestimonialscontentbottombtn}>
              <button
                color="var(--backgroundcolor)"
                backgroundColor="var(--secondary, #34a852)"
                borderColor="var(--secondary, #34a852)"
                onClick={handleNext}
                disabled={totalPages <= 1}
                className={classes.navButton}
              >
                <GoArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;