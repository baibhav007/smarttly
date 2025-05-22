import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashh = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth",block:'center'});
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashh;
