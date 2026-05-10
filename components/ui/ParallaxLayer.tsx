"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // velocidade do parallax (padrão: 0.5)
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const { locale } = useLanguage();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallaxRef.current) return;

    // Criar efeito parallax usando ScrollTrigger com matchMedia para prefers-reduced-motion
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // Criar efeito parallax usando ScrollTrigger
      const parallaxTween = gsap.to(parallaxRef.current, {
        yPercent: () => -(parallaxRef.current.offsetHeight * speed),
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cleanup function for this matchMedia query
      return () => {
        gsap.killTweensOf(parallaxRef.current);
        ScrollTrigger.getById(parallaxRef.current)?.kill();
        parallaxTween.kill();
      };
    });

    // Cleanup
    return () => {
      // GSAP matchMedia cleanup is handled automatically
    };
  }, [children, locale, speed]); // Re-run quando mudar conteúdo, locale ou velocidade

  return (
    <div
      ref={parallaxRef}
      className={`relative w-full ${className} overflow-hidden`}
    >
      {children}
    </div>
  );
}
