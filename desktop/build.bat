@echo off
setlocal EnableDelayedExpansion
title Jujutsu Hunters — Build

echo.
echo  ==========================================
echo   Jujutsu Hunters Desktop App — Builder
echo  ==========================================
echo.

:: ── Check for required tools ──────────────────────────────────────────────────
where cmake >nul 2>&1
if errorlevel 1 (
    echo [ERROR] CMake not found.
    echo         Install it with:  winget install Kitware.CMake
    echo         Then re-run this script.
    pause & exit /b 1
)

where nuget >nul 2>&1
if errorlevel 1 (
    echo [INFO] nuget.exe not found — downloading it now...
    powershell -NoProfile -Command ^
        "Invoke-WebRequest -Uri 'https://dist.nuget.org/win-x86-commandline/latest/nuget.exe' -OutFile 'nuget.exe'"
    if errorlevel 1 (
        echo [ERROR] Failed to download nuget.exe. Check your internet connection.
        pause & exit /b 1
    )
    set NUGET=nuget.exe
) else (
    set NUGET=nuget
)

:: ── Restore NuGet packages ────────────────────────────────────────────────────
echo [1/4] Restoring NuGet packages...
if not exist packages (
    %NUGET% install Microsoft.Web.WebView2 -Version 1.0.2478.35 -OutputDirectory packages -NonInteractive
    %NUGET% install Microsoft.Windows.ImplementationLibrary -Version 1.0.240803.1 -OutputDirectory packages -NonInteractive
)
echo       Done.

:: ── Find Visual Studio Build Tools ───────────────────────────────────────────
echo [2/4] Locating Visual Studio Build Tools...
set VSWHERE="%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\vswhere.exe"
if not exist %VSWHERE% (
    echo [ERROR] Visual Studio Build Tools not found.
    echo         Install with:  winget install Microsoft.VisualStudio.2022.BuildTools
    echo         Make sure to include "Desktop development with C++" workload.
    pause & exit /b 1
)

for /f "usebackq tokens=*" %%i in (`%VSWHERE% -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath`) do (
    set VS_PATH=%%i
)

if "!VS_PATH!"=="" (
    echo [ERROR] No C++ build tools found in Visual Studio installation.
    pause & exit /b 1
)
echo       Found: !VS_PATH!

:: ── Configure with CMake ──────────────────────────────────────────────────────
echo [3/4] Configuring with CMake...
if not exist build mkdir build
cmake -S . -B build -G "Visual Studio 17 2022" -A x64
if errorlevel 1 (
    echo [ERROR] CMake configuration failed.
    pause & exit /b 1
)

:: ── Build ─────────────────────────────────────────────────────────────────────
echo [4/4] Building...
cmake --build build --config Release
if errorlevel 1 (
    echo [ERROR] Build failed. Check output above.
    pause & exit /b 1
)

:: ── Done ──────────────────────────────────────────────────────────────────────
echo.
echo  ==========================================
echo   Build successful!
echo   Output: bin\JujutsuHunters.exe
echo  ==========================================
echo.

set /p LAUNCH="Launch the app now? (y/n): "
if /i "!LAUNCH!"=="y" (
    start "" "bin\JujutsuHunters.exe"
)

endlocal
