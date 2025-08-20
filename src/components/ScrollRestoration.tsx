import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the new location has a hash
    if (location.hash) {
      // If there's a hash, scroll to that element
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};