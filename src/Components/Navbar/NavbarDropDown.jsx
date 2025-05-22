import React from 'react';
import classes from './NavbarDropDown.module.css';
import { Link } from 'react-router-dom';

const NavbarDropDown = ({ onClose }) => {
  const data = {
    id:["SEO","Social Media Optimization","PPC Advertising","Content Creation","Mobile App Development","Web Development"],
    img: ["https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSearch.png?alt=media&token=4f9ba85f-b045-47f7-af94-cfab76185ae6", "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSucess.png?alt=media&token=b79055d7-aa3e-492c-86ce-787a53338ff8", "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Ftarget.png?alt=media&token=127862d6-fefc-4954-b3e4-ae6ba632e583", "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fmessage-text.png?alt=media&token=4b64ed5b-a165-4fb8-a333-1cc5973b6b71", "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FProduct.png?alt=media&token=910b7e98-6c06-4086-99d1-36f604806573", "https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Fmonitor.png?alt=media&token=fe37bb0b-86a7-4766-a524-dfc0aad8c5b7"],
    head: [
      "SEO",
      "SMO",
      "PPC Advertising",
      "Content Creation",
      "App Development",
      "Web Development"
    ],
    content: [
      "At Smarttly, we fine-tune your website ensuring long-term visibility and success.",
      "At Smarttly, we optimize your social media presence to boost engagement.",
      "Our PPC campaigns ensure every dollar you spend works toward your goals.",
      "Smarttly delivers compelling content that captivates audiences and builds trust.",
      "Smarttly develops innovative, scalable solutions to help expand their reach.",
      "With Smarttly, your site becomes an essential tool for customer engagement."
    ]
  };

  return (
    <div className={classes.NavbarDropDown}>
      {data.img.map((image, index) => (
        <Link to={`services/${data.id[index]}`}  className="link" key={index}
        onClick={onClose}>
          <div key={index} className={classes.DropdownItem}>
          <div className={classes.imgs}>
            <img src={image} alt={data.head[index]} loading="lazy" />
          </div>
          <div className={classes.text}>
            <p className={classes.head}>{data.head[index]}</p>
            <p className={classes.content}>{data.content[index]}</p>
          </div>
        </div></Link>
      ))}
    </div>
  );
};

export default NavbarDropDown;
