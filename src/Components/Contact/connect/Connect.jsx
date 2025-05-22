

import React, { useState, useEffect } from "react";
import Input from "../../ui/input/Input/Input";
import axios from "axios";
import classes from "./connect.module.css";
import { useLocation } from "react-router-dom";
import Button from "../../ui/input/reuse/Button/button";

export default function Connect() {
  const location = useLocation();
  const [responseMessage, setResponseMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Get service and plan from query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get("service") || "";
  const initialPlan = queryParams.get("plan") || "";
console.log("initialService", initialPlan);
  // Combine service and plan for the services field without "Interested in"
  const initialMessage = initialPlan
    ? `${initialPlan}`
    : initialService;

  const [formValues, setFormValues] = useState({
    form_name: "contact_us_form",
    fullName: "",
    email: "",
    company: "",
    services: initialMessage, // Pre-fill with initialMessage (service - plan or service)
    message: "", // Keep blank, no pre-fill
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Validate form
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
    if (!formValues.message.trim()) errors.message = "Message cannot be empty.";
    setTimeout(() => setFormErrors({}), 2000);
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const dataToSend = {
        form_name: formValues.form_name,
        name: formValues.fullName,
        email: formValues.email,
        company_name: formValues.company,
        service: formValues.services,
        message: formValues.message,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        dataToSend
      );

      setFormValues({
        form_name: "contact_us_form",
        fullName: "",
        email: "",
        company: "",
        services: initialMessage, // Reset to initialMessage
        message: "", // Reset to blank
      });
      setTimeout(() => {
        setResponseMessage("");
      }, 1000);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 4000);
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

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <main className={classes.header}>
      {showModal && <div className={classes.overlay}></div>}
      {showModal && (
        <div className={classes.modal}>
          <div>
            <div className={classes.modalfirst}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fmodalimg.png?alt=media&token=15c6589b-17dc-4402-8596-9e26b56dd85b"
                style={{ width: "110.088px", height: "100px" }}
                alt="modal"
              />
            </div>
            <div className={classes.modalsecond}>
              <p>Successfully Submitted</p>
              <p>We will get in touch with you soon</p>
            </div>
          </div>
        </div>
      )}
      <div className={classes.firstCol} id="connecttop">
        <div className={classes.firstColItem}>
          <h1>Let's Connect</h1>
          <p className={classes.firstColItemDesc}>
            Fill Out the Form, and our team will reach out to discuss how we can
            help you grow!
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1677048312026!2d-106.95752532371998!3d44.797770771070894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x3542e0a22355480!2s30%20N%20Gould%20St%20Ste.%20N%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1734076513014!5m2!1sen!2sin"
          title="Sample Report"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={classes.map}
        ></iframe>
      </div>
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
          style={{fontFamily:"Inter",fontSize:"16px", fontweight: '500'}} 
          label="Services"
          name="services"
          select
          placeholder="Select Services"
          value={formValues.services}
          onChange={handleInputChange}
          error={formErrors.services}
          options={[
            { value: "seo", label: "SEO" },
            { value: "smo", label: "SMO" },
            { value: "ppc-advertising", label: "PPC Advertising" },
            { value: "content-creation", label: "Content Creation" },
            { value: "app-development", label: "App Development" },
            { value: "web-development", label: "Web Development" },
            ...(initialMessage ? [{ value: initialMessage, label: initialMessage }] : []),
          ]}
        />
        <Input
          label="Message"
          name="message"
          textarea
          placeholder="Enter Your Message"
          value={formValues.message}
          onChange={handleInputChange}
          error={formErrors.message}
        />
        <Button color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)" borderColor="var(--secondarycolor)"
                  disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </main>
  );
}