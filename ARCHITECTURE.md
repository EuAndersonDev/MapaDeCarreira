# 📁 Estrutura do Projeto

Este projeto segue uma arquitetura limpa e organizada para facilitar manutenção e escalabilidade.

## 📂 Pastas Principais

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── AboutSection.tsx
│   ├── CareerMapSection.tsx
│   ├── SkillsSection.tsx
│   ├── Footer.tsx
│   └── index.ts          # Exportações
├── data/                  # Dados estáticos e mockados
│   └── mockData.ts
├── types/                 # Tipos TypeScript
│   └── index.ts
└── styles/               # Estilos específicos (se necessário)
```

## 🚀 Como Usar

1. **Editar dados**: Modifique `src/data/mockData.ts` para personalizar informações
2. **Criar componentes**: Adicione novos componentes em `src/components/`
3. **Estilização**: Use Tailwind CSS diretamente nos componentes

## 🔧 Configurações

- **Tailwind CSS**: Configurado em `tailwind.config.ts`
- **TypeScript**: Configurado em `tsconfig.json` com path aliases `@/*`
- **ESLint**: Configurado em `eslint.config.mjs`
