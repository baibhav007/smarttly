import Button from "../../ui/input/reuse/Button/button";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import classes from "./FeatureList.module.css";
import PlanCard from "./planCard/PlanCard";

export default function FeatureList() {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Feature Plan List</h1>
      </div>
      </div>
    </>
  );
}


// import React from 'react';
// import { Table } from 'react-bootstrap';

// const FeaturePlanList = () => {
//   const plans = [
//     { name: 'Starter Plan', features: ['Basic', 'Advanced', 'Booster'] },
//     { name: 'Advanced Plan', features: ['Silver', 'Gold', 'Platinum'] },
//   ];

//   const features = [
//     'SEO',
//     'Reporting and Analytics',
//     'Technical Website Analysis',
//     'Duplicate Content Analysis',
//     'Keyword Analysis',
//     'Keyword Mapping to Target Pages',
//     'Canonicalization Analysis',
//     'Initial External Link Analysis',
//     'Disavow',
//     'Link Redirect Audit',
//     'Internal Linking Restructuring',
//     'Branding Guidelines Development',
//   ];

//   const features1 =[
//     {
//       name:"User Insight",
//       smoBasic:"10",
//       smoAdvance:"15",
//       smoBooster:"20",
//       smoSilver :"10",
//       smoGold :"15",
//       smoPlatinum :"20"
//     }
//   ]
//   return (
//     <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
//       {/* Table Header */}
//       <div className="grid grid-cols-7 gap-4 bg-green-100 p-4 rounded-md font-semibold">
//         <div className="text-center">Feature</div>
//         <div className="text-center">SMO Basic</div>
//         <div className="text-center">SMO Advance</div>
//         <div className="text-center">SMO Booster</div>
//         <div className="text-center">SMO Silver</div>
//         <div className="text-center">SMO Gold</div>
//         <div className="text-center">SMO Platinum</div>
//       </div>

//       {/* Data Rows */}
//       {features1.map((feature, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-7 gap-4 p-4 border-b last:border-none bg-white hover:bg-gray-100 rounded-md mt-2"
//         >
//           <div className="text-center font-medium">{feature.name}</div>
//           <div className="text-center">{feature.smoBasic}</div>
//           <div className="text-center">{feature.smoAdvance}</div>
//           <div className="text-center">{feature.smoBooster}</div>
//           <div className="text-center">{feature.smoSilver}</div>
//           <div className="text-center">{feature.smoGold}</div>
//           <div className="text-center">{feature.smoPlatinum}</div>
//         </div>
//       ))}
//     </div>
//   );
  
//   // return (
//   //   <div className="container mx-auto">
//   //     <h2 className="text-center text-2xl font-semibold mb-4">Feature Plan List</h2>
//   //     <Table striped bordered hover>
//   //       <thead>
//   //         <tr>
//   //           <th>Feature</th>
//   //           {plans.map((plan) => (
//   //             <th key={plan.name} colSpan={plan.features.length}>
//   //               {plan.name}
//   //             </th>
//   //           ))}
//   //         </tr>
//   //       </thead>
//   //       <tbody>
//   //         {features.map((feature) => (
//   //           <tr key={feature}>
//   //             <td>{feature}</td>
//   //             {plans.map((plan) =>
//   //               plan.features.map((subPlan) => (
//   //                 <td key={`${plan.name}-${subPlan}`}>
//   //                   <div className="flex justify-center">
//   //                     {/* Replace with your actual logic for feature availability */}
//   //                     <svg
//   //                       xmlns="http://www.w3.org/2000/svg"
//   //                       width="16"
//   //                       height="16"
//   //                       fill="currentColor"
//   //                       className="bi bi-check"
//   //                       viewBox="0 0 16 16"
//   //                     >
//   //                       <path d="M10.97 4.95a.23.23 0 0 1 0 .42l-3.02 3.02 1.41 1.41L13 6.58l-4.99 4.99-1.41-1.41L10.97 8.37a.23.23 0 0 1 .42 0z" />
//   //                     </svg>
//   //                   </div>
//   //                 </td>
//   //               ))
//   //             )}
//   //           </tr>
//   //         ))}
//   //       </tbody>
//   //     </Table>
//   //   </div>
//   // );
// };

// export default FeaturePlanList;


