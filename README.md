# ☕ Cafeteria Raízes

Aplicação web institucional desenvolvida para uma cafeteria de identidade colonial, com foco em **interface sofisticada**, **experiência do usuário**, **cardápio interativo**, **avaliações de clientes**, **localização integrada** e **deploy em produção com Vercel**.

O projeto foi desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**, utilizando uma estrutura limpa, componentizada e organizada para portfólio profissional.

A aplicação apresenta uma landing page responsiva para a **Cafeteria Raízes**, valorizando tradição, acolhimento, estética artesanal e navegação simples para o usuário final.

---

## Acesse o Projeto

**Deploy:** [Cafeteria Raízes na Vercel](https://cafeteria-colonial-livid.vercel.app/)

**Repositório:** [github.com/felipe-frc/cafeteria-colonial](https://github.com/felipe-frc/cafeteria-colonial)

> A aplicação está hospedada na Vercel como projeto front-end estático. O build de produção é gerado com Vite e publicado a partir da pasta `dist`.

Para executar localmente, siga as instruções da seção **Como Executar**.

---

## Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em:

- Desenvolvimento front-end moderno com React e TypeScript;
- Construção de landing pages responsivas;
- Organização de componentes por responsabilidade;
- Separação entre layout, seções e dados estáticos;
- Estilização com Tailwind CSS;
- Integração de imagens, vídeo e mapa;
- Criação de interface com identidade visual própria;
- Aplicação de boas práticas de UX/UI;
- Configuração de build e deploy com Vite e Vercel;
- Limpeza estrutural de projeto e remoção de código morto;
- Documentação técnica para portfólio profissional.

---

## ⭐ Destaques Técnicos

- Projeto front-end puro com React, TypeScript, Vite e Tailwind CSS;
- Estrutura organizada em componentes de layout, seções, dados e utilitários;
- Header fixo com navegação por âncoras;
- Hero section com identidade visual forte e chamada principal;
- Seção institucional apresentando a essência da cafeteria;
- Cardápio interativo dividido entre **Bebidas** e **Quitandas**;
- Avaliações de clientes em formato visual;
- Seção de localização com Google Maps incorporado;
- Background interno com imagem temática aplicada de forma sutil;
- Imagens e assets locais organizados no projeto;
- SEO básico com meta tags no `index.html`;
- Deploy configurado na Vercel com `vercel.json`;
- Build de produção gerado com Vite;
- Estrutura limpa, sem arquivos gerados, dependências desnecessárias ou código morto.

---

## Funcionalidades

### Página Inicial

- Apresentação visual da Cafeteria Raízes;
- Imagem principal com identidade da marca;
- Botão de chamada para reserva;
- Navegação direta para as seções principais da página.

### Nossa Essência

- Seção institucional com apresentação da cafeteria;
- Texto descritivo sobre tradição, acolhimento e experiência artesanal;
- Indicadores visuais de anos de tradição, clientes felizes e qualidade;
- Imagem temática para reforçar a identidade visual.

### Menu

- Cardápio dividido em categorias;
- Alternância entre **Bebidas** e **Quitandas**;
- Exibição de imagem, nome, descrição e preço dos produtos;
- Layout em cards responsivos.

### Avaliações

- Depoimentos de clientes;
- Exibição visual de estrelas;
- Cards com nome do cliente e comentário;
- Reforço de prova social para o negócio.

### Localização e Contato

- Informações de endereço;
- Telefone;
- E-mail;
- Horários de funcionamento;
- Mapa integrado com Google Maps;
- Seção preparada para conversão e contato do usuário.

---

## ️ Tecnologias

| Camada / Finalidade       | Tecnologia                     |
| ------------------------- | ------------------------------ |
| Linguagem                 | TypeScript                     |
| Biblioteca de Interface   | React                          |
| Build Tool                | Vite                           |
| Estilização               | Tailwind CSS                   |
| Ícones                    | Lucide React                   |
| Componentização UI        | shadcn/ui — componente Button  |
| Utilitários de classe     | clsx, tailwind-merge           |
| Deploy                    | Vercel                         |
| Versionamento             | Git / GitHub                   |
| Formatação                | Prettier                       |

---

## ️ Arquitetura e Estrutura do Projeto

O projeto utiliza uma estrutura simples e organizada para facilitar manutenção, evolução e leitura do código.

```txt
cafeteria-colonial/
│
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── menu/
│   │   │   ├── telas/
│   │   │   ├── background-home.png
│   │   │   ├── background-home.webp
│   │   │   ├── cafeteria-identidade.png
│   │   │   └── logo-cafeteria.png
│   │   │
│   │   └── video/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Header.tsx
│   │   │   │
│   │   │   ├── sections/
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── MenuSection.tsx
│   │   │   │   └── ReviewsSection.tsx
│   │   │   │
│   │   │   └── ui/
│   │   │       └── button.tsx
│   │   │
│   │   ├── data/
│   │   │   ├── menuItems.ts
│   │   │   └── reviews.ts
│   │   │
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   │
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   └── index.html
│
├── components.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
├── LICENSE
└── README.md
```

---

## Interface do Sistema

### Interface Completa

Visão geral da landing page com hero, seção institucional, menu, avaliações e localização.

![Interface completa da Cafeteria Raízes](client/public/images/telas/interface.png)

---

### Página Inicial

Hero section com identidade visual da cafeteria, navegação superior e chamada para reserva.

![Página inicial da Cafeteria Raízes](client/public/images/telas/home.png)

---

### Nossa Essência

Seção institucional com apresentação da tradição, proposta visual e indicadores da cafeteria.

![Seção Nossa Essência](client/public/images/telas/sobre.png)

---

### Menu — Bebidas

Cardápio de bebidas com imagens, descrições e preços.

![Menu de bebidas](client/public/images/telas/menu-bebidas.png)

---

### Menu — Quitandas

Cardápio de quitandas com produtos visuais e organização por categoria.

![Menu de quitandas](client/public/images/telas/menu-quitandas.png)

---

### Avaliações

Depoimentos de clientes em cards com avaliação visual.

![Avaliações de clientes](client/public/images/telas/avaliacoes.png)

---

### Visite-nos

Seção com endereço, telefone, e-mail, horários e mapa incorporado.

![Seção Visite-nos](client/public/images/telas/nos-visite.png)

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Editor de código, como [VS Code](https://code.visualstudio.com/)

---

### 1. Clone o repositório

```bash
git clone https://github.com/felipe-frc/cafeteria-colonial.git
```

---

### 2. Acesse a pasta do projeto

```bash
cd cafeteria-colonial
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Execute em ambiente de desenvolvimento

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:5173
```

---

### 5. Valide o TypeScript

```bash
npm run check
```

---

### 6. Gere o build de produção

```bash
npm run build
```

O Vite irá gerar a pasta:

```txt
dist/
```

---

### 7. Visualize o build localmente

```bash
npm run preview
```

---

## ✅ Qualidade e Organização

O projeto passou por uma limpeza estrutural para manter apenas arquivos, dependências e componentes realmente necessários.

Entre as melhorias aplicadas estão:

- Remoção de arquivos gerados localmente;
- Remoção de pastas desnecessárias para o funcionamento da aplicação;
- Simplificação da estrutura para front-end estático;
- Organização da Home em componentes menores;
- Separação dos dados do cardápio e avaliações;
- Redução de dependências não utilizadas;
- Configuração de deploy com `vercel.json`;
- Padronização dos scripts no `package.json`;
- Atualização da documentação do projeto.

Scripts disponíveis:

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Executa o projeto em ambiente de desenvolvimento |
| `npm run build`   | Gera o build de produção com Vite              |
| `npm run preview` | Visualiza localmente o build gerado            |
| `npm run check`   | Executa verificação TypeScript                 |
| `npm run format`  | Formata os arquivos com Prettier               |

---

## Decisões de Desenvolvimento

### Projeto front-end estático

A aplicação foi mantida como front-end puro, sem backend próprio, porque o objetivo do projeto é apresentar uma landing page institucional com foco em interface, responsividade e experiência visual.

Essa decisão simplifica o deploy, reduz complexidade e torna o projeto mais direto para avaliação em portfólio.

### Componentização por responsabilidade

A interface foi separada em componentes de layout e seções principais.

Essa organização evita que toda a página fique concentrada em um único arquivo e facilita futuras melhorias, como adicionar novas seções, alterar o cardápio ou modificar blocos visuais isoladamente.

### Separação de dados e interface

Os dados do menu e das avaliações ficam separados da estrutura visual.

Isso torna o código mais limpo, melhora a manutenção e permite atualizar produtos ou depoimentos sem alterar diretamente os componentes principais da interface.

### Tailwind CSS para estilização

O Tailwind CSS foi utilizado para construir uma interface responsiva e consistente, com controle direto sobre espaçamentos, cores, tipografia e comportamento visual.

### Vercel como plataforma de deploy

A Vercel foi escolhida por ser adequada para aplicações front-end modernas com Vite, oferecendo build automático a cada push na branch principal.

O arquivo `vercel.json` define o diretório de saída como `dist`, garantindo que o deploy utilize corretamente o build gerado pelo Vite.

---

## Releases

### [v2.1.0 — Limpeza estrutural e melhorias de layout](https://github.com/felipe-frc/cafeteria-colonial/releases/tag/v2.1.0)

Versão focada na limpeza estrutural do projeto, remoção de arquivos desnecessários, organização da base de código e refinamentos visuais após a reestruturação da landing page.

Principais melhorias:

- Reorganização da estrutura do projeto;
- Remoção de arquivos gerados e pastas desnecessárias;
- Simplificação da aplicação como front-end React + Vite;
- Remoção de código morto e dependências não utilizadas;
- Separação da interface em componentes de layout, seções e dados;
- Aplicação do background `background-home` nas seções internas;
- Correção visual da seção **Nossa Essência**;
- Ajuste de contraste no botão **Reservar**;
- Correção da configuração de deploy na Vercel;
- Adição do arquivo `vercel.json`;
- Atualização da documentação do projeto.

### [v2.0.0 — Rebranding e Reestruturação](https://github.com/felipe-frc/cafeteria-colonial/releases/tag/v2.0.0)

Nova versão principal do projeto, com reformulação visual e estrutural da landing page da cafeteria.

Principais melhorias:

- Reformulação significativa da interface;
- Reorganização da estrutura do projeto;
- Atualização da identidade visual;
- Substituição de assets externos por arquivos locais;
- Cardápio interativo com categorias;
- Seção institucional;
- Avaliações de clientes;
- Mapa integrado na seção de contato;
- Favicon com a logo do projeto;
- Revisão do README e organização do repositório.

### [v1.0.1 — Atualização de estabilidade e documentação](https://github.com/felipe-frc/cafeteria-colonial/releases/tag/v.1.0.1)

Atualização do projeto com foco em estabilidade, organização e melhoria da documentação.

Principais melhorias:

- Correção da estrutura inicial do projeto;
- Ajustes nas configurações de build;
- Estabilização de dependências;
- Melhoria na organização do código;
- Atualização do README;
- Preparação do projeto para deploy e evolução contínua.

> Observação: esta versão utilizou a tag `v.1.0.1`. Nas próximas versões, o padrão recomendado é manter tags no formato `v1.0.1`, sem ponto após o `v`.

### [v1.0.0 — Primeira versão estável](https://github.com/felipe-frc/cafeteria-colonial/releases/tag/v1.0.0)

Primeira versão oficial do projeto Cafeteria Colonial.

Principais entregas:

- Layout institucional completo da cafeteria;
- Hero section com identidade visual;
- Proposta visual colonial sofisticada;
- Menu dividido entre bebidas e alimentos;
- Seção de avaliações;
- Seção de localização com mapa incorporado;
- Footer com informações de contato;
- Organização inicial do projeto para portfólio.

---

## Melhorias Futuras

- Formulário de contato funcional;
- Integração real com WhatsApp para reservas;
- Galeria de fotos do ambiente e produtos;
- Sistema de reservas com calendário;
- Newsletter para clientes;
- Testes automatizados com Vitest e Testing Library;
- Animações sutis entre seções;
- Melhorias de acessibilidade;
- Domínio personalizado;
- Área administrativa para gerenciar o cardápio.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ‍ Autor

**Marcos Felipe França**

[LinkedIn](https://www.linkedin.com/in/marcosfelipefrc) · [GitHub](https://github.com/felipe-frc)