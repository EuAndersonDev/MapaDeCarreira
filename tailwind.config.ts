import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#ffffff',
        'bg-secondary': '#e8e6e1', // Bege claro — fundo externo (ref: mapa_carreira)
        'bg-tertiary': '#f1f5f9',  // slate-100

        // Purple principal — identidade do portfólio (ref: mapa_carreira)
        'primary': '#7b3f7a',           // Purple — cor principal de destaque
        'primary-dark': '#6b3468',      // Purple escuro — header background
        'primary-light': '#9b5f9a',     // Purple claro — ícones ativos
        'primary-muted': '#f0e6ef',     // Purple muito claro — fundos suaves

        // Texto
        'text-primary': '#1a1a1a',   // Preto — títulos e texto principal
        'text-secondary': '#475569', // slate-600
        'text-muted': '#94a3b8',     // slate-400

        // Bordas
        'border-color': '#e2e8f0', // slate-200
      },
    },
  },
  plugins: [],
} satisfies Config;