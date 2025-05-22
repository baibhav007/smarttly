import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./HomePageCaseStudies.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { GoArrowRight } from "react-icons/go";
import HomePageCase from "./HomePageCase";
import { Link } from "react-router-dom";

const HomePageCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);
  const itemsPerPage = 3;

  const getCountryCode = (countryName) => {
    if (!countryName) return 'us'; // Default to 'us' if country is missing

    // Map of country names to two-letter codes
    const countryMap = {
      'united states': 'us',
      'usa': 'us',
      'united kingdom': 'gb',
      'uk': 'gb',
      'mexico': 'mx',
      'canada': 'ca',
      'india': 'in',
      'andaman and nicobar islands': 'in',
      // Add more mappings as needed based on your API data
    };

    // Normalize the country name to lowercase for lookup
    const normalizedCountry = countryName.toLowerCase();
    const countryCode = countryMap[normalizedCountry] || 'us'; // Default to 'us' if not found
    console.log(`Country: ${countryName}, Normalized: ${normalizedCountry}, Code: ${countryCode}`);
    return countryCode;
  };

  // Fetch case studies from API
  const fetchCaseStudies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/case-studies?page=1&limit=10`);
      console.log("API Response:", response.data);
      if (response.data.success && response.data.data.length > 0) {
        const mappedData = response.data.data.map((data) => {
          // Parse content if it exists
          let content = {};
          try {
            content = data.content ? JSON.parse(data.content) : {};
          } catch (error) {
            console.error(`Error parsing content for ${data._id}:`, error);
          }

          const countryCode = getCountryCode(data.country);
          // Map API data to expected props
          const caseStudy = {
            id: data._id || `temp-${Math.random()}`,
            title: data.title || "Unknown Client",
            desc: content.introduction || "No description available",
            slug: data.slug || "No slug available",
            service: data.services ? data.services.split(",").map((s) => s.trim()).join(", ") : "No services",
            country: `https://flagcdn.com/w40/${countryCode}.png`,
            img: data.case_studies_image
              ? data.case_studies_image.startsWith("http")
                ? data.case_studies_image
                : `${process.env.REACT_APP_API_URL}/admin/case-studies/${data.case_studies_image}`
              : "https://via.placeholder.com/300x200",
          };
          console.log("Mapped case study:", caseStudy);
          return caseStudy;
        });
        setCaseStudies(mappedData);
        console.log("Fetched case studies successfully:", mappedData);
      } else {
        throw new Error('Failed to fetch case studies');
      }
    } catch (err) {
      console.error('Error fetching case studies:', err);
      setError('Unable to load case studies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle window resize to update mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll in mobile view
  useEffect(() => {
    if (isMobileView && caseStudies.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isMobileView, caseStudies.length]);

  // Fetch case studies on mount
  useEffect(() => {
    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <div className={classes.loading}>
        <p>Loading case studies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={classes.HomePageCaseStudiesFrame}>
      <div className={classes.HomePageCaseStudies}>
        <div>
          <div>Case Studies</div>
        </div>
        <div className={classes.homecase}>
          {caseStudies.length === 0 ? (
            <p>No case studies available.</p>
          ) : isMobileView ? (
            <div className={classes.mobileCaseWrapper}>
              <HomePageCase
                key={caseStudies[currentIndex].id}
                id={caseStudies[currentIndex].id}
                title={caseStudies[currentIndex].title}
                desc={caseStudies[currentIndex].desc}
                img={caseStudies[currentIndex].img}
                country={caseStudies[currentIndex].country}
                service={caseStudies[currentIndex].service}
              />
            </div>
          ) : (
            caseStudies
              .slice(0, itemsPerPage)
              .map((data) => (
                <HomePageCase
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  desc={data.desc}
                  slug={data.slug}
                  img={data.img}
                  country={data.country}
                  service={data.service}
                />
              ))
          )}
        </div>
        <div>
          <Link to="/casestudies" className="link">
            <Button
              color="var(--backgroundcolor)"
              backgroundColor="var(--maintext)"
              borderColor="var(--maintext)"
               className={classes.buttonn}
            >
              View All <GoArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageCaseStudies;