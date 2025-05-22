// // // import React from "react";
// // // import classes from "./BDsecond.module.css";
// // // import tick from '../../../Assets/HomePage/tick.jpg';
// // // const BDsecond = ({blog}) => {
// // //   return (
// // //     <div className={classes.BDsecond}>
// // //       <div className={classes.BDsecondcontent}>
// // //         <div>
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             width="56"
// // //             height="56"
// // //             viewBox="0 0 56 56"
// // //             fill="none"
// // //           >
// // //             <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
// // //           </svg>
// // //           <div>
// // //             <p>{blog.adminname}</p>
// // //             <p>{blog.admindesc}</p>
// // //           </div>
// // //         </div>
// // //         <div>
// // //             <p>{blog.subhead}</p>
// // //             <p>{blog.subheaddesc?.split("\n").map((line,index)=>
// // //             <span key={index}>
// // //             {line}
// // //             {index < blog.subheadonedesc?.split("\n").length-1 && <><br/><br/></>}
// // //             </span>
// // //             )}</p>
// // //             <p>{blog.subhead}</p>
// // //             <p>{blog.subheaddesc}</p>
// // //         <div className={classes.BDsecondcontentpoint}>
// // //               {blog.subheadpoint.map((point, index) => {
// // //               const [mainText, spanText] = point.includes("-") 
// // //                 ? point.split("-").map((str) => str.trim()) 
// // //                 : [point, null];
// // //               return (
// // //                 <div key={index}>
// // //                   <div>
// // //                     <img src={tick} alt="tick" />
// // //                   </div>
// // //                   <div className={classes.BDsecondcontentpointtext}>
// // //                     {mainText}
// // //                     {spanText && <span> {spanText}</span>}
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //         </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BDsecond;



// // // import React from "react";
// // // import classes from "./BDsecond.module.css";
// // // import tick from '../../../Assets/HomePage/tick.jpg';

// // // const BDsecond = ({ blog }) => {
// // //   return (
// // //     <div className={classes.BDsecond}>
// // //       <div className={classes.BDsecondcontent}>
// // //         {/* Admin Info */}
// // //         <div className={classes.adminInfo}>
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             width="56"
// // //             height="56"
// // //             viewBox="0 0 56 56"
// // //             fill="none"
// // //           >
// // //             <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
// // //           </svg>
// // //           <div>
// // //             <p>{blog.adminname}</p>
// // //             <p>{blog.admindesc}</p>
// // //           </div>
// // //         </div>

// // //         {/* Blog Content */}
// // //         <div className={classes.blogContent}>
// // //           {/* Subhead Rendering */}
// // //           {Array.isArray(blog.subhead) && (
// // //             <div>
// // //               <h2>Subheads</h2>
// // //               {blog.subhead.map((sub, index) => (
// // //                 <p key={index}>{sub}</p>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Subhead Description Rendering */}
// // //           {Array.isArray(blog.subheaddesc) && (
// // //             <div>
// // //               <h2>Descriptions</h2>
// // //               {blog.subheaddesc.map((desc, index) => (
// // //                 <p key={index}>
// // //                   {desc.split("\n").map((line, lineIndex) => (
// // //                     <span key={lineIndex}>
// // //                       {line}
// // //                       {lineIndex < desc.split("\n").length - 1 && <br />}
// // //                     </span>
// // //                   ))}
// // //                 </p>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Points Rendering */}
// // //           {Array.isArray(blog.subheadpoint) && (
// // //             <div className={classes.BDsecondcontentpoint}>
// // //               {blog.subheadpoint.map((point, index) => {
// // //                 const [mainText, spanText] = point.includes("-")
// // //                   ? point.split("-").map((str) => str.trim())
// // //                   : [point, null];
// // //                 return (
// // //                   <div key={index}>
// // //                     <div>
// // //                       <img src={tick} alt="tick" />
// // //                     </div>
// // //                     <div className={classes.BDsecondcontentpointtext}>
// // //                       {mainText}
// // //                       {spanText && <span> {spanText}</span>}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BDsecond;



// // import React from "react";
// // import classes from "./BDsecond.module.css";
// // import tick from '../../../Assets/HomePage/tick.jpg';

// // const BDsecond = ({ blog }) => {
// //   return (
// //     <div className={classes.BDsecond}>
// //       <div className={classes.BDsecondcontent}>
// //         {/* Admin Info */}
// //         <div className={classes.adminInfo}>
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             width="56"
// //             height="56"
// //             viewBox="0 0 56 56"
// //             fill="none"
// //           >
// //             <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
// //           </svg>
// //           <div>
// //             <p>{blog.adminname}</p>
// //             <p>{blog.admindesc}</p>
// //           </div>
// //         </div>

// //         {/* Blog Content */}
// //         <div className={classes.blogContent}>
// //           {/* Render Subhead with Corresponding Subheaddesc */}
// //           {Array.isArray(blog.subhead) && Array.isArray(blog.subheaddesc) && (
// //             <div>
// //               {/* {blog.subhead.map((sub, index) => (
// //                 <div key={index} className={classes.subheadSection}>
// //                   <h3>{sub}</h3>
// //                   <p>
// //                     {blog.subheaddesc[index]?.split("\n").map((line, lineIndex) => (
// //                       <span key={lineIndex}>
// //                         {line}
// //                         {lineIndex < blog.subheaddesc[index].split("\n").length - 1 && <br />}
// //                       </span>
// //                     ))}
// //                   </p>
// //                 </div>
// //               ))} */}
// //               {blog.subhead.map((sub, index) => {
// //   const description = blog.subheaddesc[index];

// //   return (
// //     <div key={index} className={classes.subheadSection}>
// //       {/* Subhead */}
// //       <h3 className={classes.sub}>{sub}</h3>

// //       {/* Corresponding Description */}
// //       <div>
// //         {Array.isArray(description) ? (
// //           // If description is a nested array, render as points
// //           <div>
// //             {description.map((point, pointIndex) => (
// //               <div key={pointIndex} className={classes.subpointss} style={{display:"flex",alignItems:"center",gap:"8px"}}><img src={tick} alt="tick" className={classes.subpointsstick}/><div>{point}</div></div>
// //             ))}
// //           </div>
// //         ) : (
// //           // If description is a plain string, split by newline and render
// //           description.split("\n").map((line, lineIndex) => (
// //             <p key={lineIndex} className={classes.subpoint}>{line}</p>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // })}

// //             </div>
// //           )}

// //           {/* Points Rendering (Optional Section) */}
// //           {Array.isArray(blog.subheadpoint) && (
// //             <div className={classes.BDsecondcontentpoint}>
// //               {blog.subheadpoint.map((point, index) => {
// //                 const [mainText, spanText] = point.includes("-")
// //                   ? point.split("-").map((str) => str.trim())
// //                   : [point, null];
// //                 return (
// //                   <div key={index}>
// //                     <div>
// //                       <img src={tick} alt="tick" />
// //                     </div>
// //                     <div className={classes.BDsecondcontentpointtext}>
// //                       {mainText}
// //                       {spanText && <span> {spanText}</span>}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BDsecond;


// import React from 'react'
// import classes from './BDsecond.module.css';
// const BDsecond = ({heading}) => {
//   return (
//     <div className={classes.BDsecond}>
//       {heading}
//     </div>
//   )
// }

// export default BDsecond
