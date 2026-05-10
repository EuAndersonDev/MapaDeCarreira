"use client";

import { ProfileData } from "@/types";
import Link from "next/link";

interface FooterProps {
  data: ProfileData;
}

export const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`mailto:${data.email}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {data.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`https://${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={`https://${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#carreira"
                  className="text-gray-300 hover:text-white transition"
                >
                  Carreira
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <p className="text-gray-400 text-sm">
              Conecte-se e acompanhe minhas redes para saber mais sobre meu
              trabalho.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} {data.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
