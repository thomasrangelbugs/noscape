# Baixa fotos reais das armas para assets/shop (Wikimedia Commons).
# Execute uma vez: powershell -ExecutionPolicy Bypass -File assets/shop/download-shop-images.ps1

$ErrorActionPreference = "Stop"
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ua = "StealthOps/1.0 (local asset setup)"

$files = [ordered]@{
  "knife.jpg"    = "https://commons.wikimedia.org/wiki/Special:FilePath/Ka-Bar_USMC.jpg?width=480"
  "pistol.jpg"   = "https://commons.wikimedia.org/wiki/Special:FilePath/Colt_M1911.jpg?width=480"
  "revolver.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Colt_Python.38_Special.jpg?width=480"
  "smg.jpg"      = "https://commons.wikimedia.org/wiki/Special:FilePath/MP5A3.jpg?width=480"
  "burst.jpg"    = "https://commons.wikimedia.org/wiki/Special:FilePath/M4A1_Carbine.jpg?width=480"
  "shotgun.png"  = "https://commons.wikimedia.org/wiki/Special:FilePath/Mossberg_500.png?width=480"
  "rifle.jpg"    = "https://commons.wikimedia.org/wiki/Special:FilePath/AK-47_type_II.jpg?width=480"
  "tranq.jpg"    = "https://commons.wikimedia.org/wiki/Special:FilePath/Tranquilizer_dart.jpg?width=480"
  "sniper.jpg"   = "https://commons.wikimedia.org/wiki/Special:FilePath/M24_Sniper_Weapon_System.jpg?width=480"
  "laser.jpg"    = "https://commons.wikimedia.org/wiki/Special:FilePath/Colt_M1911.jpg?width=480"
  "bazooka.jpg"  = "https://commons.wikimedia.org/wiki/Special:FilePath/M79_Grenade_Launcher.jpg?width=480"
}

foreach ($entry in $files.GetEnumerator()) {
  $out = Join-Path $dir $entry.Key
  Write-Host "Baixando $($entry.Key)..."
  Start-Sleep -Seconds 3
  Invoke-WebRequest -Uri $entry.Value -OutFile $out -UseBasicParsing -Headers @{ "User-Agent" = $ua }
  Write-Host "  OK ($((Get-Item $out).Length) bytes)"
}

Write-Host "Concluido. Recarregue o jogo."
