"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;
  const reducedMotion = useReducedMotion();

  // Dados do autor do CLAUDE.md
  const authorData = {
    github: "https://github.com/EuAndersonDev",
    linkedin: "https://linkedin.com/in/anderson-reis-5407311b3",
    email: "andersonaugustorei1227@gmail.com",
    location: "São Paulo, Brasil 🇧🇷",
  };

  return (
    <section id="contact" className="relative w-full bg-bg-primary py-20">
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          {t.title}
        </h2>

        <div className="space-y-8 text-center">
          {/* Informações de contato */}
          <div className="space-y-4">
            <p className="flex items-center justify-center space-x-3 text-text-muted">
              <span className="w-4 h-4 flex-shrink-0">
                {/* Ícone de localização (simplificado) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112.057 21c-2.076-.045-4.11-.68-5.903-1.436a1.5 1.5 0 01-1.532-1.058c-.252-.41-.252-.867 0-1.277a1.5 1.5 0 011.532-1.058 17.933 17.933 0 015.903-1.436A17.933 17.933 0 0112.057 9c2.076-.045 4.11.68 5.903 1.436a1.5 1.5 0 011.532 1.058c.252.41.252.867 0 1.277a1.5 1.5 0 01-1.532 1.058A17.933 17.933 0 0112.057 20.118z"
                  />
                </svg>
              </span>
              {authorData.location}
            </p>

            {/* E-mail */}
            <p className="flex items-center justify-center space-x-3 text-text-muted">
              <span className="w-4 h-4 flex-shrink-0">
                {/* Ícone de e-mail (simplificado) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2zm0 0h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2zM3 16h18"
                  />
                </svg>
              </span>
              <a
                href={`mailto:${authorData.email}`}
                className="hover:text-primary transition-colors"
              >
                {authorData.email}
              </a>
            </p>

            {/* Links sociais */}
            <div className="flex justify-center space-x-6">
              {/* GitHub */}
              <a
                href={authorData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors"
              >
                <span className="w-4 h-4 flex-shrink-0">
                  {/* Ícone do GitHub (simplificado) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77a5.07 5.07 0 00-1.8-3.31c-1.88.49-2.8 1.27-2.8 2.07V8.42a2.23 2.23 0 00-.41-1.06c-.55-.27-1.13-.29-1.68.08a2.24 2.24 0 00-1.1 1.41c.27.36.36.9.13 1.46a3.49 3.49 0 001.44 2.61c-.5.57-1.02 1.09-1.41 1.56A2.31 2.31 0 0012.07 12c-.7.27-1.36.53-1.88.77a3.75 3.75 0 00-.4 2.36A11.61 11.61 0 003 15.75c-.68 3.25-1.24 5.84-1.24 8.25C2 21.75 5.25 23 9 23h6c3.75 0 6.75-1.25 6.75-2.75v-3.75c0-1.11-.42-2.13-1.05-2.88M15 11.25a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href={authorData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors"
              >
                <span className="w-4 h-4 flex-shrink-0">
                  {/* Ícone do LinkedIn (simplificado) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5a1 1 0 000 2h14a1 1 0 000-2zM5 19a1 1 0 010-2h14a1 1 0 010 2H5zm4-9a1.5 1.5 0 013 0v1.5a1.5 1.5 0 01-3 0V10zm0 7a1.5 1.5 0 013 0v3a1.5 1.5 0 01-3 0v-3zM8 10a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA principal com Framer Motion - desativar animações se reduced motion */}
          <motion.a
            href="#"
            whileHover={reducedMotion ? undefined : { scale: 1.05 }}
            whileTap={reducedMotion ? undefined : { scale: 0.95 }}
            className="mt-8 inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-lg"
          >
            {t.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
