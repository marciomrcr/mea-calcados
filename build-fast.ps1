# Script para build com exclusão temporária do antivírus
# Execute como Administrador para funcionar completamente

param(
    [switch]$dev,
    [switch]$build
)

$projectPath = (Get-Location).Path
Write-Host "Projeto: $projectPath"

# Tentar adicionar exclusão (requer admin)
try {
    Add-MpPreference -ExclusionPath $projectPath -ErrorAction Stop
    Write-Host "✓ Exclusão adicionada temporariamente no Windows Defender" -ForegroundColor Green
    $exclusionAdded = $true
} catch {
    Write-Host "⚠ Não foi possível adicionar exclusão (execute como Administrador para melhor performance)" -ForegroundColor Yellow
    $exclusionAdded = $false
}

# Executar comando solicitado
try {
    if ($dev) {
        Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
        npm run dev
    } elseif ($build) {
        Write-Host "Executando build de produção..." -ForegroundColor Cyan
        npm run build
    } else {
        Write-Host "Use: .\build-fast.ps1 -dev ou .\build-fast.ps1 -build" -ForegroundColor Yellow
    }
} finally {
    # Remover exclusão se foi adicionada
    if ($exclusionAdded) {
        try {
            Remove-MpPreference -ExclusionPath $projectPath -ErrorAction Stop
            Write-Host "✓ Exclusão removida do Windows Defender" -ForegroundColor Green
        } catch {
            Write-Host "⚠ Não foi possível remover exclusão automaticamente" -ForegroundColor Yellow
        }
    }
}