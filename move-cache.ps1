# Script para mover cache do Next.js para melhorar performance
$projectPath = "C:\www\mea-calcados"
$tempCachePath = "$env:TEMP\nextjs-cache\mea-calcados"

# Criar diretório de cache temporário se não existir
if (!(Test-Path $tempCachePath)) {
    New-Item -ItemType Directory -Path $tempCachePath -Force
}

# Remover cache atual
if (Test-Path "$projectPath\.next") {
    Remove-Item "$projectPath\.next" -Recurse -Force
}

# Criar link simbólico para o cache temporário
New-Item -ItemType SymbolicLink -Path "$projectPath\.next" -Target $tempCachePath -Force

Write-Host "Cache movido para: $tempCachePath"
Write-Host "Link simbólico criado em: $projectPath\.next"