"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // Adding an empty dependency array to run only once

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }

  return null; // Render nothing or a loading indicator while mounting
};
