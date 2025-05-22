import React from 'react';
import classes from './HomeBlogInfo.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const HomePageBlogInfo = ({ img, title, desc, name, designation, blogname, id, slug,time }) => {
  return (
    <div className={classes.HomePageBlogInfo}>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <div>
          <p></p>
          <p className={classes.title}>{title}</p>
          <p className={classes.desc}>{desc}</p>
        </div>
        <div>
          <div>
            <div>
              <img
                src={blogname}
                alt={name}
                height={56}
                width={56}
                style={{
                  objectFit: 'cover',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: "50%"
                }}
              />
            </div>
            <div className={classes.admin}>
              <p>{name}</p>
              <p>{designation}</p>
              
            </div>
          </div>
          <div>
            <Link to={`/blog/${slug}`} state={{ blogTitle: title }}>
             <button color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)" borderColor="var(--secondarycolor)"
                className={classes.navButton}
              >
                <GoArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogInfo;