# Baixa trilhas CC0/CC-BY de opengameart.org para Stealth Ops
$base = "https://opengameart.org/sites/default/files"
$outDir = Join-Path $PSScriptRoot "..\assets\audio\bgm-pack"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$tracks = @(
  # Agentes / tatico (7)
  @{ file = "mode-agent-01.mp3"; url = "$base/actionTrack.mp3" },
  @{ file = "mode-agent-02.mp3"; url = "$base/chase.mp3" },
  @{ file = "mode-agent-03.mp3"; url = "$base/The%20Rush.mp3" },
  @{ file = "mode-agent-04.mp3"; url = "$base/Evasion.mp3" },
  @{ file = "mode-agent-05.mp3"; url = "$base/infiltration.mp3" },
  @{ file = "mode-agent-06.mp3"; url = "$base/Vicegrip%20of%20Pursuit.mp3" },
  @{ file = "mode-agent-07.mp3"; url = "$base/Of%20Far%20Different%20Nature%20-%20Bouncer%20%28CC0%29.mp3" },

  # Zumbis / tenso (7)
  @{ file = "mode-zombie-01.mp3"; url = "$base/ruskerdax_-_menacing_otherworld.mp3" },
  @{ file = "mode-zombie-02.mp3"; url = "$base/ruskerdax_-_omen.mp3" },
  @{ file = "mode-zombie-03.mp3"; url = "$base/ruskerdax_-_the_creep.mp3" },
  @{ file = "mode-zombie-04.mp3"; url = "$base/Horror.mp3" },
  @{ file = "mode-zombie-05.mp3"; url = "$base/amm_shadow-protocol_track_1.mp3" },
  @{ file = "mode-zombie-06.mp3"; url = "$base/amm_shadow-protocol_track_3.mp3" },
  @{ file = "mode-zombie-07.mp3"; url = "$base/amm_shadow-protocol_track_7.mp3" },

  # Palhacos / sombrio-humor (6)
  @{ file = "mode-clown-01.mp3"; url = "$base/taking_you_to_the_circus_mastered.mp3" },
  @{ file = "mode-clown-02.mp3"; url = "$base/taking_you_to_the_circus_guitar.mp3" },
  @{ file = "mode-clown-03.mp3"; url = "$base/carnival_of_strangeness.mp3" },
  @{ file = "mode-clown-04.mp3"; url = "$base/Ghoulish%20Fun.mp3" },
  @{ file = "mode-clown-05.mp3"; url = "$base/dj_necromanser_-_spooky_night_club.wav" },
  @{ file = "mode-clown-06.mp3"; url = "$base/amm_shadow-protocol_track_9.mp3" },

  # Survivor supers / metal-rock (10)
  @{ file = "survival-rock-01.mp3"; url = "$base/untitled_metal_track.mp3" },
  @{ file = "survival-rock-02.mp3"; url = "$base/Heavy%20Metal%2003.mp3" },
  @{ file = "survival-rock-03.mp3"; url = "$base/Monolith.mp3" },
  @{ file = "survival-rock-04.mp3"; url = "$base/Metal%20Band%20%28Chromatic%29.mp3" },
  @{ file = "survival-rock-05.mp3"; url = "$base/amm_shadow-protocol_track_2.mp3" },
  @{ file = "survival-rock-06.mp3"; url = "$base/amm_shadow-protocol_track_4.mp3" },
  @{ file = "survival-rock-07.mp3"; url = "$base/amm_shadow-protocol_track_5.mp3" },
  @{ file = "survival-rock-08.mp3"; url = "$base/amm_shadow-protocol_track_6.mp3" },
  @{ file = "survival-rock-09.mp3"; url = "$base/amm_shadow-protocol_track_8.mp3" },
  @{ file = "survival-rock-10.mp3"; url = "$base/amm_shadow-protocol_track_10.mp3" }
)

$ok = 0
$fail = 0
foreach ($t in $tracks) {
  $dest = Join-Path $outDir $t.file
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500000)) {
    Write-Host "SKIP $($t.file) (ja existe)"
    $ok++
    continue
  }
  Write-Host "GET $($t.file) ..."
  curl.exe -L -o $dest $t.url 2>$null
  $sz = if (Test-Path $dest) { (Get-Item $dest).Length } else { 0 }
  if ($sz -gt 500000) {
    Write-Host "  OK $([math]::Round($sz/1MB,2)) MB"
    $ok++
  } else {
    Write-Host "  FAIL ($sz bytes)"
    if (Test-Path $dest) { Remove-Item $dest -Force }
    $fail++
  }
}
Write-Host "Concluido: $ok ok, $fail falhas"
