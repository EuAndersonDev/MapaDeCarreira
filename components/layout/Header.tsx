"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Link from "next/link";

interface NavItem {
  key: string;
  label: string;
  href: string;
}

export default function Header() {
  const { locale, toggleLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { key: "about", label: "about", href: "#about" },
    { key: "stack", label: "stack", href: "#stack" },
    { key: "timeline", label: "timeline", href: "#timeline" },
    { key: "education", label: "education", href: "#education" },
    { key: "contact", label: "contact", href: "#contact" },
  ];

  // Traduzir os labels do nav
  const translatedNavItems = navItems.map((item) => ({
    ...item,
    label:
      translations[locale]?.nav?.[
        item.key as keyof (typeof translations)[typeof locale]["nav"]
      ] || item.label,
  }));

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Inicializar com o estado atual
    setIsScrolled(window.scrollY > 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/95 backdrop-blur-md shadow-lg"
          : "bg-primary-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo / Nome */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity"
          >
            {/* Foto opcional — usar iniciais ou ícone */}
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-xs font-bold text-white">
              AR
            </div>
            Anderson Reis
          </Link>

          {/* Links de navegação — hidden em mobile */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {translatedNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-white text-sm hover:text-primary-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão de idioma */}
          <button
            onClick={toggleLocale}
            className="text-white text-sm hover:text-primary-light transition-colors"
            aria-label="Toggle language"
          >
            {locale === "pt" ? "🇧🇷" : "🇺🇸"}
          </button>
        </div>
      </div>
    </header>
  );
}
