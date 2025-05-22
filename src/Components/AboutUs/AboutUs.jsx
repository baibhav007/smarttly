import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import AboutUsemployee from "./AboutUsemployee";
import Modal from "./Modal";
import classes from "./Modal.module.css";
import anamika from '../Assets/AboutUs/anamika-mam.png';
import tapaswini from "../Assets/AboutUs/tapaswini.png";
import shuvam from "../Assets/AboutUs/Shubhamm.png";
import saswati from "../Assets/AboutUs/saswati.png";
import shubham from "../Assets/AboutUs/shubham.png";
import partha from "../Assets/AboutUs/partha.png";
import shibu from "../Assets/AboutUs/shibu.png";
import digvijay from "../Assets/AboutUs/digvijay.png";
import swagatika from "../Assets/AboutUs/swagatika.png";
import arpita from "../Assets/AboutUs/arpita.png";
import himanshu from "../Assets/AboutUs/himansu.png";
import pratikshya from "../Assets/AboutUs/Pratikhya.png";
import kavi from "../Assets/AboutUs/kavi.png";
import vaibhav from '../Assets/AboutUs/baivab.png';
import ankit from "../Assets/AboutUs/ankit.png";
import suvendu from '../Assets/AboutUs/suvendu.png';
import sarmistha from '../Assets/AboutUs/Sarmistha.png';

