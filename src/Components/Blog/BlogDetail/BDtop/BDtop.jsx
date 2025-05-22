import React from "react";
import classes from "./BDtop.module.css";
// import Button from "../../../ui/input/reuse/Button/button";
import { GoArrowLeft } from "react-icons/go";
// import img from "../../../Assets/Blog/featuredblog.jpg";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
const BDtop = ({ blog }) => {

  const sanitizedDesc = DOMPurify.sanitize(blog.desc || "", {
    ALLOWED_TAGS: [
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "span",
      "br",
      "div",
      "a",
      "img",
    ],
    ALLOWED_ATTR: ["style", "href", "src", "alt", "id", "class", "dir"],
    ADD_ATTR: ["style"],
  });
  return (
    <div className={classes.BDtop}>
      <div>
        <Link to=".." className={classes.link}>
          <button
            style={{
              border: "none",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              gap:'0.5rem',
              color: "var(--backgroundcolor)",
              backgroundColor: "var(--secondarycolor)",
              cursor: "pointer",
              fontSize: "1rem",
              border: "1px solid var(--secondarycolor)",
              borderRadius: "3rem",
              padding: "1rem",
            }}
          >
            <GoArrowLeft /> Back
          </button>
        </Link>
        <div>
          <p className={classes.title}>{blog.title || "Untitled Blog"}</p>
          {sanitizedDesc ? (
            <div
              className={classes.desc}
              dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
            />
          ) : (
            <p className={classes.desc}>No description available.</p>
          )}
        </div>
      </div>
      <img src={blog.img} alt="img" />
      <div className={classes.intro}>
          <img src={blog.blogname} alt="img" height={60} width={60} style={{borderRadius:"50%",objectFit:'cover',backgroundPosition:'center',backgroundSize:'cover'}}/>
        <div>
          <div className={classes.adminname}>{blog.author_name}</div>
          <div className={classes.admindesc}>{blog.author_description}</div>
          <div className={classes.time}>{blog.time}</div>
        </div>
      </div>
    </div>
  );
};

export default BDtop;