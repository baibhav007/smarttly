// import React, { useState, useEffect, useMemo } from "react";
// import classes from "./CaseStudylist.module.css";
// import Button from "../../ui/input/reuse/Button/button";
// import { VscSettings } from "react-icons/vsc";
// import Dropdown from "../../ui/input/reuse/Dropdown/Dropdown";
// import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// const CaseStudyList = ({ caseStudiesData }) => {
//   const categories = [
//     { value: "SEO", label: "SEO" },
//     { value: "PPC", label: "PPC" },
//     { value: "Website Design", label: "Website Design" },
//     { value: "SMO", label: "SMO" },
//     { value: "Content Creation", label: "Content Creation" },
//   ];

//   const industries = [
//     { value: "Pharmaceutical", label: "Pharmaceutical" },
//     { value: "Beauty", label: "Beauty" },
//     { value: "Consumer Goods", label: "Consumer Goods" },
//     { value: "Food & Beverages", label: "Food & Beverages" },
//     { value: "Jewellry", label: "Jewellry" },
//     { value: "Motor Graphic", label: "Motor Graphic" },
//     { value: "Pet Consumer Goods", label: "Pet Consumer Goods" },
//     { value: "Travel & Tourism", label: "Travel & Tourism" },
//     { value: "SEO", label: "SEO" }, // Added to match data
//     { value: "Techical", label: "Techical" }, // Added to match data
//     { value: "Tech", label: "Tech" }, // Added to match data
//   ];

