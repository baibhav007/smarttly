import React from "react";
import classes from "./SimilarCard.module.css";
import Button from "../../../ui/input/reuse/Button/button";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const SimilarCard = ({ blogData }) => {
  return (
    <div className={classes.HomePageBlogInfo}>
      <div>
        <img
          src={blogData.img}
          alt="img"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius:"0.5rem"
          }}
        />
      </div>
      <div>
        <div>
          <p></p>
          <p>{blogData.title.slice(0, 48) + "..."}</p>
          <p>{blogData.content.slice(0, 173) + "..."}</p>
        </div>
        <div>
          <div>
            <div>
              <img
                src={blogData.blogname}
                alt="adminname"
                height={56}
                width={56}
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className={classes.admin}>
              <p>{blogData.author_name}</p>
              <p>{blogData.author_description}</p>
              <p>{blogData.time}</p>
            </div>
          </div>
          <div>
            <Link to={`/blog/${blogData?.id}`} className={classes.link}>
              <Button
                color={"white"}
                backgroundColor={"#34A852"}
                borderColor={"#34A852"}
                className={classes.similarblogbutton}
              >
                Read More
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
