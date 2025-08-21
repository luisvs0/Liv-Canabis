<p align="center">
  <img src="banner.png" alt="Liv Cannabis Banner" width="600"/>
</p>

<h1 align="center">Liv Cannabis</h1>
<p align="center">
  Plataforma web moderna para apresentação e venda de produtos de cannabis medicinal.<br>
  <b>Desenvolvido em React + Vite + TypeScript + Tailwind CSS + shadcn/ui</b>
</p>
<p align="center">
  <a href="https://github.com/luisvs0/livcanabis/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License"></a>
  <a href="https://github.com/luisvs0/livcanabis/actions"><img src="https://img.shields.io/github/actions/workflow/status/luisvs0/livcanabis/ci.yml?branch=main&label=build" alt="Build Status"></a>
  <a href="https://github.com/luisvs0/livcanabis/stargazers"><img src="https://img.shields.io/github/stars/luisvs0/livcanabis?style=social" alt="GitHub stars"></a>
</p>

---

## ✨ Visão Geral

**[Liv Cannabis](https://github.com/luisvs0/livcanabis)** é uma plataforma web open source, escrita em [TypeScript](https://www.typescriptlang.org/) com [React](https://react.dev/) e [Vite](https://vitejs.dev/), para facilitar a apresentação, reserva e pagamento de produtos de cannabis medicinal. O projeto é licenciado sob a [MIT License](https://opensource.org/license/mit/).

- **Primeiro release:** 2024
- **Versão atual:** 0.0.0

---

## 🚀 Demonstração

![Demonstração](banner.png)

> Veja o projeto rodando localmente seguindo o guia abaixo.

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/luisvs0/livcanabis.git
cd livcanabis
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Funcionalidades

- Catálogo de produtos de cannabis medicinal com detalhes e economia.
- Processo de compra rápido e intuitivo.
- Pagamento via Pix (QR Code + cronômetro de 15 minutos).
- Pagamento via Cartão de Crédito (formulário seguro).
- Modal de confirmação com coleta de dados do comprador.
- Design responsivo e acessível.
- Dark mode.
- Componentes UI reutilizáveis (shadcn/ui).
- Código limpo, modular e fácil de manter.

---

## 🧰 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router DOM](https://reactrouter.com/)
- [QRCode.react](https://github.com/zpao/qrcode.react)
- [Lucide Icons](https://lucide.dev/)

---

## 📂 Estrutura do Projeto

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

---

## 🌐 Rotas Principais

- `/` — Página inicial
- `/produtos` — Catálogo de produtos
- `/pagamento` — Tela de pagamento (Pix ou Cartão)
- `/login` — Autenticação de usuário
- `*` — Página de erro 404

---

## ⚡ Exemplo de Uso

### Pagamento via Pix

1. Escolha o produto e clique em "Ir para o pagamento".
2. Selecione "Pix" como forma de pagamento.
3. Escaneie o QR Code exibido e finalize o pedido.
4. O cronômetro de 15 minutos é exibido para garantir o tempo de pagamento.

### Pagamento via Cartão

1. Escolha o produto e clique em "Ir para o pagamento".
2. Selecione "Cartão de Crédito" e preencha os dados.
3. Clique em "Finalizar compra" para processar o pagamento.

---

## 📝 Contribuindo

Pull requests são bem-vindos! Para contribuir:

1. Fork este repositório.
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para sua branch: `git push origin minha-feature`
5. Abra um Pull Request.

Consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) (crie um se desejar regras específicas).

---

## 👥 Comunidade & Suporte

- [Issues](https://github.com/luisvs0/livcanabis/issues) — Relate bugs ou sugira melhorias.
- [Discussões](https://github.com/luisvs0/livcanabis/discussions) — Tire dúvidas ou compartilhe ideias.

---

## 📖 Documentação & Links Úteis

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [QRCode.react](https://github.com/zpao/qrcode.react)
- [Lucide Icons](https://lucide.dev/)

---

## 📄 Licença

Distribuído sob a [Licença MIT](LICENSE).

---

## 🙌 Agradecimentos

- Inspirado por projetos modernos de e-commerce e UI.
- Ícones por [Lucide](https://lucide.dev/).
- UI baseada em [shadcn/ui](https://ui.shadcn.com/).

---

> Feito com ❤️ por [Luis Gustavo](mailto:luisgustavodev@gmail.com) e colaboradores.
