@echo off
echo ========================================
echo  Instalando Mapa Conceptual Big Data
echo ========================================
echo.

echo [1/3] Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no esta instalado
    echo Por favor descargalo desde: https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js encontrado: 
node --version

echo.
echo [2/3] Instalando dependencias...
echo Esto puede tomar 2-3 minutos...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Fallo la instalacion de dependencias
    pause
    exit /b 1
)

echo.
echo [3/3] Instalacion completada exitosamente!
echo.
echo ========================================
echo  Para ejecutar el proyecto:
echo  npm run dev
echo.
echo  Luego abre: http://localhost:3000
echo ========================================
echo.
pause
