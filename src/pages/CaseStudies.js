import CaseStudiesBrand from "../Components/CaseStudies/CaseStudiesBrand/CaseStudiesBrand";
import CaseStudyList from "../Components/CaseStudies/CaseStudyList/CaseStudyList";
import BreadCrumb from "../Components/ui/BreadCrumb/BreadCrumb";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useState, useEffect } from "react";

function Homepage() {
  const [caseStudiesData, setCaseStudiesData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true);
  const data = {
    id: "casestudytop",
    path: "Case Studies",
    title: "Case Studies",
    content:
      "Smarttly has collaborated with various companies across different sectors, providing services such as Website Design, SEO, Social Media Optimization, and Content Creation. Our tailored services have significantly enhanced these companies' online presence, increasing customer engagement and higher sales.",
  };

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/case-studies`);
        console.log(response,"response");
        if (response.data.success) {
          setCaseStudiesData(response.data.data || []); // Use data field if success is true
          console.log("Fetched case studies successfully!!!", response.data.data);
        } else {
          console.error("Error to fetch case studies");
          setCaseStudiesData([]);
        }
      } catch (error) {
       
        console.error("Error fetching case studies:", error);
        setCaseStudiesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) return null; // Render nothing while loading

  return (
    <>
      <Helmet>
        <title>Smarttly Case Studies - Success Stories & Results</title>
        <meta
          name="description"
          content="Explore Smarttly's case studies and success stories. See how our digital marketing, SEO, PPC, and web solutions drive real results for businesses."
        />
      </Helmet>
      <BreadCrumb data={data} />
      <CaseStudyList caseStudiesData={caseStudiesData} />
      <CaseStudiesBrand caseStudiesData={caseStudiesData} />
    </>
  );
}

export default Homepage;