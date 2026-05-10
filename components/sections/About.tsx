"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import ParallaxLayer from "@/components/ui/ParallaxLayer";

export default function About() {
  const { locale } = useLanguage();
  const t = translations[locale].about;

  return (
    <section id="about" className="relative w-full bg-bg-primary py-20">
      {/* Camada decorativa de fundo com parallax */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-bg-secondary opacity-30"></div>
      </ParallaxLayer>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
          {t.title}
        </h2>

        <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
          {t.body}
        </p>
      </div>
    </section>
  );
}
