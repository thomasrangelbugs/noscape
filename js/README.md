# Módulos Stealth Ops

O jogo está em migração gradual de um monolito (`game.js`) para módulos menores.

## Estrutura atual

| Arquivo | Responsabilidade |
|---------|------------------|
| `meta-systems.js` | Conquistas, desafio diário, tutorial, minimapa, save mid-run, share |
| `game.js` | Loop principal, render, áudio, geração, entidades (legado) |

## Próximos passos sugeridos

1. `generation.js` — BSP, survival world, fallback levels
2. `entities.js` — player, guards, nemesis
3. `audio.js` — BGM, SFX, ducking
4. `ui.js` — menu, pause, HUD canvas

Cada extração deve manter a API `window.__stealthOpsTest` para os testes Playwright.
