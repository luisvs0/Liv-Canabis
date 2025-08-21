# Liv Cannabis - Plataforma de Produtos Medicinais

![Banner](banner.png)

## Descrição

**Liv Cannabis** é uma plataforma web moderna para apresentação e venda de produtos de cannabis medicinal, com foco em experiência do usuário, segurança e visual profissional. O projeto foi desenvolvido utilizando React, Vite, TypeScript, shadcn-ui e Tailwind CSS, trazendo uma interface responsiva, elegante e fácil de usar.

## Funcionalidades

- **Catálogo de Produtos**: Visualização de diferentes opções de cannabis medicinal, com detalhes de peso, preço, economia e descrição.
- **Compra Simples**: Processo de compra rápido, com seleção de quantidade e método de pagamento.
- **Pagamento via Pix**: Geração de QR Code dinâmico, cronômetro de 15 minutos e fluxo de finalização.
- **Pagamento via Cartão de Crédito**: Formulário seguro para dados do cartão e feedback visual de processamento.
- **Diálogo de Confirmação**: Modal para preenchimento de dados do comprador e escolha do método de pagamento.
- **Componentes reutilizáveis**: Vasta biblioteca de componentes UI (botões, cards, badges, inputs, etc).
- **Design Responsivo**: Layout adaptado para desktop e mobile.
- **Acessibilidade**: Uso de Radix UI e boas práticas para navegação acessível.
- **Dark Mode**: Suporte a tema escuro.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router DOM](https://reactrouter.com/)
- [QRCode.react](https://github.com/zpao/qrcode.react)
- [Lucide Icons](https://lucide.dev/)

## Estrutura de Pastas

```
src/
  assets/         # Imagens e logos
  components/     # Componentes reutilizáveis (UI, Header, Footer, ProductCard, etc)
    ui/           # Componentes de interface (botão, card, dialog, etc)
  pages/          # Páginas principais (Index, Products, Payment, Login, NotFound)
  lib/            # Utilitários e helpers
  hooks/          # Custom React hooks
  index.css       # Estilos globais e design system
  App.tsx         # Componente principal e rotas
```

## Rotas Principais

- `/` - Página inicial
- `/produtos` - Catálogo de produtos
- `/pagamento` - Tela de pagamento (Pix ou Cartão)
- `/login` - Autenticação de usuário
- `*` - Página de erro 404

## Como rodar o projeto localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/luisvs0/livcanabis.git
   cd livcanabis
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento com hot reload.
- `npm run build` — Gera a build de produção.
- `npm run preview` — Visualiza a build de produção localmente.
- `npm run lint` — Executa o linter para manter a qualidade do código.

## Customização

- **Cores e Design System:** Editáveis em `src/index.css` e `tailwind.config.ts`.
- **Imagens:** Substitua os arquivos em `src/assets/` para personalizar o visual.
- **Componentes:** Crie ou edite componentes em `src/components/` e `src/components/ui/`.

## Contribuição

Pull requests são bem-vindos! Sinta-se à vontade para abrir issues ou sugerir melhorias.

## Licença

Este projeto é open-source sob a licença MIT.
