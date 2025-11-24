# Sentinel BC-ELITE – Auto Live Dev Launcher
# Auteur : ChatGPT – Mode Autonome
# Objectif : démarrer automatiquement le serveur Next.js, détecter les ports et ouvrir le navigateur

Write-Host "🚀 Lancement du mode LIVE Sentinel BC-ELITE..." -ForegroundColor Cyan

$projectPath = "C:\Users\use\Downloads\BC_ELITE_project"
Set-Location $projectPath

Write-Host "🔍 Vérification de Node.js..." -ForegroundColor Yellow
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js n'est pas installé." -ForegroundColor Red
    exit
}

Write-Host "📦 Vérification des dépendances..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    npm install
}

Write-Host "🔎 Recherche du port libre..." -ForegroundColor Yellow
$port = 3000
while (Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue) {
    $port++
}
Write-Host "🟢 Port libre détecté : $port" -ForegroundColor Green

Write-Host "🛠 Démarrage du serveur Next.js..." -ForegroundColor Cyan
Start-Process "cmd.exe" "/c npm run dev -- --port $port"

Start-Sleep -Seconds 3

$url = "http://localhost:$port"
Write-Host "🌐 Ouverture du site : $url" -ForegroundColor Green
Start-Process $url

Write-Host "✅ LIVE MODE Sentinel BC-ELITE lancé avec succès !" -ForegroundColor Cyan
