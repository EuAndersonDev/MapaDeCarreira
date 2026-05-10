import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import GSAPProvider from "./GSAPProvider";
import { LanguageProvider } from "../context/LanguageContext";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mapa de Carreira - Anderson Reis",
  description: "Mapa de carreira interativo e imersivo para recrutadores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <GSAPProvider>{children}</GSAPProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
