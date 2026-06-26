Audio realista usado pelo jogo:

- assets/audio/gun-shot.mp3
- assets/audio/gun-pistol-clean.wav
- assets/audio/gun-smg-clean.wav
- assets/audio/gun-magnum-clean.wav
- assets/audio/gun-rifle-clean.wav
- assets/audio/gun-shotgun-clean.wav
- assets/audio/gun-silenced-clean.wav
- assets/audio/gun-laser-clean.wav
- assets/audio/gun-impact.mp3
- assets/audio/gun-click.mp3
- assets/audio/knife-slice.mp3
- assets/audio/knife-hit.mp3
- assets/audio/human-death-1-cc0.wav
- assets/audio/human-death-2-cc0.wav
- assets/audio/footsteps-walk.mp3
- assets/audio/footsteps-run.mp3
- assets/audio/bgm1.mp3
- assets/audio/bgm2.mp3
- assets/audio/bgm3.mp3
- assets/audio/bgm4.mp3
- assets/audio/music-clown-creepy-cc0.wav
- assets/audio/music-clown-creepy-loop-cc0.ogg
- assets/audio/music-clown-carnival-cc0.ogg
- assets/audio/music-zombie-lost-cc0.ogg
- assets/audio/music-zombie-heartbeat-cc0.ogg
- assets/audio/music-nemesis-chase-cc0.wav
- assets/audio/clown-laugh-cc0.ogg
- assets/audio/clown-death-horror-cc0.wav

Origem dos audios:
- SFX de tiro, passos/corrida e faca: Mixkit Free Sound Effects
  https://mixkit.co/free-sound-effects/gun/
  https://mixkit.co/free-sound-effects/footsteps/
  https://mixkit.co/free-sound-effects/discover/knife/
- Tiros clean adicionados depois: Gunshot Sounds by Tabasco (CC0)
  https://opengameart.org/content/gunshot-sounds
- Audio do modo palhaco: Evil Laugh, excited horror sound e Creepy title screen (CC0)
  https://opengameart.org/content/evil-laugh
  https://opengameart.org/content/excited-horror-sound
  https://opengameart.org/content/creepy-title-screen
- Loops novos de terror, zumbi, palhaco/carnaval e perseguicao (CC0)
  https://opengameart.org/content/lost-in-a-bad-place-horror-ambience-loop
  https://opengameart.org/content/a-lurking-evil-horror-ambience
  https://opengameart.org/content/creepy-ambient-loop
  https://opengameart.org/content/carnival-rides
  https://opengameart.org/content/chase-diamond-dust
- Trilhas de fundo: Mixkit Free Stock Music
  https://mixkit.co/free-stock-music/tag/spy/

Licenca:
- Mixkit License. Consulte https://mixkit.co/license/

Como funciona:
- O jogo carrega os arquivos em `assets/audio`.
- Se alguma trilha local nova falhar, ele ainda tenta os nomes antigos `assets/bgm*.mp3`.
- Se nao houver nenhuma trilha, usa musica sintetica automaticamente.
- Se algum SFX falhar, o jogo usa um som sintetico simples como fallback.

Assets visuais dos personagens e cenarios:

- AGENTE.png (retrato / fallback estatico do jogador)
- sprites/player-operative-animated-tactical-cc0.png (spritesheet 7 frames, vista de cima; fundo preto removido no jogo)
- sprites/agente.png (guardas / modo agente)
- sprites/zumbi.png (modo zumbi)
- sprites/palhaço.png (modo palhaco)
- sprites/nemesis.png (nemesis)
- guard-patrol.svg
- guard-suspicious.svg
- guard-alert.svg
- dossier-case.svg
- terminal-off.svg
- terminal-on.svg
- exit-door.svg
- floor-industrial.svg / wall-industrial.svg
- floor-lab.svg / wall-lab.svg
- floor-office.svg / wall-office.svg

Como funciona:
- O jogo tenta carregar esses arquivos automaticamente.
- Se algum asset nao estiver presente, ele usa sprite/visual procedural como fallback.

Origem do player animado:
- Top Down Man With Gun - Animated, por Technopeasant/Piga Software (CC0)
  https://opengameart.org/content/top-down-man-with-gun-animated
- O arquivo player-operative-animated-tactical-cc0.png e uma versao recolorida para a paleta tatica do jogo.
