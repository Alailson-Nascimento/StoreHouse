# 🎮 StoreHouse

E-commerce fictício com temática de jogos, desenvolvido como projeto prático durante o curso de Front-End (Firjan Senai). O objetivo foi aplicar, em um único projeto real, os principais conceitos aprendidos ao longo do curso — do Angular básico até deploy em produção, passando por formulários reativos, roteamento, e uma área administrativa completa.

## 🔗 Links

- **Repositório:** https://github.com/Alailson-Nascimento
- **Aplicação publicada:** https://storehouse-jogos.netlify.app/produtos

## 🛠️ Tecnologias utilizadas

- **Angular** (standalone components)
- **Signals** (`signal`, `computed`, `effect`) para estado reativo em toda a aplicação
- **Services** para lógica de negócio e comunicação entre componentes
- **Input / Output** para comunicação entre componentes pai/filho
- **Reactive Forms** com validação, incluindo validator customizado de CPF (dígito verificador)
- **Angular Router** para navegação entre páginas
- **Angular Material** (campo de busca)
- **CSS Grid / Flexbox** com tema dark customizado e layout responsivo (incluindo menu mobile)
- **localStorage** para persistência do carrinho
- **ESLint + Prettier** para padronização e qualidade de código
- **Vitest** para testes unitários
- **Netlify** para hospedagem e deploy contínuo

## ✨ Funcionalidades

**Produtos**

- Catálogo com busca em tempo real via _computed signal_
- Distinção visual para estoque baixo e produtos esgotados
- Botão "Me avise quando tiver em estoque" para produtos sem estoque
- Página de detalhe do produto (rota dedicada)
- Badge de "Promoção" com preço promocional exibido dinamicamente

**Carrinho**

- Adicionar, remover e ajustar quantidade (+/-) de cada item
- Total calculado automaticamente
- Ícone com contador de itens no menu de navegação
- Persistência entre sessões via `localStorage`

**Finalizar Compra**

- Formulário com Nome, CPF, E-mail, Endereço e Método de pagamento
- Validação completa, incluindo cálculo de dígito verificador de CPF

**Administração**

- Listagem de todos os produtos (inclusive ocultos)
- Ocultar / exibir produtos no catálogo público
- Marcar / remover produtos em promoção, com preço promocional
- CRUD completo: criar, editar e excluir produtos

## 📁 Estrutura do projeto

Organização por **domínio/funcionalidade** (feature-based) — cada área da aplicação reúne seus próprios componentes, service e testes:

```
src/app/
├── produtos/
│   ├── produto.ts               # Model (interface Produto)
│   ├── produto-service.ts       # Catálogo de produtos + regras de CRUD
│   ├── produto-card/
│   ├── produto-detalhes/
│   ├── produto-form/            # Usado para criar E editar produtos
│   └── produtos-grid/           # Grid com busca (Angular Material)
├── carrinho/
│   ├── carrinho-service.ts      # Itens, quantidade, totais, persistência
│   └── carrinho-resumo/
├── checkout/
│   ├── pedido.ts                # Model (interface Pedido)
│   ├── valida-cpf.ts            # Validator customizado de CPF
│   └── checkout-form/
├── admin/
│   └── admin-produtos/          # Listagem administrativa + ações
├── layout/
│   └── header/                  # Navegação + badge do carrinho
└── app.routes.ts
```

## 🚀 Rodando localmente

```bash
npm install
ng serve
```

Acesse `http://localhost:4200`.

## ✅ Qualidade de código

```bash
npx prettier --write .   # formatação
ng lint                  # análise estática
ng test                  # testes unitários (Vitest)
```

## 📦 Build e Deploy

O projeto é publicado automaticamente no Netlify a cada push para o repositório (CI/CD via GitHub).

```bash
ng build
```

- **Build Command:** `ng build`
- **Publish Directory:** `dist/ecommerce-jogos/browser`
- **SPA routing:** arquivo `_redirects` configurado com `/* /index.html 200` para evitar erro 404 em rotas diretas

## 📚 Sobre o projeto

Este projeto foi construído de forma incremental, incorporando novos tópicos do curso conforme foram sendo estudados: componentização, gerenciamento de estado com signals, formulários reativos com validação customizada, roteamento, área administrativa com CRUD completo, responsividade e, por fim, deploy em produção com CI/CD via GitHub + Netlify.
