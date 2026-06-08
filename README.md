# COMMAND — E-commerce de Moda Fitness e Suplementos

Projeto desenvolvido como trabalho acadêmico (OAT2) para a disciplina de Desenvolvimento Web.

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — estilização, layout flexbox/grid, responsividade, animações
- **JavaScript (ES6+)** — lógica de negócio, navegação SPA, manipulação do DOM
- **OpenFoodFacts API** — integração REST (GET para dados nutricionais, POST para avaliações)
- **LocalStorage** — persistência de sessão, cadastro de usuários e carrinho

## 📁 Estrutura do Projeto

```
command/
├── index.html          # Página principal (SPA - Single Page Application)
├── css/
│   └── style.css       # Todos os estilos do projeto
├── js/
│   ├── images.js       # Imagens dos produtos (base64)
│   ├── produtos.js     # Dados, imagens e renderização dos produtos
│   ├── carrinho.js     # Lógica do carrinho de compras
│   ├── pagamento.js    # Métodos de pagamento (PIX, Cartão, Boleto)
│   ├── auth.js         # Autenticação: login, cadastro, logout
│   ├── reviews.js      # Avaliações de produtos
│   └── app.js          # Estado global, navegação e inicialização
├── assets/
│   └── images/         # Pasta para imagens externas (opcional)
└── README.md
```

## 🚀 Como Executar Localmente

Basta abrir o arquivo `index.html` no navegador.  
Não requer servidor, build ou instalação de dependências.

## 🌐 Deploy

Projeto disponível em: https://command-steel.vercel.app

## 📋 Funcionalidades

- ✅ Login e Cadastro com validação e persistência (LocalStorage)
- ✅ Proteção de rotas — acesso apenas para usuários autenticados
- ✅ Home com hero, benefícios, seleção de produtos e newsletter
- ✅ Listagem de produtos por marca com filtro e ordenação
- ✅ Página de detalhes do produto (specs, avaliações, sabores, quantidade)
- ✅ Carrinho de compras com atualização em tempo real
- ✅ Checkout em etapas: Carrinho → Entrega → Pagamento → Confirmação
- ✅ Pagamento via PIX, Cartão de Crédito (com parcelamento) e Boleto
- ✅ Avaliações de produtos com modal e sistema de estrelas
- ✅ Perfil de usuário editável
- ✅ Aba Promoção com produtos acima de 35% de desconto
- ✅ Integração com OpenFoodFacts API (GET + POST)

## 🎨 Design

Baseado em protótipo desenvolvido no **Figma**.  
Paleta: Roxo `#7B2FBE`, Preto `#0f0f0f`, Branco e tons de cinza.  
Tipografia: Bebas Neue (títulos) + Barlow (corpo).

## 👥 Marcas cadastradas

- **Integral Médica** — Whey 100%, ISO Triple Zero, MyWhey
- **DUX** — Whey Concentrado, Isolado, Hydro, Squeeze
- **Growth** — Whey 80%, Kit Sabores + Creatina
- **TopWax** — Whey Concentrado, Creatina, Protein Chips, Whey Isolado

## 🔗 API Utilizada

**OpenFoodFacts** — `https://world.openfoodfacts.org`
- `GET /cgi/search.pl` — busca dados nutricionais reais de suplementos
- `POST /cgi/product_jqm2.pl` — envio de avaliações de produtos
