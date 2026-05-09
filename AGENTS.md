# AGENTS.md — Mapa de Carreira · Anderson Reis

## 🤖 Papel do Agente

Você é o **agente de desenvolvimento** responsável por construir o Mapa de Carreira interativo de Anderson Reis do zero.

**Primeira ação obrigatória:** leia o `CLAUDE.md` deste repositório. Ele é a fonte de verdade do projeto — paleta, stack, seções, regras e referências visuais.

---

## 📋 Ordem de Execução — Siga Estritamente

### FASE 1 — Setup e Configuração Base

```
[ ] 1. Verificar se o scaffold Next.js já existe no repositório
[ ] 2. Se não: executar o bootstrap descrito no CLAUDE.md
[ ] 3. Instalar dependências: gsap, framer-motion
[ ] 4. Configurar tailwind.config.ts com tokens de cor alinhados ao CLAUDE.md
[ ] 5. Configurar globals.css com todas as CSS variables da seção "Identidade Visual"
[ ] 6. Adicionar Syne + DM Sans via next/font/google no layout.tsx
[ ] 7. Criar GSAPProvider (client component) — registrar ScrollTrigger, Flip, SplitText
[ ] 8. Criar LanguageProvider em context/LanguageContext.tsx com hook useLanguage
```

### FASE 2 — Dados e Traduções

```
[ ] 9.  Criar data/translations.ts com todos os textos PT e EN do CLAUDE.md
[ ] 10. Criar data/stack.ts com as tecnologias listadas no CLAUDE.md
[ ] 11. Criar data/timeline.ts — array tipado com placeholders de experiência
[ ] 12. Criar data/education.ts — array tipado com placeholders de formação
```

### FASE 3 — Componentes de UI Reutilizáveis

```
[ ] 13. AnimatedText.tsx — wrapper GSAP SplitText (revelar por palavra, stagger 0.08s)
[ ] 14. ParallaxLayer.tsx — wrapper GSAP ScrollTrigger para efeito parallax
[ ] 15. FlipCard.tsx — wrapper GSAP Flip para entrada de cards na viewport
```

### FASE 4 — Header

```
[ ] 16. Header.tsx — nav fixo com links para as seções (#ancora)
[ ] 17. Adicionar botão PT ↔ EN usando useLanguage()
[ ] 18. Comportamento: header transparente no topo, fundo branco com sombra ao rolar
```

### FASE 5 — Seções (uma por vez, nesta ordem)

```
[ ] 19. Hero.tsx
        - Nome revelado com SplitText (palavra por palavra)
        - Cargo/tagline com SplitText (stagger após nome)
        - Camada de fundo com parallax sutil
        - Botão CTA com Framer Motion (whileHover, whileTap)
        - Todo texto via translations[locale]

[ ] 20. About.tsx
        - Parágrafo com placeholder bio
        - Parallax suave no elemento decorativo de fundo
        - Todo texto via translations[locale]

[ ] 21. Stack.tsx
        - Grid de ícones dividido por categorias (Primárias, Secundárias, Ferramentas)
        - Entrada escalonada com Framer Motion (staggerChildren)
        - Hover em cada ícone com whileHover (scale + cor primária)
        - Labels em translations[locale]

[ ] 22. Timeline.tsx
        - Linha do tempo vertical com itens de experiência
        - Cada item entra via ScrollTrigger ao chegar na viewport
        - Usar scrub: false, start: "top 80%", toggleActions: "play none none none"
        - Dados de timeline.ts com placeholders
        - Todo texto via translations[locale]

[ ] 23. Education.tsx
        - Cards de formação acadêmica
        - FlipCard ao entrar na viewport (GSAP Flip)
        - Dados de education.ts com placeholders
        - Todo texto via translations[locale]

[ ] 24. Contact.tsx
        - Links sociais: GitHub, LinkedIn, e-mail (dados do CLAUDE.md)
        - CTA principal com Framer Motion
        - Todo texto via translations[locale]
```

### FASE 6 — Integração e QA

```
[ ] 25. Montar page.tsx na ordem correta: Header + seções
[ ] 26. Testar troca PT ↔ EN — verificar se todos os textos mudam
[ ] 27. Verificar prefers-reduced-motion — animações devem ser suprimidas
[ ] 28. Rodar npm run build — corrigir todos os erros TypeScript e de build
[ ] 29. Testar npm run dev — verificar animações no browser
[ ] 30. Checar responsividade: 375px (mobile), 768px (tablet), 1440px (desktop)
[ ] 31. Verificar cleanup GSAP — ctx.revert() presente em todo useEffect com GSAP
```

---

## 🔍 Referências Obrigatórias

Antes de iniciar qualquer seção, consulte:

| Referência | URL | O que analisar |
|---|---|---|
| Código de referência | [github.com/IasminMoreira/mapa_carreira](https://github.com/IasminMoreira/mapa_carreira) | Estrutura de arquivos, ordem de seções, padrão de CSS |
| Visual de referência | [mapacarreira-iasmin.vercel.app](https://mapacarreira-iasmin.vercel.app) | Ritmo de scroll, espaçamentos, hierarquia tipográfica |
| Portfólio do autor | [andersonreis.vercel.app](https://andersonreis.vercel.app) | Paleta de cores, tom visual, identidade |
| GitHub do autor | [github.com/EuAndersonDev](https://github.com/EuAndersonDev) | Stack real, projetos, contexto profissional |

---

## ⚠️ Restrições

| Regra | Detalhe |
|---|---|
| ❌ Não inventar conteúdo | Bio, datas e descrições → `[PLACEHOLDER: ...]` |
| ❌ Não fugir da estrutura | Seções na ordem e padrão do projeto de referência |
| ❌ Não hardcodar cores | Toda cor via CSS variable ou token Tailwind |
| ❌ Não hardcodar textos | Todo texto visível via `translations[locale]` |
| ✅ Componentizar tudo | Cada seção = arquivo em `components/sections/` |
| ✅ Dados separados | Todo conteúdo editável em `data/`, tipado |
| ✅ Cleanup de GSAP | `ctx.revert()` obrigatório no return de todo useEffect |
| ✅ Build limpo | `npm run build` sem erros antes de encerrar |

---

## 🎯 Definição de Pronto (DoD)

O agente considera a tarefa concluída **somente** quando:

- [ ] `npm run build` passa sem erros
- [ ] As 6 seções estão implementadas com seus efeitos (SplitText, ScrollTrigger, Parallax, Flip, Framer Motion)
- [ ] Troca PT ↔ EN funciona em todas as seções
- [ ] `data/` tem placeholders claros e tipagem correta
- [ ] Layout responsivo em 375px, 768px e 1440px
- [ ] `prefers-reduced-motion` é respeitado
- [ ] O ritmo visual segue o projeto de referência
- [ ] Nenhuma cor, texto ou espaçamento está hardcodado fora das variables/translations

---

## 📝 Padrão de Placeholder

```ts
// data/timeline.ts
export interface TimelineItem {
  year: string
  role: string
  company: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: '[PLACEHOLDER: ano]',
    role: '[PLACEHOLDER: cargo ou função]',
    company: '[PLACEHOLDER: empresa ou projeto]',
    description: '[PLACEHOLDER: descrição breve do que foi feito nessa experiência]',
  },
]
```

```tsx
// Em componentes
<p>{translations[locale].about.body}</p>
// onde translations.pt.about.body = '[PLACEHOLDER: bio em português — 2 a 3 frases]'
```

---

## 💬 Reporte ao Fim de Cada Fase

```
✅ FASE [N] concluída
📁 Arquivos criados/modificados: [lista]
⚠️ Decisões tomadas: [ex: "usei blue-600 como token Tailwind 'primary'"]
🔜 Próxima fase: [nome]
❓ Dúvidas para o autor: [se houver — caso contrário omitir]
```
