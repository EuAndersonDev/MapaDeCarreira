"use client";

import { CareerLevel } from "@/types";
import { useState } from "react";

interface CareerMapSectionProps {
  careerLevels: CareerLevel[];
}

export const CareerMapSection = ({ careerLevels }: CareerMapSectionProps) => {
  const [expandedId, setExpandedId] = useState<string>("junior");

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Mapa de Carreira
        </h2>

        <div className="space-y-4">
          {careerLevels.map((level) => (
            <div
              key={level.id}
              className="border-2 border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition"
            >
              {/* Header do card */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === level.id ? "" : level.id)
                }
                className="w-full bg-gradient-to-r from-blue-50 to-blue-100 p-6 text-left hover:from-blue-100 hover:to-blue-200 transition flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {level.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold">
                    {level.status} {level.icon}
                  </p>
                </div>
              </button>

              {/* Conteúdo expandível */}
              {expandedId === level.id && (
                <div className="bg-white p-8 border-t border-gray-300">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {level.description}
                  </p>

                  {/* Soft Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Soft skills essenciais:
                    </h4>
                    <ul className="space-y-2">
                      {level.softSkills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 font-bold mr-3">
                            •
                          </span>
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roadmap */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Roadmap de aprendizado:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {level.roadmap.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
