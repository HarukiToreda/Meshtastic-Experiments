$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$toolRoot = Join-Path ([System.IO.Path]::GetTempPath()) 'meshtastic-local-preview-tools'
$toolModules = Join-Path $toolRoot 'node_modules'
$packageMarker = Join-Path $toolModules 'liquidjs\package.json'

if (-not (Test-Path -LiteralPath $packageMarker)) {
  New-Item -ItemType Directory -Path $toolRoot -Force | Out-Null
  npm install --prefix $toolRoot --no-audit --no-fund liquidjs@10.22.0 marked@12.0.2 sass@1.77.8 yaml@2.4.5
  if ($LASTEXITCODE -ne 0) { throw 'Unable to install local preview dependencies.' }
}

$env:PREVIEW_NODE_MODULES = $toolModules
node (Join-Path $PSScriptRoot 'build-local-preview.mjs')
if ($LASTEXITCODE -ne 0) { throw 'The local preview build failed.' }

$listener = Get-NetTCPConnection -LocalPort 8765 -State Listen -ErrorAction SilentlyContinue
if ($listener) {
  Write-Output 'Preview built. Port 8765 is already being served; restart that server with _site as its working directory if the preview URL does not update.'
  exit 0
}

$server = Start-Process -FilePath 'python' `
  -ArgumentList '-m', 'http.server', '8765', '--bind', '127.0.0.1' `
  -WorkingDirectory (Join-Path $projectRoot '_site') `
  -WindowStyle Hidden `
  -PassThru

Write-Output "Preview server started (PID $($server.Id))."
Write-Output 'Open http://127.0.0.1:8765/Meshtastic-Experiments/LoRa-Boards-Comparison-Table.html'