//   const countries = [
//     { value: "USA", label: "USA" },
//     { value: "Mexico", label: "Mexico" },
//     { value: "China", label: "China" },
//     { value: "Costa Rica", label: "Costa Rica" },
//     { value: "UAE", label: "UAE" },
//     { value: "Ireland", label: "Ireland" },
//     { value: "Egypt", label: "Egypt" },
//     { value: "Morocco", label: "Morocco" }, // Fixed: Added colon (:)
//     { value: "Thailand", label: "Thailand" },
//     { value: "UK", label: "UK" },
//   ];
//   // State for filters
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedIndustry, setSelectedIndustry] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   function handleCategory(option) {
//     setSelectedCategory(option);
//   }
//   function handleIndustry(option) {
//     setSelectedIndustry(option);
//   }
//   function handleCountry(option) {
//     setSelectedCountry(option);
//   }
//   const [resetKey, setResetKey] = useState(0);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;

//   console.log("selected industry", selectedIndustry);

//   const filteredData = useMemo(() => {
//     return caseStudiesData.filter((caseStudy) => {
//       const matchesCategory =
//         !selectedCategory ||
//         (caseStudy.services &&
//           Array.isArray(caseStudy.services.split(",")) &&
//           caseStudy.services
//             .split(",")
//             .some((service) =>
//               service.toLowerCase().includes(selectedCategory.value.toLowerCase())
//             ));
//       const matchesIndustry =
//         !selectedIndustry ||
//         (caseStudy.industry &&
//           caseStudy.industry.toLowerCase() === selectedIndustry.value.toLowerCase());
//       const matchesCountry =
//         !selectedCountry ||
//         (caseStudy.country &&
//           caseStudy.country.toLowerCase() === selectedCountry.value.toLowerCase());

//       return matchesCategory && matchesIndustry && matchesCountry;
//     });
//   }, [caseStudiesData, selectedCategory, selectedIndustry, selectedCountry]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   console.log("filtered data", filteredData);
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page navigation
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const generatePageNumbers = () => {
//     return Array.from({ length: totalPages }, (_, index) => index + 1);
//   };

//   const resetFilters = () => {
//     setSelectedCategory(null);
//     setSelectedIndustry(null);
//     setSelectedCountry(null);
//     setResetKey((prevKey) => prevKey + 1);
//   };

//   return (
//     <div className={classes.CaseStudyList}>
//       {/* Filters */}
//       <div>
//         <Button
//           color="var(--secondarycolor)"
//           borderColor="var(--secondarycolor)"
//           backgroundColor="Transparent"
//           onClick={resetFilters}
//         >
//           Reset <VscSettings />
//         </Button>
//         <Dropdown
//           key={`category-${resetKey}`}
//           options={categories}
//           placeholder="Categories"
//           onSelect={handleCategory}
//           value={selectedCategory}
//           className={classes.drop}
//         />
//         <Dropdown
//           key={`industry-${resetKey}`}
//           options={industries}
//           placeholder="Industry"
//           onSelect={handleIndustry}
//           value={selectedIndustry}
//           className={classes.drop}
//         />
//         <Dropdown
//           key={`country-${resetKey}`}
//           options={countries}
//           placeholder="Country"
//           onSelect={handleCountry}
//           value={selectedCountry}
//           className={classes.drop}
//         />
//       </div>

//       {/* Case Study Cards */}
//       <div className={classes.container} id="casestudy">
//         {currentItems.length > 0 ? (
//           currentItems?.map((data, index) => {
//             return (
//               <CaseStudyCard
//                 key={index}
//                 data={data}
//                 isReversed={index % 2 !== 0}
//                 path={`/casestudies/${data.title.trim().replace(/\s+/g, "-").toLowerCase()}`}
//               />
//             );
//           })
//         ) : (
//           <p className={classes.noDataMessage}>More to Come!</p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className={classes.casebtn}>
//         <Button
//           color="var(--maintext)"
//           backgroundColor="Transparent"
//           borderColor="var(--maintext)"
//           onClick={handlePrevious}
//           disabled={currentPage === 1}
//         >
//           <GoArrowLeft />
//           Previous
//         </Button>
//         <p className={classes.pageNumbers}>
//           {generatePageNumbers()?.map((pageNumber) => (
//             <button
//               key={pageNumber}
//               onClick={() => handlePageClick(pageNumber)}
//               className={`${classes.pageNumber} ${
//                 currentPage === pageNumber ? classes.active : ""
//               }`}
//             >
//               {pageNumber}
//             </button>
//           ))}
//         </p>
//         <Button
//           color="var(--maintext)"
//           backgroundColor="Transparent"
//           borderColor="var(--maintext)"
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//         >
//           Next <GoArrowRight />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyList;
import React, { useState, useEffect, useMemo } from "react";
import classes from "./CaseStudylist.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { VscSettings } from "react-icons/vsc";
import Dropdown from "../../ui/input/reuse/Dropdown/Dropdown";
import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CaseStudyList = ({ caseStudiesData }) => {
  const categories = [
    { value: "SEO", label: "SEO" },
    { value: "PPC", label: "PPC" },
    { value: "Website Design", label: "Website Design" },
    { value: "SMO", label: "SMO" },
    { value: "Content Creation", label: "Content Creation" },
  ];

  const industries = [
    { value: "Pharmaceutical", label: "Pharmaceutical" },
    { value: "Beauty", label: "Beauty" },
    { value: "Consumer Goods", label: "Consumer Goods" },
    { value: "Food & Beverages", label: "Food & Beverages" },
    { value: "Jewellry", label: "Jewellry" },
    { value: "Motor Graphic", label: "Motor Graphic" },
    { value: "Pet Consumer Goods", label: "Pet Consumer Goods" },
    { value: "Travel & Tourism", label: "Travel & Tourism" },
    { value: "Tech", label: "Tech" },
    { value: "Technical", label: "Technical" },
  ];

  const countries = [
    { value: "USA", label: "USA" },
    { value: "Mexico", label: "Mexico" },
    { value: "China", label: "China" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "UAE", label: "UAE" },
    { value: "Ireland", label: "Ireland" },
    { value: "Egypt", label: "Egypt" },
    { value: "Morocco", label: "Morocco" },
    { value: "Thailand", label: "Thailand" },
    { value: "UK", label: "UK" },
  ];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleCategory = (option) => {
    setSelectedCategory(option);
    setCurrentPage(1); // Reset to first page on filter change
  };
  const handleIndustry = (option) => {
    setSelectedIndustry(option);
    setCurrentPage(1);
  };
  const handleCountry = (option) => {
    setSelectedCountry(option);
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    return caseStudiesData.filter((caseStudy) => {
      const matchesCategory =
        !selectedCategory ||
        (caseStudy.services &&
          caseStudy.services
            .split(",")
            .map((s) => s.trim().toLowerCase())
            .includes(selectedCategory.value.toLowerCase()));
      const matchesIndustry =
        !selectedIndustry ||
        (caseStudy.industry &&
          caseStudy.industry.toLowerCase() === selectedIndustry.value.toLowerCase());
      const matchesCountry =
        !selectedCountry ||
        (caseStudy.country &&
          caseStudy.country.toLowerCase() === selectedCountry.value.toLowerCase());

      return matchesCategory && matchesIndustry && matchesCountry;
    });
  }, [caseStudiesData, selectedCategory, selectedIndustry, selectedCountry]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedIndustry(null);
    setSelectedCountry(null);
    setResetKey((prevKey) => prevKey + 1);
    setCurrentPage(1);
  };

  return (
    <div className={classes.CaseStudyList}>
      {/* Filters */}
      <div className={classes.filterContainer}>
        <Button
          color="var(--secondarycolor)"
          borderColor="var(--secondarycolor)"
          backgroundColor="transparent"
          onClick={resetFilters}
        >
          Reset <VscSettings />
        </Button>
        <Dropdown
          key={`category-${resetKey}`}
          options={categories}
          placeholder="Categories"
          onSelect={handleCategory}
          value={selectedCategory}
          className={classes.drop}
        />
        <Dropdown
          key={`industry-${resetKey}`}
          options={industries}
          placeholder="Industry"
          onSelect={handleIndustry}
          value={selectedIndustry}
          className={classes.drop}
        />
        <Dropdown
          key={`country-${resetKey}`}
          options={countries}
          placeholder="Country"
          onSelect={handleCountry}
          value={selectedCountry}
          className={classes.drop}
        />
      </div>

      {/* Case Study Cards */}
      <div className={classes.container} id="casestudy">
        {currentItems.length > 0 ? (
          currentItems.map((data, index) => (
            <CaseStudyCard
              key={data._id || index}
              data={data}
              isReversed={index % 2 !== 0}
              path={`/casestudies/${data.title
                ?.trim()
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            />
          ))
        ) : (
          <p className={classes.noDataMessage}>No case studies found!</p>
        )}
      </div>

      {/* Pagination */}
      <div className={classes.casebtn}>
       <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={classes.navButton}
        >
          <GoArrowLeft /> Previous
        </button>
        <p className={classes.pageNumbers}>
          {generatePageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`${classes.pageNumber} ${
                currentPage === pageNumber ? classes.active : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </p>
       <button color="var(--backgroundcolor)" backgroundColor="var(--secondarycolor)" borderColor="var(--secondarycolor)"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={classes.navButton}
        >
          Next <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyList;

