import React from 'react'
import classes from './Similar.module.css';
import Button from '../../../ui/input/reuse/Button/button';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import HomePageBlogInfo from '../../../HomePage/HomePageBlog/HomePageBlogInfo';
import HomePageBlog from '../../../HomePage/HomePageBlog/HomePageBlog';
import SimilarCard from './SimilarCard';
const Similar = ({blogData}) => {
  return (
    <div className={classes.Similar}>
      <div className={classes.SimilarContent}>
        <div>
            <p>You may also like </p>
        </div> 
        <div>
            {blogData && blogData.length > 0 ? (
            blogData.map((blog, index) => (
              <SimilarCard key={index} blogData={blog} />
            ))
          ) : (
            <p>No similar blogs available.</p>
          )}
            </div>
      </div>
    </div>
  )
}

export default Similar
