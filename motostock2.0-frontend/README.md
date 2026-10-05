# MotoStock 2.0

Frontend do sistema de gestão de estoque de motocicletas, construído com Next.js App Router, React, TypeScript e Tailwind CSS.

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar a compilação e os tipos, use `npm run build` e `npm run typecheck`.

## Rotas

- `/login` — tela de acesso (a autenticação depende de um backend).
- `/dashboard` — indicadores e visão geral.
- `/motos` — catálogo e filtros da frota.
- `/motos/nova` — formulário de cadastro.
- `/pecas`, `/clientes`, `/vendas`, `/relatorios`, `/usuarios` e `/configuracoes` — rotas estruturadas para as próximas áreas do sistema.
- `/` — redireciona para `/login`.

## Organização

- `src/app` — layouts, estilos globais e páginas do App Router.
- `src/components` — navegação e componentes compartilhados.
- `public` — arquivos estáticos públicos.
- `motostock_*/code.html` — telas HTML originais mantidas como referência visual durante a migração.
