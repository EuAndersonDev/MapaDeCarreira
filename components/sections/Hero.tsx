"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import AnimatedText from "@/components/ui/AnimatedText";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const { locale } = useLanguage();
  const t = translations[locale].hero;
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-start pt-20 pb-16 bg-bg-primary overflow-hidden"
    >
      {/* Camada de fundo com parallax */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="w-full h-full bg-bg-secondary opacity-50"></div>
      </ParallaxLayer>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Nome revelado com SplitText */}
        <AnimatedText className="text-4xl font-bold text-text-primary">
          Anderson Reis
        </AnimatedText>

        {/* Cargo/tagline com SplitText (stagger após nome) */}
        <AnimatedText className="text-2xl text-text-medium mt-2">
          {t.role}
        </AnimatedText>

        {/* Descrição curta opcional */}
        <p className="max-w-xl text-text-muted">
          Desenvolvedor especializado em backend com foco em arquitetura
          escalável e código limpo
        </p>

        {/* Botão CTA com Framer Motion - desativar animações se reduced motion */}
        <motion.a
          href="#stack"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
          className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-lg"
        >
          {t.cta}
        </motion.a>
      </div>
    </section>
  );
}