const AboutUs = () => {
  const secondframedata = [
    {
      title: "Our",
      content:
        "To help businesses harness the power of digital innovation,\n driving growth and delivering exceptional customer\n experiences through cutting-edge strategies and technologies.",
    },
    {
      title: "Our Vision",
      content:
        "To be a trusted leader in digital marketing and development,\n shaping the future of businesses with creative solutions, data-\ndriven insights, and unmatched expertise.",
    },
  ];
  const aboutdata = [
    {
      name: "Shuvam",
      desc: "Digital Marketing Consultant",
      img: shuvam,
      descc:
        "Shuvam is a results-driven Digital Marketing Consultant at Smarttly. With a focus on creating tailored strategies, he helps businesses enhance their online presence and achieve measurable growth. His expertise spans a wide range of digital marketing techniques, making him an invaluable asset to the team.",
    },
    {
      name: "Tapaswini",
      desc: "Digital Marketing Manager",
      img: tapaswini,
      descc:"Tapaswini Sahoo is a Google-certified Digital Marketing Expert with over 10 years of experience in SEO, SEM, and team management. As Smarttly’s Digital Marketing Manager, she drives impactful strategies that deliver results, making her an integral part of the team’s success."
    },
    {
      name: "Saswati",
      desc: "Digital Marketing Analyst",
      img: saswati,
      descc:
        "Saswati brings over a year of experience in digital marketing to Smarttly. As a content generation lead, she specializes in crafting compelling content strategies, driving brand storytelling, and delivering impactful campaigns that resonate with audiences.",
    },
    {
      name: "Suvendu",
      desc: "Google Ads Specialist",
      img: suvendu,
      descc:
        "Suvendu is a Google Ads Specialist at Smarttly, expertly managing campaigns to maximize ROI and drive measurable results for clients. His analytical skills and strategic approach make him an essential part of the team.",
    },
    {
      name: "Sarmistha",
      desc: "E-Commerce Specialist",
      img: sarmistha,
      descc:
        "Sarmistha plays a key role at Smarttly as an e-commerce specialist, focusing on streamlining online retail operations and maximizing platform performance. Her innovative approach and deep understanding of e-commerce trends drive success for clients in the digital marketplace.",
    },
    {
      name: "Anamika",
      desc: "Customer Success Manager",
      img: anamika,
      descc:
        "Anamika leads Smarttly's HR and administrative efforts, ensuring a positive and productive workplace. With her strong background in people management and organizational strategy, she plays a key role in driving team success.",
    },
    {
      name: "Kavi",
      desc: "Project Manager and Team Lead",
      img: kavi,
      descc: "At Smarttly , Kavi serves as the Project Manager and Team Leader, driving project success through strategic planning and team coordination. Kavi's leadership ensures timely deliver and outstanding results.",
    },
    {
      name: "Swagatika",
      desc: "UI/UX Designer and Graphics Designer",
      img: swagatika,
      descc:
        "Swagatika is a seasoned UI/UX Designer and Graphics Designer at Smarttly. With certifications from Microsoft and hands-on experience at companies which brings her a wealth of knowledge and creativity to her role.",
    },
    {
      name: "Shubham",
      desc: "UI/UX Designer",
      img: shubham,
      descc:
        "Shubham is a skilled UI/UX Designer and Frontend Developer with a strong focus on creating user-centric, visually engaging solutions. Her blend of technical expertise and design sensibility ensures exceptional results in every project she undertakes.",
    },
    {
      name: "Partha",
      desc: "Full-Stack Developer",
      img: partha,
      descc:
        "Partha is an Associate Developer at Smarttly, specializing in frontend development. With his expertise in creating intuitive and visually appealing interfaces, Partha ensures a seamless user experience across all projects.",
    },
    {
      name: "Himanshu",
      desc: "Backend Developer",
      img: himanshu,
      descc:"Himanshu Sekhar is a proficient Backend Developer at Smarttly, dedicated to building robust and scalable systems. His technical expertise and problem-solving abilities ensure seamless functionality and performance across projects."
    },
    {
      name: "Shibu",
      desc: "Associate Developer",
      img: shibu,
      descc:
        "Shibu Ballav is a versatile Associate Developer at Smarttly, combining his skills in scripting, automation, and testing to deliver efficient and reliable solutions. With a focus on optimizing workflows and ensuring software quality, He plays a crucial role in driving project success and maintaining high standards.",
    },
    {
      name: "Pratikshya",
      desc: "Full-Stack Developer",
      img: pratikshya,
      descc:
        "Pratikhya is a talented Full-Stack Developer at Smarttly, adept at creating dynamic and seamless web applications. With expertise across both front-end and back-end technologies, she ensures robust and efficient solutions that meet client needs. Pratikhya’s dedication to excellence makes her a key contributor to the team’s success.",
    },
    {
      name: "Digvijay",
      desc: "Back-end Developer",
      img: digvijay,
      descc: "Digvijay is a backend specialist at Smarttly, focused on building efficient and scalable systems. His detail-oriented approach ensures the seamless functionality of the company’s key projects.",
    },
    
    {
      name: "Arpita",
      desc: "Associate Developer",
      img: arpita,
      descc:
        "Arpita is a skilled Associate Developer with years of experience in Java full-stack development. Specializing in Spring Boot and React, she delivers innovative, user-friendly solutions that power Smarttly’s success.",
    },
    {
      name: "Vaibhav",
      desc: "Full-Stack Developer",
      img: vaibhav,
      descc:
        "Vaibhav is a versatile Full-Stack Developer at Smarttly, adept at crafting seamless and dynamic web solutions. With expertise across both front-end and back-end technologies, he delivers robust and user-focused applications that drive success.",
    },
    {
      name: "Ankit",
      desc: "Project Manager",
      img: ankit,
      descc:"As a Project Manager and Associate Developer at Smarttly, Ankit brings fresh energy and a growth-focused mindset to the team. A quick learner and strategic thinker, he’s dedicated to delivering impactful results in every project."
    }
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee); // Set the clicked employee's data
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };
  return (
    <div className={styles.aboutusframe}>
    <div className={styles.aboutus} id="meettheteam">
      <div className={styles.aboutustop}>
        <div className={styles.abouthead}>Meet The Team Behind Smarttly</div>
        <div className={styles.aboutdesc}>
          Our Mission is helping brands achieve their marketing goals with
          innovative, tailored solutions.
        </div>
      </div>
      <div className={styles.aboutteam}>
        {aboutdata.map((data, index) => (
          <AboutUsemployee
            key={index}
            img={data.img}
            name={data.name}
            desc={data.desc}
            onClick={() => handleEmployeeClick(data)}
          />
        ))}
      </div>
      {selectedEmployee && (
  <Modal onClose={closeModal}>
    <div
      className={classes.modalcontent}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <h1
        style={{
          color: "var(--maintext)",
        }}
      >
        Employee Details
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div>
          <img
            src={selectedEmployee.img}
            alt={selectedEmployee.name}
            className={classes.modalimg}
          />
        </div>
        <div>
          <h2
            style={{
              color: "var(--MainText, #212529)",
              fontFamily: "Montserrat",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "125%",
            }}
          >
            {selectedEmployee.name}
          </h2>
          <p
            style={{
              color: "var(--SecondaryText, #6C757D)",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {selectedEmployee.desc}
          </p>
        </div>
      </div>
      <div
        style={{
          color: "var(--MainText, #212529)",
          fontFamily: "Roboto",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "160%",
        }}
      >
        {selectedEmployee.descc || "Details not available for this employee."}
      </div>
    </div>
  </Modal>
)}
    </div>
    </div>
  );
};
export default AboutUs;
