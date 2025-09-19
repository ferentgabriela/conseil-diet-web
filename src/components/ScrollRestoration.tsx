import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { restoreScrollPosition } from "../utils/scrollUtils";

export const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    restoreScrollPosition(location.hash);
  }, [location]);

  return null;
};