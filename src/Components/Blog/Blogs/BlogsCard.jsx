// import React from "react";
// import classes from "./BlogsCard.module.css";
// import { Link } from "react-router-dom";
// import Button from "../../ui/input/reuse/Button/button";
// import { GoArrowRight } from "react-icons/go";

// const BlogsCard = ({
//   img,
//   time,
//   title,
//   desc,
//   adminname,
//   admindesc,
//   adminimg,
//   admintime,
//   id,
//   slug
// }) => {
//   return (
//     <div className={classes.BlogCard}>
//       <div>
//         <img src={img} alt="img" style={{objectFit:'cover',backgroundPosition:'center',backgroundSize:'cover',borderRadius:'0.5rem'}}/>
//       </div>
//       <div>
//         <div>
//           <div className={classes.blogdatatop}>
//             <div className={classes.time}></div>
//             <div className={classes.title}>{title}</div>
//           </div>
//           <div className={classes.desc}>{desc}</div>
//         </div>
//         <div className={classes.admin}>
//             <div>
//             <img src={adminimg} alt="admin" height={56} width={56} />
//             <div className={classes.admindata}>
//               <p className={classes.adminname}>{adminname}</p>
//               <p className={classes.admindesc}>{admindesc}</p>
//               <p className={classes.admintime}>{admintime}</p>
//             </div>
//             </div>
//             <Link to={`/blog/${slug}`} className={classes.link}>
//               <Button
//                 color={"white"}
//                 backgroundColor={"#34A852"}
//                 borderColor={"#34A852"}
//                 className={classes.topblogarrow}
//               >Read More
//                 {/* <GoArrowRight /> */}
//               </Button>
//             </Link>
//           </div>
      
//       </div>
//     </div>
//   );
// };

// export default BlogsCard;


import React from 'react';
import classes from './BlogsCard.module.css';
import { Link } from 'react-router-dom';
import Button from '../../ui/input/reuse/Button/button';

const BlogsCard = ({
  img,
  admintime,
  title,
  desc,
  adminname,
  admindesc,
  adminimg,
  id,
  slug,
  blogTitle,
}) => {
  return (
    <div className={classes.BlogCard}>
      <div>
        <img
          src={img}
          alt={title}
          style={{
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </div>
      <div>
        <div>
          <div className={classes.blogdatatop}>
            <div className={classes.time}></div>
            <div className={classes.title}>{title}</div>
          </div>
          <div className={classes.desc}>{desc}</div>
        </div>
        <div className={classes.admin}>
          <div>
            <img src={adminimg} alt={adminname} height={58} width={58} style={{ borderRadius: '50%' }} />
            <div className={classes.admindata}>
              <p className={classes.adminname}>{adminname}</p>
              <p className={classes.admindesc}>{admindesc}</p>
              <p className={classes.admintime}>{admintime}</p>
            </div>
          </div>
          <Link to={`/blog/${slug}`} state={{ blogTitle }} className={classes.link}>
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
  );
};

export default BlogsCard;