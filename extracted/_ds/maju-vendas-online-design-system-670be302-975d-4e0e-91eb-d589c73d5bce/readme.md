# Maju Vendas Online — Design System

Sistema visual da **Maju Vendas Online**, um negócio brasileiro de *curadoria e marketing de afiliados* em três nichos: **tecnologia, saúde e bem-estar**. A proposta editorial é "testamos antes de recomendar": análises independentes, comparativos e link direto para a oferta, com aviso explícito de comissão.

Superfícies do produto:

1. **Site institucional** (Astro, hospedado na Cloudflare) — Home, Sobre, Blog, Cursos, Contato.
2. **Landing pages de afiliado** em subdomínio (`oferta.majuvendasonline.com`) — mesma identidade, fundo teal, CTA âmbar.
3. **Presença social / OG** — avatar, favicons, cartões Open Graph.

## Fontes deste design system

Tudo aqui vem dos arquivos de identidade entregues em `uploads/Identidade visual Maju Vendas Online/`:

- `Maju Vendas Online - Identidade.dc.html` — exploração das 3 direções (1a Cuidado Confiável, 1b Confiança Vibrante, 1c Editorial de Confiança).
- `Maju 1a - Sistema Visual.dc.html` — **ground truth deste sistema**: a direção **1a "Cuidado Confiável"** foi a escolhida. Logo e usos, paleta e tokens, escala tipográfica, grid, botões com estados, campos, cards, Home e blog/landing.
- `Maju 1a - Assets.dc.html` — especificação dos ícones e cartões Open Graph.
- `Maju Vendas Online - Identidade Deck.dc.html` — deck de apresentação 1920×1080 das três direções (base dos slides de exemplo).
- `assets/*.png` — os únicos binários entregues (favicons, avatar, apple-touch-icon, dois OG 1200×630).

Não houve código-fonte do site, arquivo Figma nem repositório: o sistema abaixo é a codificação fiel dos documentos de identidade acima. Valores numéricos (paddings, radii, tamanhos de fonte) foram copiados literalmente, sem arredondar para grade de 4/8px.

## Índice

| Arquivo | O que é |
| --- | --- |
| `styles.css` | Entrada única de CSS global — só `@import` |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `semantic.css`, `base.css` |
| `components/` | Primitivas React (ver lista abaixo) |
| `guidelines/` | Cards de especificação (fundações) da aba Design System |
| `ui_kits/site-institucional/` | Recriação clicável do site (Home, Sobre, Blog, Post, Cursos, Contato) — entrada `index.html`, shell `app-root.jsx` |
| `ui_kits/landing-afiliado/` | Recriação da landing page de oferta — entrada `index.html`, shell `app-root.jsx` |
| `slides/` | Slides de exemplo no estilo do deck de identidade |
| `assets/` | Favicons, avatar, apple-touch-icon, OG |
| `SKILL.md` | Wrapper para uso como Agent Skill |

## Componentes

Inventário derivado da seção "05 · Componentes" e das aplicações do documento 1a — nada além disso foi inventado.

- **brand** — `Logo`
- **core** — `Button`, `Chip`, `Input`
- **cards** — `ProductCard`, `CourseCard`, `PostCard`
- **layout** — `SiteHeader`, `Hero`, `SectionHeading`, `SiteFooter`
- **feedback** — `AffiliateDisclosure`
- **media** — `ImagePlaceholder`

### Adições intencionais

- `ImagePlaceholder` — o documento 1a usa a mesma hachura diagonal 135° em todo slot de imagem de IA; virou componente para que ninguém desenhe um SVG no lugar.
- `PostCard` — o documento especifica a página de post e o eyebrow "Blog · Saúde"; o card de listagem é a extrapolação mínima necessária para montar a aba Blog.
- `SectionHeading` — extraído do par "Testados esta semana / Ver todos" da Home.

## Content fundamentals

Todo o texto é em **português do Brasil**, na **primeira pessoa do plural** ("Selecionamos e testamos cada produto", "Compramos, usamos e escrevemos o que achamos") falando com **"você"** no singular ("Você encontra análises honestas", "recebemos uma comissão sem custo adicional"). O time nunca aparece como "a empresa"; aparece como gente que usou o produto.

