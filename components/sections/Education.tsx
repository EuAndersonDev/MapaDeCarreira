"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { gsap } from "gsap";
import { education } from "@/data/education";
import FlipCard from "@/components/ui/FlipCard";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar o ScrollTrigger (isso deve ser feito apenas uma vez, mas é seguro chamar multiple vezes)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const { locale } = useLanguage();
  const t = translations[locale].education;
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!educationRef.current) return;

    // Animar os cards usando ScrollTrigger e Flip com matchMedia para prefers-reduced-motion
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // Animar os cards usando ScrollTrigger e Flip
      const cards = educationRef.current.querySelectorAll(".education-card");

      const animations = cards.map((card, index) => {
        return gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Cleanup function for this matchMedia query
      return () => {
        animations.forEach((anim) => anim.kill());
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger?.parentNode === educationRef.current) {
            trigger.kill();
          }
        });
      };
    });

    // Cleanup
    return () => {
      // GSAP matchMedia cleanup is handled automatically
    };
  }, [education, locale]); // Re-run quando mudar education ou locale

  return (
    <section id="education" className="relative w-full bg-bg-secondary py-20">
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          {t.title}
        </h2>

        {/* Cards de formação */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <FlipCard className="education-card">
                <div className="p-8 bg-white rounded-2xl shadow-lg border border-border-color">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-primary-muted">
                      {edu.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-text-muted mb-4">{edu.institution}</p>

                  <p className="text-text-muted leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </FlipCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
