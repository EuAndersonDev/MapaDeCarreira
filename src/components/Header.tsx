"use client";

import { ProfileData } from "@/types";
import Link from "next/link";

interface HeaderProps {
  data: ProfileData;
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl font-bold">
                {data.name.charAt(0)}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.name}</h1>
            <p className="text-lg text-blue-100 mb-4">{data.subtitle}</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={`mailto:${data.email}`}
                className="text-blue-100 hover:text-white transition"
              >
                {data.email}
              </Link>
              <Link
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition"
              >
                {data.linkedin}
              </Link>
              <Link
                href={`https://${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition"
              >
                {data.github}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
