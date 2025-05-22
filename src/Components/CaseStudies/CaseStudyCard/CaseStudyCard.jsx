import React from "react";
import classes from "./CaseStudyCard.module.css";

const CaseStudyCard = ({ data, isReversed, path }) => {
  console.log("CaseStudyCard data:", data);

  // Defensive check for data
  if (!data) {
    return <div className={classes.CaseStudyCard}>No case study data available</div>;
  }

  // Parse content if it exists
  let content = {};
  try {
    content = data.content ? JSON.parse(data.content) : {};
  } catch (error) {
    console.error("Error parsing content:", error);
    content = { introduction: "", problem: "", solution: "", results: "" };
  }

  // Extract fields from content with fallbacks
  const introduction = content.introduction || "No introduction available";
  const problem = content.problem || "No problem description available";
  const solution = content.solution || "No solution description available";
  let results = [];
  if (content.results) {
    if (typeof content.results === "string") {
      const cleanedResults = content.results.replace(/^Results:\s*/, "").trim();
      results = cleanedResults.split(/[,.]/).map((r) => r.trim()).filter((r) => r);
    } else if (Array.isArray(content.results)) {
      results = content.results;
    } else if (typeof content.results === "object") {
      results = [content.results.description || JSON.stringify(content.results)];
    } else {
      console.warn("Unexpected results format:", content.results);
    }
  }

  // Function to map country names to two-letter country codes
  const getCountryCode = (countryName) => {
    if (!countryName) return 'us'; // Default to 'us' if country is missing

    const countryMap = {
      'united states': 'us',
      'usa': 'us',
      'united kingdom': 'gb',
      'uk': 'gb',
      'mexico': 'mx',
      'canada': 'ca',
      'india': 'in',
    };

    const normalizedCountry = countryName.toLowerCase();
    return countryMap[normalizedCountry] || 'us'; // Default to 'us' if not found
  };

  // Map API data to expected props
  const clientName = data.title || "Unknown Client";
  const services = data.services ? data.services.split(",").map((s) => s.trim()) : [];
  const countryCode = getCountryCode(data.country);
  const countryFlag = `https://flagcdn.com/w40/${countryCode}.png`;

  // Construct image URL
  const baseUrl = `${process.env.REACT_APP_API_URL}/admin/case-studies`;
  const image = data.case_studies_image
    ? data.case_studies_image.startsWith("http")
      ? data.case_studies_image
      : `${baseUrl}${data.case_studies_image}`
    : "https://via.placeholder.com/300x200";

  console.log("Image URL:", image);
  console.log("Country Flag URL:", countryFlag);

  return (
    <div
      className={`${classes.CaseStudyCard} ${isReversed ? classes.Reversed : ""}`}
    >
      {isReversed ? (
        <>
          <div className={classes.CaseStudyCardcontent} id={data._id}>
            <div className={classes.clientInfo}>
              <p className={classes.clientname}>
                {clientName}{" "}
                <img
                  src={countryFlag}
                  alt={data.country || "Country Flag"}
                  height={20}
                  width={30}
                  style={{
                    objectFit: "cover",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    verticalAlign: "middle",
                  }}
                />
              </p>
              <p className={classes.cgreen}>{services.join(", ")}</p>
            </div>
            <div className={classes.innerchange}>
              <div className={classes.sectionRow}>
                <div className={classes.leftColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Introduction</p>
                    <p className={classes.sectionDescription}>{introduction}</p>
                  </div>
                </div>
                <div className={classes.rightColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Solution</p>
                    <p className={classes.sectionDescription}>{solution}</p>
                  </div>
                </div>
              </div>
              <div className={classes.sectionRow}>
                <div className={classes.leftColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Problem</p>
                    <p className={classes.sectionDescription}>{problem}</p>
                  </div>
                </div>
                <div className={classes.rightColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Results</p>
                    {results.length > 0 ? (
                      results.map((result, index) => (
                        <div key={index} className={classes.innerheading}>
                          <span className={classes.sectionDescription}>
                            {typeof result === "string" ? result : "No result description"}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className={classes.sectionDescription}>No results available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt={clientName} className={classes.image} />
        </>
      ) : (
        <>
          <img src={image} alt={clientName} className={classes.image} />
          <div className={classes.CaseStudyCardcontent} id={data._id}>
            <div className={classes.clientInfo}>
              <p className={classes.clientname}>
                {clientName}{" "}
                <img
                  src={countryFlag}
                  alt={data.country || "Country Flag"}
                  height={20}
                  width={30}
                  style={{
                    objectFit: "cover",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    verticalAlign: "middle",
                  }}
                />
              </p>
              <p className={classes.cgreen}>{services.join(", ")}</p>
            </div>
            <div className={classes.innerchange}>
              <div className={classes.sectionRow}>
                <div className={classes.leftColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Introduction</p>
                    <p className={classes.sectionDescription}>{introduction}</p>
                  </div>
                </div>
                <div className={classes.rightColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Solution</p>
                    <p className={classes.sectionDescription}>{solution}</p>
                  </div>
                </div>
              </div>
              <div className={classes.sectionRow}>
                <div className={classes.leftColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Problem</p>
                    <p className={classes.sectionDescription}>{problem}</p>
                  </div>
                </div>
                <div className={classes.rightColumn}>
                  <div className={classes.sectionWrapper}>
                    <p className={classes.sectionHeading}>Results</p>
                    {results.length > 0 ? (
                      results.map((result, index) => (
                        <div key={index} className={classes.innerheading}>
                          <span className={classes.sectionDescription}>
                            {typeof result === "string" ? result : "No result description"}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className={classes.sectionDescription}>No results available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CaseStudyCard;