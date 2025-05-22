import React, { useState, useEffect } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Button from "../ui/input/reuse/Button/button";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { PopupWidget } from "react-calendly";


const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const [formData, setFormData] = useState({
    form_name: "footer_form",
    name: "",
    phone: "",
    email: "",
    phone_country_code: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    const phoneNumber = parsePhoneNumberFromString(
      formData.phone_country_code + formData.phone
    );
    if (!phoneNumber || !phoneNumber.isValid()) {
      errors.phone = "A valid phone number with country code is required.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "A valid email address is required.";
    }
    setTimeout(() => setFormErrors(""), 2000);

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        formData
      );
      // setResponseMessage(response.data.message || "");
      setFormData({
        form_name: "footer_form",
        name: "",
        phone: "",
        email: "",
        phone_country_code: "",
      });
      setShowModal(true);
      setTimeout(() => setShowModal(false), 6000);
      setFormErrors({});
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.footer}>
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
            {/* <div className={classes.modalthird}><Button color="var(--backgroundcolor)" backgroundColor="var(--maintext)" borderColor="var(--maintext)">OK</Button></div> */}
          </div>
        </div>
      )}
      <div className={classes.footertop}>
        <div className={classes.footertopcontentdata}>
          <div className={classes.footermap}>
            <div>
              <p className={classes.fgreen}>Headquarter:</p>
              <div className={classes.fpoint}>
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FUsa%20Flag.png?alt=media&token=015c40ed-a24f-4ac1-8628-11f2898d403f" alt="img" />
                <p className={classes.fpointtext}>
                  30 N Gould St Ste N Sheridan, WY 82801
                </p>
              </div>
            </div>
            <div>
              <p className={classes.fgreen}>Canada:</p>
              <div className={classes.fpoint}>
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FCanada.png?alt=media&token=deb6e4eb-4bb3-45f0-b27c-be5bd9d83c59" alt="img" />
                <p className={classes.fpointtext}>
                  19 Grand Trunk Crescent, Toronto M5J 3A3
                </p>
              </div>
            </div>
            <div>
              <p className={classes.fgreen}>Australlia:</p>
              <div className={classes.fpoint}>
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FAustralia.png?alt=media&token=95a78454-2c04-4698-8138-e9b777e51f8d" alt="img" />
                <p className={classes.fpointtext}>
                  {" "}
                  Parramatta NSW 2150, Australia
                </p>
              </div>
            </div>
            <div>
              <p className={classes.fgreen}>India:</p>
              <div className={classes.fpoint}>
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FIndia.png?alt=media&token=571cdfaa-5f8b-4bf3-a570-6efdb4f04935" alt="img" />
                <p className={classes.fpointtext}>
                  Nayapalli, Bhubaneswar, Odisha,
                   India, 751015
                </p>
              </div>
            </div>
          </div>
          <div className={classes.footerlinks}>
            <div>
              <ul
                className={`${classes.DigitalMarketingServices} ${classes.list}`}
              >
                <p>Digital Marketing Services</p>
                <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#seo" className="link">
                    SEO
                  </Link>
                </li>
                <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#smo" className="link">
                    SMO
                  </Link>
                </li>
              <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#ppc" className="link">
                    PPC Advertising
                  </Link>
                </li>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#cc" className="link">
                    Content Creation
                  </Link>
                </li>
                <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#app" className="link">
                    App Development
                  </Link>
                </li>
              <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/services#web" className="link">
                    Website Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className={`${classes.company} ${classes.list}`}>
                <p>Company</p>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/about#AboutUstop" className="link">
                    About Us
                  </Link>
                </li>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/contact#connecttop" className="link">
                    Contact Us
                  </Link>
                </li>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/#testimonials" className="link test">
                    Testimonials
                  </Link>
                </li>
                {/* <li>
                  <Link to="/about#meettheteam" className="link">
                    Meet the Team
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <ul className={`${classes.resources} ${classes.list}`}>
                <p>Resources</p>
               <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/casestudies#casestudytop" className="link">
                    Our Work
                  </Link>
                </li>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/blog#topBlog3" className="link">
                    Blogs
                  </Link>
                </li>
                  <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/TermsandCondition" className="link">
                    Terms and Condition
                  </Link>
                </li>
                <li style={{ fontFamily:"Inter", fontWeight:"400", fontSize:"16px" }}>
                  <Link to="/privacypolicy" className="link">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.footertopcontentform}>
            <p style={{marginBottom:"23px", fontFamily:"Inter", fontWeight:"500", fontSize:"18px"}}>Get a Quote</p>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="form_name" value="footer_form" />
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                className={classes.input}
              />
              {formErrors.name && (
                <p className={classes.error}>{formErrors.name}</p>
              )}
              {/* <input
                type="number"
                placeholder="Enter Contact Number"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                className={classes.input}
              /> */}
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
                  // required: true,
                }}
                enableSearch={true}
                searchPlaceholder="Search for a country"
                containerClass={classes.formcontrolclass}
                inputClass={classes.formcontrolphone}
                buttonClass={classes.btnclassphone}
                dropdownClass={classes.dropdownclassform}
                searchClass={classes.searchclassform}
                placeholder="Enter Contact Number"
              />
              {formErrors.phone && (
                <p className={classes.error}>{formErrors.phone}</p>
              )}
              <input
                type="mail"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className={classes.input}
              />
              {formErrors.email && (
                <p className={classes.error}>{formErrors.email}</p>
              )}
              {!isMobile && (
        <PopupWidget
          url="https://calendly.com/smarttly-sales/meeting-with-smarttly-team"
          rootElement={document.getElementById("root")}
          text="Schedule a Call"
          textColor="#ffffff"
          color="#34A852"
          
        />
      )}
              <Button
                color="white"
                backgroundColor="#34A852"
                
                
                borderColor="var(--secondarycolor)"
                className={classes.submit}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
            {responseMessage && (
              <p className={classes.response}>{responseMessage}</p>
            )}
          </div>
        </div>
        <div className={classes.footertopbrand}>
          {/* <ul>
            <li>
              <img
                src={one}
                alt="img"
                className={classes.collabone}
                // height={48}
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  borderRadius: "4px",
                }}
              />
            </li>
            <li>
              <img
                src={second}
                alt="img"
                className={classes.collabtwo}
                // height={48}
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  borderRadius: "4px",
                }}
              />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={third}
                alt="img"
                className={classes.collabthree}
                // height={68}
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              />
              </li>
              <li>
              <img
                src={fourth}
                alt="img"
                className={classes.collabfour}
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </li>
            <li></li>
          </ul> */}
        </div>
      </div>
      <div className={classes.footerbottom}>
        <div className={classes.logo}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fwhite.png?alt=media&token=e423a887-fa15-4ec1-a081-db8a7c2cb545"
            alt="logo"
            width={269}
            height={60}
            style={{
              color: "white",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className={classes.copywright}>© 2025 All Rights Reserved.</div>
        <div className={classes.social}>
          <ul>
            <li>
              <Link
                to="https://www.linkedin.com/company/smarttlysocial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLinkedIn.png?alt=media&token=20507d69-42d6-4332-8cc4-8ffbd6da57e8" alt="LinkedIn" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/smarttly.social/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ffacebook.png?alt=media&token=ff8db964-4f2f-4519-a40f-bf264e263d53" alt="facebook" target="_blank" />
              </Link>
            </li>
             <li>
              <Link
                to="https://www.instagram.com/smarttlysocial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FInstagram.png?alt=media&token=89501f3e-9c3e-4609-93da-70a7458fc5fd" alt="Instagram" />
              </Link>
            </li> 

            <li>
              <Link
                to="https://x.com/SmarttlySocial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FTwitter.png?alt=media&token=6508e932-2dc8-4554-a3fd-4ecdf590d0cf" alt="Twitter" />
              </Link>
            </li>
            {/* <li>
              <Link>
                <img src={tiktok} alt="tiktok" />
              </Link>
            </li> */}
            <li>
              <Link
                to="https://www.youtube.com/@Smarttly.Social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fyoutube.png?alt=media&token=d5bce697-00e9-41ae-8202-5a21a6e67669" alt="yt" />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.open(
                    "https://wa.me/16506055098?text=Hi%20there!%20I%27d%20like%20to%20learn%20more%20about%20your%20services.",
                    "_blank"
                  )
                }
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FWhatsapp.png?alt=media&token=cfbf5233-1034-4a70-8bc5-8e84f6ea5c80" alt="WhatsApp" />
              </Link>
            </li>
            <li>
              <Link
                to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@smarttly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FMail.png?alt=media&token=628c3dc9-55e4-4bcf-a2e8-9a1c0f43b5f3" alt="mail" />
              </Link>
            </li>
            {/* <li>
              <Link>
              <img src={wp} alt="wp"/>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
