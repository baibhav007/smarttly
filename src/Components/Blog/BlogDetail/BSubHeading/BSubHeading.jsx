// import React from 'react'
// import classes from './BSubHeading.module.css';
// const BSubHeading = ({subheading}) => {
//   return (
//     <div className={classes.BSubHeading}>
//       {subheading}
//     </div>
//   )
// }

// export default BSubHeading

import React from 'react';
import classes from './BSubHeading.module.css';

const BSubHeading = ({ subheading }) => {
  // Split the subheading by `\n` and map each segment to a new line
  const lines = subheading.split('\n');

  return (
    <div className={classes.BSubHeading}>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default BSubHeading;
