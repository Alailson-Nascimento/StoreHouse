# 🎮 StoreHouse

E-commerce fictício com temática de jogos, desenvolvido como projeto prático durante o curso de Front-End (Firjan Senai). O objetivo foi aplicar, em um único projeto real, os principais conceitos aprendidos ao longo do curso — do Angular básico até deploy em produção.

## 🔗 Links

- **Repositório:** [link do GitHub aqui]
- **Aplicação publicada:** [link do Netlify aqui]

## 🛠️ Tecnologias utilizadas

- **Angular** (standalone components)
- **Signals** para estado reativo
- **Services** para lógica de negócio e comunicação entre componentes
- **Input / Output** para comunicação entre componentes pai/filho
- **Reactive Forms** com validação
- **Angular Router** para navegação entre páginas
- **Angular Material** (primeiro contato com a lib neste projeto)
- **CSS Grid** e tema dark customizado
- **Netlify** para hospedagem e deploy contínuo

## ✨ Funcionalidades

- Catálogo de produtos (jogos) com busca em tempo real via *computed signal*
- Cards de produto reutilizáveis
- Página de detalhe do produto (rota dedicada)
- Formulário de produto com validação reativa
- Carrinho de compras: adicionar, remover e limpar itens, com totais calculados automaticamente
- Layout responsivo com tema dark

## 📁 Estrutura do projeto

```
src/
├── models/
│   └── produto.ts              # Interface Produto
├── services/
│   ├── produto.service.ts      # Catálogo de produtos (mock)
│   └── carrinho.service.ts     # Lógica do carrinho (add/remove/clear, totais)
├── components/
│   ├── produto-card/           # Card individual do produto
│   ├── produtos-grid/          # Grid com busca (Angular Material)
│   └── carrinho-resumo/        # Resumo do carrinho
└── ...
```

## 🚀 Rodando localmente

```bash
npm install
ng serve
```

Acesse `http://localhost:4200`.

## 📦 Build e Deploy

O projeto é publicado automaticamente no Netlify a cada push para o repositório.

```bash
ng build
```

- **Build Command:** `ng build`
- **Publish Directory:** `dist/storehouse/browser`
- **SPA routing:** arquivo `_redirects` configurado com `/* /index.html 200` para evitar erro 404 em rotas diretas

## 📚 Sobre o projeto

Este projeto foi construído de forma incremental, incorporando novos tópicos do curso conforme foram sendo estudados: componentização, gerenciamento de estado com signals, formulários reativos, roteamento e, por fim, deploy em produção com CI/CD via GitHub + Netlify.
