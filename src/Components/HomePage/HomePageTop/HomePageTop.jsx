import React, { useState } from "react";
import classes from "./HomePageTop.module.css";
import Button from "../../ui/input/reuse/Button/button";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const HomePageTop = () => {
  const [formData, setFormData] = useState({
    form_name: "consultancy_form",
    name: "",
    phone: "",
    phone_country_code: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setResponseMessage("Name is required.");
      setTimeout(() => setResponseMessage(""), 2000);
      return;
    }
    const fullPhoneNumber = formData.phone_country_code + formData.phone;
    const phoneNumber = parsePhoneNumberFromString(fullPhoneNumber);

    if (!phoneNumber || !phoneNumber.isValid()) {
      setResponseMessage("Please enter a valid phone number.");
      setTimeout(() => setResponseMessage(""), 2000);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        formData
      );
      setFormData({
        form_name: "consultancy_form",
        name: "",
        phone: "",
        phone_country_code: "",
      });
      setShowModal(true);
      setTimeout(() => setShowModal(false), 8000);
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.HomePageTopFrame}>
      {showModal && <div className={classes.overlay}></div>}
      <div className={classes.HomePageTop}>
        <div>
          <div>
            <div>
              {/* <p color="var(--maintext)">
              <span className={classes.fulltop}>Grow Your Online Presence</span>
              <br />
              <span className={classes.full}>
                With SEO, SMO and PPC from the
              </span>
              <br />
              <span className={classes.full}>
                Best Digital Marketing Agency{" "}
                <span className={classes.highlightUSA}>in the USA</span>
              </span>
            </p> */}

              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <span className={classes.fulltop}>
                  Grow Your Online Presence
                </span>
                <span className={classes.full}>
                  With SEO, SMO and PPC from the
                </span>
                <span className={classes.full}>
                  Best Digital Marketing Agency{" "}
                  <span className={classes.highlightUSA}>in the USA</span>
                </span>
              </p>
            </div>

            <div className={classes.points}>
              <div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                    loading="lazy"
                    alt="Digital Marketing Agency in USA"
                  />
                </div>
                <div className={classes.pointdata}>
                 Helping businesses reach new heights with data-driven campaigns{" "}
                  <span className={classes.pointdataouter}>
                   
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                    loading="lazy"
                    alt="Digital Marketing Agency in USA"
                  />
                </div>
                <div className={classes.pointdataouter}>
               
                  <span className={classes.pointdata}>
                    Providing tailored SEO, PPC, social media, and content marketing
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                    loading="lazy"
                    alt="Digital Marketing Agency in USA"
                  />
                </div>
                <div className={classes.pointdataouter}>
                 
                  <span className={classes.pointdata}>Focusing on growth and maximizing ROI for our clients</span> 
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftick.jpg?alt=media&token=2ceda21d-7e32-4a7a-9c89-752d8c2a4a94"
                    loading="lazy"
                    alt="Digital Marketing Agency in USA"
                  />
                </div>
                <div className={classes.pointdataouter}>
                 
                  <span className={classes.pointdata}>
                    Designing result-driven digital marketing strategies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.homeform}>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  name="name"
                />
              </div>
              <div>
                <PhoneInput
                  className={classes.inputstyle}
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
                  inputClass={classes.formcontrolphone}
                  buttonClass={classes.btnclassphone}
                  dropdownClass={classes.formdropdown}
                  placeholder="Enter Contact Number"
                />
              </div>
              <div>
                <Button
                  color="var(--backgroundcolor)"
                  backgroundColor="var(--maintext)"
                  borderColor="var(--maintext)"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Get your free consultation
                </Button>
              </div>
            </form>
            {responseMessage && (
              <p className={classes.response}>{responseMessage}</p>
            )}
          </div>
        </div>
        <div className={classes.images}>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2F1st%20image.jpg?alt=media&token=64229ede-77e9-4bd7-8a7e-d17cf8a688ad"
              loading="lazy"
              className={classes.firstimg}
              alt="Digital Marketing Agency in USA"
              height={220}
              width={204}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2F2nd%20Image.jpg?alt=media&token=ecf14960-7ace-4b71-98a8-07c6b7add012"
              loading="lazy"
              className={classes.secondimg}
              alt="Digital Marketing Agency in USA"
              height={220}
              width={204}
            />
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2F3rd%20Image.jpg?alt=media&token=59729801-19a7-424a-b79d-a467160647e8"
            loading="lazy"
            className={classes.thirdimg}
            alt="Digital Marketing Agency in USA"
            height={182}
            width={440}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageTop;
