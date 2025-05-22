import React, { useState } from "react";
import Tab from "../../ui/tab/Tab";
import Questions from "../questions/Questions";
import classes from "./faq.module.css";

export default function FAQ() {
  const [activeCategories, setActiveCategories] = useState(["All"]); 

  const categories = [
    "All",
    "SEO",
    "SMO",
    "PPC Advertising",
    "Content Creation",
    "Web Development",
    "App Development"
  ];

  const handleTabClick = (category) => {
    setActiveCategories((prevCategories) => {
      if (category === "All") {
        return ["All"]; 
      }

      if (prevCategories.includes(category)) {
        return prevCategories; 
      }

      return [category]; 
    });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Looking for answers? Our FAQ section covers the most common
            questions to help you better understand our services and how we can
            support your goals.
          </p>
        </div>
        <div className={classes.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`${
                activeCategories.includes(category) ? classes.active : classes.tab
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={classes.faq}>
          <Questions category={activeCategories[activeCategories.length - 1]} />
        </div>
      </div>
    </>
  );
}