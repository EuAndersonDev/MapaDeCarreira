"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import SplitText from "gsap/SplitText";

export const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText);

    // Cleanup function
    return () => {
      // GSAP doesn't require explicit cleanup for plugin registration
    };
  }, []);

  return <>{children}</>;
};

export default GSAPProvider;
