"use client";

import { SkillCategory, Language } from "@/types";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  languages: Language[];
}

export const SkillsSection = ({
  skillCategories,
  languages,
}: SkillsSectionProps) => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Skills</h2>

        {/* Categorias de Skills */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Idiomas */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Idiomas</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-gray-800 mb-2">
                  {language.name}
                </p>
                <p className="text-gray-600 text-sm">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