**Tom:** honesto, direto, antipromessa. A marca se define pelo que *não* faz — "sem promessa mágica, sem letra miúda". Cada afirmação vem com a prova ao lado: "Testamos quatro aparelhos por 60 noites", "247 produtos testados · 3 nichos", "Testado 30 dias", "Nota 8,4 na nossa avaliação".

**Estrutura de frase:** títulos curtos e concretos, quase sempre sem verbo de venda — "O que vale a pena em tech, saúde e bem-estar", "Vale a pena investir em um monitor de sono?". Perguntas do leitor viram títulos. Subtítulos de uma linha explicando o método, não o benefício.

**Casing:** sentence case em títulos e botões ("Ver oferta", "Explorar produtos", "Assistir grátis"). CAIXA ALTA só em eyebrows e no complemento do logo ("VENDAS ONLINE"), sempre com `letter-spacing` largo. Nunca title case à inglesa.

**Números e preços:** `R$ 189` com espaço, preço antigo riscado ao lado. Descontos como `-32%`. Datas abreviadas em minúsculas: "atualizado em 28 jul 2026". Duração com "·" como separador: "6 aulas · 2h40", "7 min de leitura".

**Emoji:** não. Nenhum emoji aparece em nenhum documento da identidade — nem em social, nem em UI.

**Disclaimer de afiliado:** sempre explícito, na voz normal da marca, nunca em cinza pequeno: *"Este post contém links de afiliado. Se você comprar por eles, recebemos uma comissão sem custo adicional."*

## Visual foundations

**Cor.** Três cores fazem o trabalho: **Teal Cuidado `#10403B`** (credibilidade do nicho de saúde), **Âmbar Ação `#E8944A`** (único CTA comercial) e **Verde Suave `#7FB69B`** (prova, pontos, detalhes). A proporção é normativa: **60% neutros · 25% teal · 9% verde suave · 6% âmbar**. O âmbar aparece só em CTA primário, selo de desconto e o ponto do logo. Os neutros são **quentes** (areia: `#FBF8F4` fundo, `#F6F1E9` superfície, `#EDE6DC` borda) — é o que evita clima de clínica. Teal sobre fundo claro dá 9,4:1 de contraste; **âmbar nunca recebe texto branco**, só tinta `#16211F`.

**Tipografia.** `Outfit` 500/600 em títulos, números de preço e botões, sempre com tracking negativo (−0.03em no display, −0.025em em H2). `Source Sans 3` 400/600 no corpo, 19px/1.65 com medida de 68–75 caracteres. `IBM Plex Mono` só em rótulos de especificação, tokens e legendas técnicas — não em UI de produção. Eyebrow: 13px, 600, `letter-spacing: 0.1em`, caixa alta, teal.

**Espaçamento e grid.** Base 8: 8 dentro de chips, 16 label↔campo, 24 gutter e padding de card, 40 bloco↔bloco, 72 seção↔seção. Container 1200px, 12 colunas, gutter 24 (tablet 8 col/20, mobile 4 col/16 com margem 20). Texto corrido ocupa 7 colunas; grade de produto é 3 cards de 4 colunas.

**Cantos.** Sistema de três raios: **8px** chips retangulares, **12px** campos, **16px** cards (20px em cards grandes de destaque), **999px** para todo botão e toda etiqueta. Botão pill é assinatura da marca.

**Cards.** Fundo branco, borda 1px `#EDE6DC`, radius 16, **sem sombra** na página; a sombra existe só quando um card flutua sobre fundo escuro (`--shadow-float: 0 30px 70px rgba(...)`). Imagem no topo sem padding, conteúdo em 18–20px de padding, CTA de largura total no rodapé do card.

**Fundos e imagens.** Alternância de seções entre `#FBF8F4` e `#F6F1E9`, com blocos teal cheios para landing e footer. **Sem gradiente decorativo em nenhum lugar** — o único gradiente do sistema é a hachura diagonal 135° que marca slot de imagem de IA. Toda imagem da marca é **gerada por IA**: fotografia de produto e de pessoa usando o produto, luz neutra-quente, sem grão, sem filtro; os neutros levemente tonalizados existem justamente para assentar essas imagens.

