"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { stack } from "@/data/stack";
import { motion, useReducedMotion } from "framer-motion";

export default function Stack() {
  const { locale } = useLanguage();
  const t = translations[locale].stack;
  const reducedMotion = useReducedMotion();

  return (
    <section id="stack" className="relative w-full bg-bg-secondary py-20">
      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          {t.title}
        </h2>

        {/* Categorias de tecnologias */}
        <div className="space-y-16">
          {/* Tecnologias Primárias */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {t.primary}
            </h3>
            <motion.div
              initial={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              animate={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={
                reducedMotion ? {} : { delay: 0.2, staggerChildren: 0.1 }
              }
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {stack.primary.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={reducedMotion ? undefined : { scale: 1.1 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-border-color hover:border-primary transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-text-muted text-center">
                    {/* Descrição opcional pode ser adicionada aqui */}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tecnologias Secundárias */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {t.secondary}
            </h3>
            <motion.div
              initial={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              animate={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={
                reducedMotion ? {} : { delay: 0.4, staggerChildren: 0.1 }
              }
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {stack.secondary.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={reducedMotion ? undefined : { scale: 1.1 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-border-color hover:border-primary transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-text-muted text-center">
                    {/* Descrição opcional pode ser adicionada aqui */}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {t.tools}
            </h3>
            <motion.div
              initial={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              animate={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={
                reducedMotion ? {} : { delay: 0.6, staggerChildren: 0.1 }
              }
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {stack.tools.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={reducedMotion ? undefined : { scale: 1.1 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-border-color hover:border-primary transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-text-muted text-center">
                    {/* Descrição opcional pode ser adicionada aqui */}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
