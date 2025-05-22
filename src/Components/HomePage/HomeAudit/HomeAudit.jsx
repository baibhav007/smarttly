import React, { useState } from "react";
import classes from "./HomeAudit.module.css";
import Button from "../../ui/input/reuse/Button/button";
// import sample from "../../Assets/HomePage/Sample.jpg";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import modalimg from "../../Assets/Footer/modalimg.png";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { Worker, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const HomeAudit = () => {
  const pdfUrl="/sample print.pdf"

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    form_name: "audit_form",
    name: "",
    phone: "",
    email: "",
    web_url: "",
    phone_country_code: "",
    occasional_update: true,
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setIsSubmitting(true);

    const { name, phone, email, web_url, phone_country_code } = formData;

    // Validation
    if (!name.trim()) {
      setResponseMessage("Name is required.");
      setTimeout(() => setResponseMessage(""), 2000);
      setIsSubmitting(false);
      return;
    }
    const fullPhoneNumber = phone_country_code + phone;
    const phoneNumber = parsePhoneNumberFromString(fullPhoneNumber);

    if (!phoneNumber || !phoneNumber.isValid()) {
      setResponseMessage("Please enter a valid phone number.");
      setTimeout(() => setResponseMessage(""), 2000);
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setResponseMessage("Please enter a valid email address.");
      setTimeout(() => setResponseMessage(""), 2000);
      setIsSubmitting(false);
      return;
    }
    if (!web_url.trim()) {
      setResponseMessage("Website URL is required.");
      setTimeout(() => setResponseMessage(""), 2000);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        formData
      );
      // setResponseMessage(response.data.message || "");
      setFormData({
        form_name: "audit_form",
        name: "",
        phone: "",
        email: "",
        web_url: "",
        phone_country_code: "",
        occasional_update: true,
      });
      setTimeout(() => {
        setResponseMessage("");
      }, 1000);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 8000);
      // Reset form
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className={classes.HomeAuditFrame}>
      {showModal && <div className={classes.overlay}></div>}
      {showModal && (
        <div className={classes.modal}>
          <div>
            <div className={classes.modalfirst}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fmodalimg.png?alt=media&token=15c6589b-17dc-4402-8596-9e26b56dd85b"
                style={{ maxWidth: "110.088px", maxHeight: "100px" }}
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
      <div className={classes.HomeAudit}>
        <div>
          <div className={classes.audittext}>
            <p >Get your Free Website Audit Report!</p>
            <p>And start attracting quality traffic to your website</p>
          </div>
          <div className={classes.form}>
            <input type="hidden" name="form_name" value="audit_form" />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Website URL"
                  value={formData.web_url}
                  onChange={handleChange}
                  name="web_url"
                  className={classes.input}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className={classes.input}
                />
                <PhoneInput
                  country={"us"}
                  value={formData.phone_country_code + formData.phone}
                  onChange={(value, data) =>
                    handleInputChange(
                      "phone",
                      value.slice(data.dialCode.length)
                    ) ||
                    handleInputChange("phone_country_code", `+${data.dialCode}`)
                  }
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  enableSearch={true}
                  searchPlaceholder="Search for a country"
                  containerClass={classes.formcontrolclass}
                  inputClass={classes.formcontrolphone}
                  buttonClass={classes.btnclassphone}
                  dropdownClass={classes.dropdownclassform}
                  placeholder="Enter Contact Number"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className={classes.input}
                />
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="check"
                        id="check"
                        defaultChecked
                        disabled
                      />
                    </div>
                    <div className={classes.audittick}>
                      Yes, please scan the website and email the results.
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="occasional_update"
                        id="check2"
                        checked={formData.occasional_update}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={classes.audittick}>You may also send updates or Promotional emails.</div>
                  </div>
                </div>
                <Button
  color="var(--backgroundcolor)"
  backgroundColor="var(--secondarycolor)"
  borderColor="var(--secondarycolor)"
  fontFamily="Inter !important"
  fontWeight="500"
  fontSize="16px"
  lineHeight="100%"
  letterSpacing="0%"
  textAlign="center"
  type="submit"
  disabled={isSubmitting}
>
  Get My Free Report
</Button>
              </div>
            </form>
            {responseMessage && (
              <p className={classes.response}>{responseMessage}</p>
            )}
          </div>
        </div>
        <div>
          <div className={classes.auditimg}>
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSample.jpg?alt=media&token=3344519a-c265-43ab-8cae-15edee7cc224" alt="sample" />
            <div>
              <p
                 style={{
          color: "white",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "125%",
        }}>Expert Team</p>
              <p
               style={{
          color: "white",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "125%",
        }}>Ready to Create</p>
            </div>
          </div>
          <Button
            color="var(--backgroundcolor)"
            backgroundColor="var(--secondarycolor)"
            borderColor="var(--secondarycolor)"
            onClick={toggleModal}
          >
            See a Sample Report
          </Button>
        </div>
      </div>
      <div
        className={`${classes.modalOverlay} ${isModalOpen ? classes.open : ""}`}
      >
        <div
          className={`${classes.modall} ${
            isModalOpen ? classes.modalOpen : classes.modalClose
          }`}
        >
          <div className={classes.modalHeader}>
            <button onClick={toggleModal} className={classes.closeButton}>
              ×
            </button>
          </div>
          <div className={classes.modalBody}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">

            <Viewer fileUrl={pdfUrl}/>
          </Worker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAudit;