**Movimento.** Discreto e curto: `150ms` com `cubic-bezier(0.4,0,0.2,1)`. Hover de botão **sobe 1px** e escurece um passo (`#E8944A → #D9832F`); press **desce 1px** e escurece outro (`#C4741F`). Outline no hover ganha borda teal + fundo `#E9F1EE`. Sem bounce, sem parallax, sem animação de entrada por scroll.

**Foco e estados.** Foco de campo: borda teal 2px + halo `0 0 0 4px #E9F1EE`. Erro: borda `#A8382A` e fundo `#FBE9E6`. Desabilitado: fundo `#EDE6DC` com texto `#A9A296`, sem cursor de clique.

**Transparência e blur.** Não usados. Sem vidro, sem overlay translúcido, sem gradiente de proteção — quando o texto precisa de contraste sobre imagem, ele sai da imagem e vai para um bloco sólido (teal ou areia). O único elemento "flutuante" fixo é o header quando `sticky`, sempre sólido.

**Layout fixo.** Header sólido no topo (opcionalmente sticky), footer teal ao final de toda página. Nada de barra flutuante de CTA, nada de pop-up.

## Iconography

**A marca é deliberadamente sem ícones.** Nenhum documento de identidade usa biblioteca de ícones, fonte de ícones, sprite SVG ou PNG de ícone. O vocabulário gráfico é:

- **Ponto circular** (8–12px, `--support` verde suave, às vezes âmbar) — o "ícone" universal: prova de teste, item de lista, marcador de prova social. É ele que substitui checkmarks.
- **Underline âmbar de 2px** — indicador de item de navegação ativo.
- **Preço riscado** (`text-decoration: line-through`) — comparação de valor.
- **Hachura diagonal 135°** — reserva de imagem de IA.

Se um ícone se tornar realmente necessário (ex. um chevron de carrossel), **peça a definição antes de introduzir uma biblioteca** — adotar Lucide/Heroicons hoje seria uma decisão nova, não uma reprodução da identidade. Emoji e caracteres unicode como ícone estão fora.

**Logo.** Não existe arquivo vetorial de logo nas fontes entregues: a marca é **tipográfica**, construída em Outfit 600 — mark = "M" branco em círculo teal com ponto âmbar embaixo à direita; wordmark = "maju" minúsculo com o ponto final em âmbar; complemento "VENDAS ONLINE" em caixa alta com tracking 0.3em. O componente `Logo` reproduz essa construção em tipo; os PNGs entregues (`assets/`) são as exportações oficiais de avatar e favicon. Nenhum símbolo foi desenhado ou aproximado.

**Fotografia** (`assets/imagery/`): quatro imagens de IA aprovadas — `hero-workspace.jpg` (mesa de trabalho, usada no hero e em tech), `produto-headphone.jpg` (still de produto sobre bancada) e `retrato-equipe.jpg` (retrato humano com tablet) e `produto-balanca.jpg` (balança em banheiro claro, usada em saúde). Direção comum: madeira clara, parede off-white, luz de janela difusa, sem grão, sem vinheta, sem filtro frio — é essa temperatura que casa com os neutros areia. Onde ainda não existe foto, o slot fica com `ImagePlaceholder` e a descrição do briefing.

**Assets disponíveis** (`assets/`): `avatar-512.png`, `apple-touch-icon-180.png`, `favicon-64.png`, `favicon-32.png`, `favicon-mono-32.png`, `og-home-1200x630.png`, `og-blog-1200x630.png`.

## Handoff para o Astro

`styles.css` é a entrada única. Em produção, cole os tokens em `src/styles/global.css` e importe no layout base; as fontes vêm de `@fontsource/outfit` e `@fontsource/source-sans-3` (self-host na Cloudflare). Pesos em uso: Outfit 500/600, Source Sans 3 400/600.

## Nota sobre as fontes

As famílias são carregadas via Google Fonts em `tokens/fonts.css` (`@import`), não via `@font-face` com binários — nenhum arquivo de fonte veio junto com a identidade. **Outfit, Source Sans 3 e IBM Plex Mono são as famílias especificadas no documento original, não substitutos.** Se existirem arquivos licenciados/self-hosted no repositório do site, envie-os para trocarmos o `@import` por `@font-face` locais.
