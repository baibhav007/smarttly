import React, { useState,useEffect } from "react";
import classes from "./Modal.module.css";
import axios from "axios";
import Input from "../../ui/input/Input/Input";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal, serviceTitle,serviceTier,isTierDisabled }) => {
  const serviceOptions = [
    {
      value: "seo",
      label: "SEO",
      tiers: [ "Silver", "Gold", "Platinum"],
    },
    {
      value: "smo",
      label: "Social Media Optimization",
      tiers: [ "Silver", "Gold", "Platinum"],
    },
    {
      value: "ppc-advertising",
      label: "PPC Advertising",
      tiers: [
        "PPC Silver",
        "PPC Gold",
        "PPC Platinum",
      
      ],
    },
    { value: "content-creation", label: "Content Creation", tiers: [] },
    { value: "app-development", label: "Mobile App Development", tiers: [] },
    { value: "web-development", label: "Web Development", tiers: [] },
  ];
  const defaultService = serviceOptions.find(
    (service) => service.label === serviceTitle
  );
  

  const [responseMessage, setResponseMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    form_name: "landing_form",
    fullName: "",
    email: "",
    company: "",
    services:   defaultService ? defaultService.value : "",
    message: "",
    service_tier:serviceTier || "",
    isTierDisabled:isTierDisabled
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formValues.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "A valid email is required.";
    }
    if (!formValues.company.trim())
      errors.company = "Company Name is required.";
    if (!formValues.services.trim())
      errors.services = "Please select a service.";


    // if (!formValues.service_tier.trim())
    //   errors.service_tier = "Please select a Tier service.";

    if (!formValues.isTierDisabled && !formValues.service_tier.trim()) {
      errors.service_tier = "Please select a Tier service.";
    }

    if (!formValues.message.trim()) errors.message = "Message cannot be empty.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Map formValues to match the desired format
      const dataToSend = {
        form_name: formValues.form_name,
        name: formValues.fullName,
        email: formValues.email,
        company_name: formValues.company,
        service: formValues.services,
        message: formValues.message,
        service_tier: formValues.service_tier,
        isTierDisabled:false

      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        dataToSend
      );

      setResponseMessage(response.data.message || "");
      setFormValues({
        form_name: "landing_form",
        fullName: "",
        email: "",
        company: "",
        services: "",
        message: "",
        service_tier: "",
      });
      setTimeout(() => {
        setResponseMessage("");
      }, 1000);
      setShowModal(true); // Show modal
      setTimeout(() => setShowModal(false), 4000);
      navigate("/ThankYou");
      setFormErrors({});
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message ||
          "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormValues((prevValues) => ({
    //   ...prevValues,
    //   [name]: value,
    //   ...(name === "services"
    //     ? {
    //         service_tier: "", // Reset tier service
    //         isTierDisabled: [
    //           "content-creation",
    //           "web-development",
    //           "app-development",
    //         ].includes(value), // Disable tier for specific services
    //       }
    //     : {}),
        
    // }));
    const { name, value } = event.target;
    const isTierDisabled = [
        "content-creation",
        "web-development",
        "app-development",
    ].includes(value); // Check if tier should be disabled

    console.log("Selected Service:", value);
    console.log("isTierDisabled:", isTierDisabled); // Check if it updates correctly

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      ...(name === "services"
        ? {
            service_tier: "", // Reset tier service
            isTierDisabled: isTierDisabled, // Update tier disable state
          }
        : {}),
    }));
    

    
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };


  
  const navigate = useNavigate();

  return (
    <div className={classes.modaloverlay}>
      <div className={classes.modalcontent}>
        <button className={classes.closebtn} onClick={closeModal}>
          &times;
        </button>
        <h2>{serviceTitle}</h2> {/* Heading based on selected service */}
        {/* <h3>{serviceTier}</h3> */}
        <form className={classes.secCol} onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onChange={handleInputChange}
            error={formErrors.fullName}
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="Enter Your Email Address"
            value={formValues.email}
            onChange={handleInputChange}
            error={formErrors.email}
          />
          <Input
            label="Company"
            name="company"
            placeholder="Enter Company Name"
            value={formValues.company}
            onChange={handleInputChange}
            error={formErrors.company}
          />
          <Input
            label="Services"
            name="services"
            select
            placeholder="Select Services"
            value={formValues.services}
            onChange={handleInputChange}
            error={formErrors.services}
            
            options={serviceOptions.map((service) => ({
              value: service.value,
              label: service.label,
            }))}
          />
          {/* {(!isTierDisabled &&  */}
          <Input
            label="Service Tier"
            name="service_tier"
            select
            placeholder="Select Tier Service"
            value={formValues.service_tier}
            onChange={handleInputChange}
            error={formErrors.service_tier}
            disabled={formValues.isTierDisabled}
            options={
              serviceOptions
                .find((service) => service.value === formValues.services)
                ?.tiers.map((tier) => ({
                  value: tier.toLowerCase().replace(/\s+/g, "-").value,
                  label: tier,
                })) || []
                
            }
          />
         {/* )}  */}

          <Input
            label="Message"
            name="message"
            textarea
            placeholder="Enter Your Message"
            value={formValues.message}
            onChange={handleInputChange}
            error={formErrors.message}
          />
          <button className={classes.btn} disabled={isSubmitting}>
            {isSubmitting ? "Submit" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
