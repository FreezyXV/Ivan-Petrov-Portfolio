// hooks/useIsDesktop.js
"use client";

import { useState, useEffect } from "react";

export default function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsDesktop(window.innerWidth >= breakpoint);
      }, 150);
    };

    // Run on mount
    setIsDesktop(window.innerWidth >= breakpoint);

    // Add listener
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isDesktop;
}
