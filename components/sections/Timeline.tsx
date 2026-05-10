"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "gsap";
import { timeline } from "@/data/timeline";
import { translations } from "@/data/translations";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar o ScrollTrigger (isso deve ser feito apenas uma vez, mas é seguro chamar multiple vezes)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Timeline() {
  const { locale } = useLanguage();
  const t = translations[locale].timeline;
  const reducedMotion = false; // We'll check this in the matchMedia
  const timelineRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    // Animar cada item da timeline usando ScrollTrigger com matchMedia para prefers-reduced-motion
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // Animar cada item da timeline usando ScrollTrigger
      const animations = Array.from(
        timelineRef.current.querySelectorAll("li"),
      ).map((item, index) => {
        return gsap.from(item, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
            // scrub: false, // conforme especificado no CLAUDE.md
          },
        });
      });

      // Cleanup function for this matchMedia query
      return () => {
        animations.forEach((anim) => anim.kill());
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger?.parentNode === timelineRef.current) {
            trigger.kill();
          }
        });
      };
    });

    // Cleanup
    return () => {
      // GSAP matchMedia cleanup is handled automatically
    };
  }, [timeline, locale]); // Re-run quando mudar timeline ou locale

  return (
    <div className="relative w-full">
      {/* Linha do tempo vertical */}
      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-color"></div>

        {/* Itens da timeline */}
        <ul ref={timelineRef} className="relative z-10 px-4">
          {timeline.map((item, index) => (
            <li
              key={index}
              className={`relative w-full mb-12 ${index % 2 === 0 ? "lg:pl-[52%] lg:pr-0" : "lg:pl-0 lg:pr-[52%]"} lg:w-[48%]`}
            >
                {/* Conteúdo do item */}
                <div
                  className={`relative p-6 bg-white rounded-xl shadow-md border border-border-color ${
                    index % 2 === 0
                      ? "lg:left-0 lg:right-[52%]"
                      : "lg:left-[52%] lg:right-0"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {/* Marcador */}
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>

                    {/* Ano */}
                    <span className="text-xs font-medium text-primary-muted">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.role}
                  </h3>
                  <p className="text-text-muted mb-2">{item.company}</p>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}
