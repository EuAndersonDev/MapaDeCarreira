"use client";

import { ProfileData } from "@/types";

interface AboutSectionProps {
  data: ProfileData;
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Prazer em Conhecer
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-justify">
            {data.about}
          </p>
        </div>

        <a
          href={data.cvUrl}
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
};
