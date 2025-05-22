import Connect from "../Components/Contact/connect/Connect";
import FAQ from "../Components/Contact/faq/FAQ";
import InTouch from "../Components/Contact/InTouch/InTouch";
import { Helmet } from "react-helmet-async";


function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Smarttly - Get in Touch with Our Experts</title>
        <meta
          name="description"
          content="Have questions or need digital marketing services? Contact Smarttly today for expert SEO, PPC, web development, and content creation solutions."
        />
      </Helmet>

      <main style={{ backgroundColor: "#F8F9FA" }}>
        <InTouch />
        <Connect />
        <FAQ />
      </main>
    </>
  );
}
export default ContactPage;
