# Stealth Ops (NoScape)

Jogo de ação furtiva procedural para navegador, com campanha, survivor, sistemas de visibilidade e ruído, ranking, conquistas e controles touch.

## Requisitos

- Node.js e npm para servidor local e testes
- Chromium instalado pelo `postinstall` do Playwright

## Funcionalidades

- Geração procedural por seed
- Campanha e survivor
- Visibilidade, ruído, iscas e armas
- Ranking e conquistas locais
- Teclado e touch
- PWA/service worker

## Tecnologias

- HTML5 Canvas
- CSS
- JavaScript ES modules
- Playwright

## Instalação

```bash
npm install
```

## Scripts disponíveis

- `npm run dev`
- `npm run test:balance`
- `npm run test:audio`
- `npm run test:smoke`
- `npm run test:sim`
- `npm run test:touch`
- `npm run test:gameplay`
- `npm run test:perf`

Execute somente os scripts listados acima; eles foram conferidos no `package.json`.

## Estrutura principal

- `index.html — shell`
- `game.js — motor principal`
- `js/ — módulos`
- `assets/ — mídia`
- `tests/ — baterias Playwright/Node`
- `sw.js e manifest.json — PWA`
- `netlify.toml — publicação`

## Como usar

- Execute `npm run dev` e abra a porta 3000.
- Escolha modo, personagem e dificuldade.
- Use stealth, ruído e recursos para completar o objetivo.

## Dados e persistência

- Ranking, configurações e progresso usam armazenamento local do navegador.

## Testes e validação

- Execute individualmente os scripts `test:*` listados; não há agregador `npm test`.
- O `postinstall` baixa Chromium e exige rede/espaço em disco.

## Publicação

- O `netlify.toml` publica `.` sem build e configura cache de JS, CSS, HTML, service worker e assets.

## Limitações

- Limpar os dados do navegador remove progresso local.
- Áudio e PWA dependem das políticas do navegador.
- A suíte pode ser custosa por instalar/usar Chromium.

## Repositório

[redobrai-del/thomas-projetos](https://github.com/redobrai-del/thomas-projetos)