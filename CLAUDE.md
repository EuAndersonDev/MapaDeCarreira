# CLAUDE.md — Mapa de Carreira · Anderson Reis

## 🎯 Objetivo do Projeto

Criar um **Mapa de Carreira interativo e imersivo** para recrutadores, inspirado visualmente no projeto de referência [mapacarreira-iasmin.vercel.app](https://mapacarreira-iasmin.vercel.app) e no código em [github.com/IasminMoreira/mapa_carreira](https://github.com/IasminMoreira/mapa_carreira).

O site deve manter a **estrutura base do projeto de referência** (scroll narrativo, seções encadeadas, ritmo visual), adicionando camadas de animação avançada com GSAP (Parallax, ScrollTrigger, Flip, SplitText).

A identidade visual segue o **portfólio existente** em [andersonreis.vercel.app](https://andersonreis.vercel.app): fundo claro, tipografia limpa, acentos em azul escuro `#2563eb`.

---

## 🏗️ Stack Técnica

| Camada            | Tecnologia                                  |
|-------------------|---------------------------------------------|
| Framework         | Next.js 14+ (App Router)                    |
| Estilização       | Tailwind CSS                                |
| Animações         | Framer Motion + GSAP (ScrollTrigger, Flip, SplitText) |
| Tipagem           | TypeScript                                  |
| i18n              | Contexto manual PT/EN (sem biblioteca extra) |
| Deploy            | Vercel                                      |
| Fontes            | Syne (headings) + DM Sans (body)            |

---

## 🎨 Identidade Visual

### Tema: Light Mode — paleta extraída de andersonreis.vercel.app

```css
:root {
  /* Backgrounds */
  --bg-primary:    #ffffff;
  --bg-secondary:  #f8fafc;   /* slate-50  — seções alternadas */
  --bg-tertiary:   #f1f5f9;   /* slate-100 — cards, badges    */

  /* Azul principal — identidade do portfólio (#2563eb = blue-600 Tailwind) */
  --color-primary:       #2563eb;
  --color-primary-dark:  #1d4ed8;   /* blue-700 — hover de botões */
  --color-primary-light: #3b82f6;   /* blue-500 — ícones ativos  */
  --color-primary-muted: #dbeafe;   /* blue-100 — fundos suaves  */

  /* Texto */
  --text-primary:   #0f172a;   /* slate-900 */
  --text-secondary: #475569;   /* slate-600 */
  --text-muted:     #94a3b8;   /* slate-400 */

  /* Bordas */
  --border-color:   #e2e8f0;   /* slate-200 */

  /* Tipografia */
  --font-heading: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* Espaçamentos */
  --section-padding-y: clamp(80px, 10vw, 140px);
  --container-max:     1200px;
}
```

### Regras de cor

- **Nunca** hardcodar cores fora das CSS variables ou tokens Tailwind
- `--color-primary` → CTAs, links ativos, bordas de destaque, ícones com ênfase
- `--color-primary-muted` → backgrounds de cards e badges de tecnologia
- Seções alternadas usam `--bg-primary` e `--bg-secondary` para ritmo visual limpo

---

## 🌐 Internacionalização (PT → EN)

Padrão: **Português (pt-BR)**. Header tem botão de troca para **Inglês (en)**.

### Estrutura de contexto

```tsx
// context/LanguageContext.tsx
'use client'
import { createContext, useContext, useState } from 'react'

type Locale = 'pt' | 'en'
const LanguageContext = createContext<{
  locale: Locale
  toggleLocale: () => void
}>({ locale: 'pt', toggleLocale: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')
  const toggleLocale = () => setLocale(l => l === 'pt' ? 'en' : 'pt')
  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguage = () => useContext(LanguageContext)
```

### Arquivo de traduções

```ts
// data/translations.ts
export const translations = {
  pt: {
    nav: { about: 'Sobre', stack: 'Stack', timeline: 'Experiência', education: 'Formação', contact: 'Contato' },
    hero: { greeting: 'Olá, sou', role: 'Engenheiro Backend', cta: 'Ver projetos' },
    about: { title: 'Sobre mim', body: '[PLACEHOLDER: bio em português]' },
    stack: { title: 'Tecnologias', primary: 'Principais', secondary: 'Secundárias', tools: 'Ferramentas' },
    timeline: { title: 'Experiências' },
    education: { title: 'Formação' },
    contact: { title: 'Contato', cta: 'Vamos conversar?', email: 'Enviar e-mail' },
  },
  en: {
    nav: { about: 'About', stack: 'Stack', timeline: 'Experience', education: 'Education', contact: 'Contact' },
    hero: { greeting: "Hi, I'm", role: 'Backend Engineer', cta: 'See projects' },
    about: { title: 'About me', body: '[PLACEHOLDER: bio in English]' },
    stack: { title: 'Technologies', primary: 'Primary', secondary: 'Secondary', tools: 'Tools' },
    timeline: { title: 'Experience' },
    education: { title: 'Education' },
    contact: { title: 'Contact', cta: "Let's talk?", email: 'Send email' },
  },
}
```

> ⚠️ Todo texto visível ao usuário deve vir de `translations[locale]`. Nenhum texto fixo em JSX.

### Botão de troca no Header

```tsx
const { locale, toggleLocale } = useLanguage()
<button onClick={toggleLocale}>
  {locale === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
</button>
```

---

## 📐 Estrutura de Seções (Obrigatória)

Seguir o fluxo narrativo do projeto de referência. **Não fugir desta ordem.**

```
/
├── Header (fixo)               → logo/nome + nav links + botão PT ↔ EN
├── Hero / Apresentação         → nome, cargo, tagline animada com SplitText
├── Sobre / Quem sou eu         → parágrafo curto com parallax de fundo
├── Stack / Tecnologias         → grid de ícones com animação escalonada
├── Timeline de Experiências    → linha do tempo vertical com ScrollTrigger
├── Formação Acadêmica          → cards com Flip ao entrar na viewport
└── Contato / CTA               → links sociais + formulário ou botão de e-mail
```

> ⚠️ O conteúdo textual (bio, datas, descrições) será preenchido pelo autor. Use **placeholders** no formato `[PLACEHOLDER: descrição]`.

---

## ✨ Animações GSAP (Requisitos Obrigatórios)

```bash
npm install gsap framer-motion
```

Registrar plugins no `GSAPProvider` (client component em `app/layout.tsx`):

```ts
gsap.registerPlugin(ScrollTrigger, Flip, SplitText)
```

| Plugin | Seção | Comportamento |
|---|---|---|
| **SplitText** | Hero | Nome e tagline revelados palavra por palavra, `stagger: 0.08` |
| **ScrollTrigger** | Timeline | Itens entram no scroll, `scrub: 1`, `start: "top 80%"` |
| **Parallax** | Hero + Sobre | Camadas de fundo em velocidades diferentes via ScrollTrigger |
| **Flip** | Formação | Cards com transição suave ao entrar na viewport |
| **Framer Motion** | Stack (hover), botões, links | `whileHover`, `whileTap`, `initial/animate` |

### Regras de animação

- Respeitar `prefers-reduced-motion`: usar `gsap.matchMedia()` e `useReducedMotion()` do Framer
- Cleanup obrigatório: `ctx.revert()` no `return` de todo `useEffect` com GSAP
- `will-change: transform` apenas onde estritamente necessário
- Nenhuma animação bloqueia conteúdo — sempre `opacity: 0 → 1`, nunca `display: none`

---

## 🗂️ Estrutura de Arquivos

```
mapa-carreira/
├── app/
│   ├── layout.tsx              → fontes, metadata, GSAPProvider, LanguageProvider
│   ├── page.tsx                → orquestração das seções
│   └── globals.css             → CSS variables, reset, base styles
├── components/
│   ├── layout/
│   │   └── Header.tsx          → nav fixo + botão PT ↔ EN
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Timeline.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedText.tsx    → wrapper SplitText reutilizável
│       ├── ParallaxLayer.tsx   → wrapper parallax reutilizável
│       └── FlipCard.tsx        → wrapper Flip reutilizável
├── context/
│   └── LanguageContext.tsx
├── data/
│   ├── translations.ts         → todos os textos PT + EN
│   ├── stack.ts                → tecnologias com ícones
│   ├── timeline.ts             → experiências (placeholders)
│   └── education.ts            → formação (placeholders)
└── public/
    └── icons/                  → SVGs das tecnologias
```

---

## 👤 Dados do Autor

- **Nome:** Anderson Reis
- **GitHub:** [github.com/EuAndersonDev](https://github.com/EuAndersonDev)
- **LinkedIn:** [linkedin.com/in/anderson-reis-5407311b3](https://linkedin.com/in/anderson-reis-5407311b3)
- **Portfólio:** [andersonreis.vercel.app](https://andersonreis.vercel.app)
- **E-mail:** <andersonaugustorei1227@gmail.com>
- **Localização:** São Paulo, Brasil 🇧🇷

### Stack para `data/stack.ts`

```ts
export const stack = {
  primary: [
    { name: 'Java',        icon: '/icons/java.svg' },
    { name: 'Spring Boot', icon: '/icons/spring.svg' },
    { name: 'NestJS',      icon: '/icons/nestjs.svg' },
    { name: 'Express',     icon: '/icons/express.svg' },
    { name: 'Node.js',     icon: '/icons/nodejs.svg' },
    { name: 'SQL',         icon: '/icons/sql.svg' },
    { name: 'MongoDB',     icon: '/icons/mongodb.svg' },
    { name: 'AWS',         icon: '/icons/aws.svg' },
  ],
  secondary: [
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'React',   icon: '/icons/react.svg' },
    { name: 'Angular', icon: '/icons/angular.svg' },
    { name: 'Python',  icon: '/icons/python.svg' },
    { name: 'C++',     icon: '/icons/cpp.svg' },
  ],
  tools: [
    { name: 'Docker',  icon: '/icons/docker.svg' },
    { name: 'Figma',   icon: '/icons/figma.svg' },
    { name: 'Git',     icon: '/icons/git.svg' },
    { name: 'GitHub',  icon: '/icons/github.svg' },
    { name: 'VSCode',  icon: '/icons/vscode.svg' },
  ],
}
```

---

## ⚙️ Regras de Implementação

1. **Não inventar conteúdo pessoal** — bio, datas e descrições ficam como `[PLACEHOLDER: ...]`
2. **Seguir a estrutura de referência** — consultar [github.com/IasminMoreira/mapa_carreira](https://github.com/IasminMoreira/mapa_carreira) para layout e fluxo de scroll
3. **Componentizar tudo** — cada seção em `components/sections/`, reutilizáveis em `components/ui/`
4. **Dados separados** — todo conteúdo editável em `data/`, tipado com TypeScript
5. **Sem hardcode de cores** — toda cor via CSS variable ou token Tailwind
6. **i18n total** — nenhum texto fixo em JSX, tudo via `translations[locale]`
7. **Mobile-first** — responsivo em 375px → 768px → 1440px
8. **Cleanup de GSAP** — `ctx.revert()` obrigatório no return de todo useEffect
9. **Build limpo** — `npm run build` sem erros antes de encerrar

---

## 🚀 Bootstrap

```bash
npx create-next-app@latest mapa-carreira \
  --typescript --tailwind --app --src-dir=false --eslint
cd mapa-carreira
npm install gsap framer-motion
```

Após scaffold:

1. Configurar CSS variables em `globals.css`
2. Adicionar Syne + DM Sans via `next/font/google` em `layout.tsx`
3. Criar `LanguageProvider` e `GSAPProvider`
4. Criar todos os componentes de seção com placeholders
5. Implementar animações GSAP nos componentes corretos
6. Rodar `npm run build` — corrigir todos os erros antes de finalizar
