"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SkillItem {
  name: string;
  percentage: number;
}

export default function Skills() {
  const { locale } = useLanguage();
  const t = translations[locale].skills;
  const skillsRef = useRef<HTMLDivElement>(null);

  // State para skills e linguagens do GitHub
  const [skills, setSkills] = useState<SkillItem[]>([
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 75 },
    { name: "React", percentage: 80 },
    { name: "Next.js", percentage: 75 },
    { name: "Node.js", percentage: 80 },
    { name: "Java", percentage: 70 },
    { name: "Python", percentage: 65 },
    { name: "SQL", percentage: 75 },
  ]);

  const [gitLanguages, setGitLanguages] = useState<{ [key: string]: number }>(
    {},
  );
  const [loading, setLoading] = useState(true);

  // Buscar linguagens do GitHub dinamicamente
  useEffect(() => {
    const fetchGithubLanguages = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/EuAndersonDev/repos",
        );
        const repos = await response.json();

        const languageCount: { [key: string]: number } = {};
        repos.forEach((repo: any) => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        setGitLanguages(languageCount);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar linguagens do GitHub:", error);
        setLoading(false);
      }
    };

    fetchGithubLanguages();
  }, []);

  // Animação: barras de skill crescem ao entrar na viewport
  useEffect(() => {
    if (!skillsRef.current) return;

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      const bars = skillsRef.current?.querySelectorAll(".skill-bar-inner");
      if (!bars) return;

      Array.from(bars).forEach((bar: any) => {
        const finalWidth = bar.getAttribute("data-width");
        gsap.from(bar, {
          width: "0%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      gsap.matchMedia().revert();
    };
  }, [skills]);

  return (
    <aside
      ref={skillsRef}
      className="sticky top-20 w-full max-w-xs bg-bg-primary rounded-lg border border-border-color p-6 shadow-md"
    >
      {/* Conhecimentos */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-text-primary mb-4">
          {t.knowledge}
        </h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <span className="text-xs text-text-secondary font-medium min-w-fit">
                {skill.name}
              </span>
              <div className="flex-1 h-1 bg-bg-tertiary rounded-full overflow-hidden">
                <div
                  className="skill-bar-inner h-full rounded-full bg-primary transition-all duration-1000"
                  data-width={`${skill.percentage}%`}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              <span className="text-xs text-text-muted">
                {skill.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub — Linguagens dinâmicas */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-text-primary mb-4">
          GitHub ({Object.keys(gitLanguages).length})
        </h3>
        {loading ? (
          <p className="text-xs text-text-muted">Carregando...</p>
        ) : Object.keys(gitLanguages).length > 0 ? (
          <div className="space-y-2">
            {Object.entries(gitLanguages)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 8)
              .map(([lang, count], index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="text-xs text-text-secondary">{lang}</span>
                  <span className="text-xs text-text-muted">
                    {count} repo{count > 1 ? "s" : ""}
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-xs text-text-muted">
            Nenhuma linguagem encontrada
          </p>
        )}
      </div>

      {/* Idiomas */}
      <div>
        <h3 className="text-sm font-bold text-text-primary mb-4">
          {t.languages}
        </h3>
        <ul className="space-y-2 text-xs text-text-secondary">
          <li>🇧🇷 Português — {t.fluent}</li>
          <li>🇺🇸 English — {t.fluent}</li>
          <li>🇪🇸 Español — {t.intermediate}</li>
        </ul>
      </div>
    </aside>
  );
}
