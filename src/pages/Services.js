import Service from "../Components/Services/Service";
import BreadCrumb from "../Components/ui/BreadCrumb/BreadCrumb";
import { Helmet } from "react-helmet-async";

function ServicePage() {
  const data = {
    path: "Services",
    title: "Services",
    content:
      "At Smarttly, we empower Businesses across North America with tailored digital marketing strategies, including SEO, social media management, and more, that aligns with your goals to drive growth and outshine competitors.",
  };
  return (
    <>
      <Helmet>
        <title>
          {`Smarttly Services - Digital Marketing Experts`}
        </title>
        <meta
          name="description"
          content={"Discover our expert digital marketing solutions, including SEO, PPC, and web development to grow your business."
          }
        />
      </Helmet>

      <BreadCrumb data={data} />
      <Service />
    </>
  );
}
export default ServicePage;
