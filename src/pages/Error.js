import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#f5f7fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        //   justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        <img
          src="/images/WorkingProgress.png"
          alt="Robot working on page"
          style={{
            maxWidth: "80%",
            width: "200px",
            height: "auto",
            marginBottom: "2rem",
          }}
        />
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#212529",
            marginBottom: "1rem",
            fontFamily: '"Roboto", sans-serif',
            wordWrap: "break-word",
          }}
        >
          <span className="error-text">Oops</span>
          <span className="error-text-full">! This page is still under construction.</span>
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#6c757d",
            marginBottom: "2rem",
            maxWidth: "600px",
            fontFamily: '"Roboto", sans-serif',
            lineHeight: "1.5",
          }}
        >
          We’re working hard to bring this page to life. Check back soon!
        </p>
        <Link to="/">
          <button
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              fontWeight: "500",
              color: "#fff",
              height: "55px",
              width: "150px",
              backgroundColor: "var(--secondary, #34A852)",
              border: "none",
              borderRadius: "2rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "var(--secondary, #34A852)")}
          >
            Go Back
          </button>
        </Link>

        {/* Media Query for Mobile Responsiveness */}
        <style>
          {`
            body {
              overflow: hidden; /* Prevent body scrolling */
            }
            .error-text-full {
              display: inline;
            }
            @media (max-width: 768px) {
              .error-text-full {
                display: none; /* Hide full text in mobile */
              }
              main {
                padding: 1rem;
              }
              img {
                width: 180px; /* Reduced for mobile */
              }
              p:first-of-type {
                font-size: 1.5rem; /* Reduced for mobile */
                word-wrap: break-word;
              }
              p:nth-of-type(2) {
                font-size: 0.95rem; /* Encourage wrapping */
                max-width: 90%;
                line-height: 1.5;
              }
              button {
                padding: 0.5rem 1.5rem;
                font-size: 0.9rem;
                height: 45px;
                width: 120px;
              }
            }
            @media (max-width: 475px) {
              img {
                width: 160px; /* Further reduced */
              }
              p:first-of-type {
                font-size: 1.25rem;
              }
              p:nth-of-type(2) {
                font-size: 0.85rem;
                line-height: 1.5;
              }
              button {
                height: 40px;
                width: 100px;
              }
            }
            @media (max-width: 360px) {
              img {
                width: 140px; /* For very small screens */
              }
              p:first-of-type {
                font-size: 1.1rem;
              }
              p:nth-of-type(2) {
                font-size: 0.8rem;
                line-height: 1.4;
              }
              button {
                height: 36px;
                width: 90px;
                font-size: 0.85rem;
              }
            }
          `}
        </style>
      </main>
    </>
  );
}

export default ErrorPage;