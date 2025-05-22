// // import React from "react";
// // import classes from "./ServiceContent.module.css";
// // import Button from "../ui/input/reuse/Button/button";
// // import { Link } from "react-router-dom";
// // import { GoArrowRight } from "react-icons/go";


// // const ServiceContent = ({id, img, title, desc, items, btnvalue }) => {
// //   console.log(btnvalue);
// //   console.log(items);
  
// //   return (
// //     <div
// //       className={classes.ServiceContent}
// //       style={{
// //         background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(${img}) 50% / cover no-repeat`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //         objectFit:"cover",
// //       }}
// //     >
// //       <div>
// //       <img src="/images/Line 764.png" alt="Decorative line" className={classes.lineImage} />
// //       <div className={classes.title}>{title}</div>
// //         <div className={classes.desc}>{desc}</div>
// //       </div>

// //       <div>
// //         <div className={classes.list}>
// //           <ul>
// //             {items.map((item, i) => (
// //               <li key={i}>{item}</li>
// //             ))}
// //           </ul>
// //         </div>
// //         <Link to={`/services/${id}`} className={classes.link}>
// //             <Button
// //               color="var(--backgroundcolor)"
// //               backgroundColor="var(--secondarycolor)"
// //               borderColor="var(--secondarycolor)"
// //               className={classes.buttonn}
// //             >
// //               Learn More <GoArrowRight />
// //             </Button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceContent;

// import React from "react";
// import classes from "./ServiceContent.module.css";
// import Button from "../ui/input/reuse/Button/button";
// import { Link } from "react-router-dom";
// import { GoArrowRight } from "react-icons/go";

// const ServiceContent = ({ id, img, title, desc, items, btnvalue }) => {
//   console.log(btnvalue);
//   console.log(items);

//   return (
//     <div
//       className={classes.ServiceContent}
//       style={{
//         background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(${img}) 50% / cover no-repeat`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         objectFit: "cover",
//       }}
//     >
//       <div>
//         <div className={classes.titleContainer}>
//           <img src="/images/Line 764.png" alt="Decorative line" className={classes.lineImage} />
//           <span className={classes.title}>{title}</span>
//         </div>
//         <div className={classes.desc}>{desc}</div>
//       </div>

//       <div>
//         <div className={classes.list}>
//           <ul>
//             {items.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//         <Link to={`/services/${id}`} className={classes.link}>
//           <Button
//             color="var(--backgroundcolor)"
//             backgroundColor="var(--secondarycolor)"
//             borderColor="var(--secondarycolor)"
//             className={classes.buttonn}
//           >
//             Learn More <GoArrowRight />
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ServiceContent;

import React from "react";
import classes from "./ServiceContent.module.css";
import Button from "../ui/input/reuse/Button/button";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ServiceContent = ({ id, img, title, desc, items, btnvalue }) => {
  console.log(btnvalue);
  console.log(items);

  return (
    <div
      className={classes.ServiceContent}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(${img}) 50% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div>
        <div className={classes.titleContainer}>
          <img src="/images/Line 764.png" alt="Decorative line" className={classes.lineImage} />
          <span className={classes.title}>{title}</span>
        </div>
        <div className={classes.desc}>{desc}</div>
      </div>

      <div className={classes.listsContainer}>
        <div className={classes.list}>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <Link to={`/services/${id}`} className={classes.link}>
          <Button
            color="var(--backgroundcolor)"
            backgroundColor="var(--secondarycolor)"
            borderColor="var(--secondarycolor)"
            className={classes.buttonn}
          >
            {btnvalue || "Learn More"} <GoArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceContent;