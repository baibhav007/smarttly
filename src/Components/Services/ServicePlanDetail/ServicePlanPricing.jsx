import React, { useEffect, useState } from "react";
import classes from "./ServicePlanPricing.module.css";
import Modal from "../../LandingPage/Service/Modal";

const ServicePlanPricing = ({ service }) => {
  // Process individual points with \n
  const processPoint = (point) => {
    if (point.startsWith("\n") && point.endsWith("\n")) {
      return (
        <strong>
          {point
            .trim()
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index} style={{fontFamily:"Inter", fontSize:"18px",fontWeight:"500"}}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </strong>
      );
    }
    return point.split("\n").map((line, index) => (
      <React.Fragment key={index} style={{fontFamily:"Inter", fontSize:"18px",fontWeight:"500" ,lineHeight:"110%"}}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 768);

  // State for modal visibility and selected service/plan
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({
    title: "",
    tier: "",
    isTierDisabled: false,
  });

  // Function to open the modal and log the tier
  const openModal = (serviceTitle, serviceTier = "", disableTier = false) => {
    console.log("Selected Tier:", serviceTier); // Log the tier to the console
     console.log("service.title:", service.title);
    setSelectedService({
      title: serviceTitle,
      tier: serviceTier,
      isTierDisabled: disableTier,
    });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.ServicePlanPricingContainer}>
      {service.cards.map((card, index) => (
        <div
          key={index}
          className={classes.PriceCard}
        >
          <div className={classes.Header}>
            {/* Replace \n with a space to keep the title on one line */}
            {card.title.replace(/\n/g, " ")}
          </div>

          <div className={classes.PriceContent}>
            <div>
              <div className={classes.Pricing}>
                <p className={classes.CurrentPrice}>
                  <span className={classes.np}>{card.price}</span>{" "}
                  <span className={classes.op}>
                    <s>{card.oldPrice}</s>
                  </span>
                </p>
              </div>
              <div className={classes.btnContainer}>
                <button
                  className={classes.btn}
                  onClick={() => openModal(service.title, card.tier, false)}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className={classes.Description}>{card.description}</div>
            <div className={classes.Points}>
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className={classes.Point}>
                  <div className={classes.TickIcon}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                      alt="tick"
                      style={{ height: "1.25rem" }}
                    />
                  </div>
                  <p style={{ fontFamily: "Inter" }}>
                    {processPoint(point)}
                  </p>
                </div>
              ))}
            </div>
          </div>
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

export default ServicePlanPricing;