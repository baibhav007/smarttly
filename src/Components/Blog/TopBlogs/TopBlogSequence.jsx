import React from 'react';
import classes from './TopBlogSequence.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const TopBlogSequence = ({ img, admintime, title, desc, adminname, admindesc, adminimg, id, slug }) => {
  return (
    <div className={classes.TopBlogSequence}>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <div>
          <div>
            <p className={classes.time}></p>
            <p className={classes.title}>{title}</p>
          </div>
          <div className={classes.desc}>{desc}</div>
        </div>
        <div className={classes.admin}>
          <div>
            <div className={classes.adminimg}>
              <img src={adminimg} alt="" srcSet="" height={58} width={58} />
            </div>
            <div>
              <p className={classes.adminname}>{adminname}</p>
              <p className={classes.admindesc}>{admindesc}</p>
              <p className={classes.admintime}>{admintime}</p>
            </div>
          </div>
          <div className={classes['button-container']}>
            <Link to={`/blog/${slug}`}>
              <Button
                color={'white'}
                backgroundColor={'#34A852'}
                borderColor={'#34A852'}
                className={classes.topblogarrow}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlogSequence;