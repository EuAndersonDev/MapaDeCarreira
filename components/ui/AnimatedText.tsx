"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useLanguage } from "@/context/LanguageContext";
import { useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export default function AnimatedText({
  children,
  className = "",
}: AnimatedTextProps) {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion();
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || reducedMotion) return;

    // Split the text using GSAP's SplitText
    const splitText = new SplitText(textRef.current, {
      type: "words, lines",
      linesClass: "line++",
    });

    // Animation: reveal each word with stagger
    gsap.from(splitText.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      splitText.revert();
    };
  }, [children, locale, reducedMotion]); // Re-run when text, locale or reducedMotion changes

  return (
    <h1
      ref={textRef}
      className={`inline-block ${className}`}
      style={{ overflow: "hidden" }}
    >
      {children}
    </h1>
  );
}
