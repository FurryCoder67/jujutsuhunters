# Jujutsu Hunters — Desktop App

A native Windows desktop wrapper for the Jujutsu Hunters browser game.
Built with C++ and Microsoft WebView2 (Chromium-based).

## What it does

- Opens the game in a native borderless window — no browser chrome
- Suppresses the right-click context menu (the game uses right-click for camera rotation)
- Exposes `window.electronAPI` so the game can show update toasts
- Handles all navigation inside the same window

## Prerequisites

| Tool | Install command |
|------|----------------|
| Visual Studio 2022 Build Tools (C++ workload) | `winget install Microsoft.VisualStudio.2022.BuildTools` |
| CMake 3.20+ | `winget install Kitware.CMake` |
| WebView2 Runtime | Pre-installed on Windows 10/11. If missing: [download here](https://developer.microsoft.com/microsoft-edge/webview2/) |

## Build

```bat
cd desktop
build.bat
```

The script will:
1. Download `nuget.exe` if not found
2. Restore `Microsoft.Web.WebView2` and `Microsoft.Windows.ImplementationLibrary` via NuGet
3. Configure with CMake (Visual Studio 2022, x64)
4. Build in Release mode
5. Output `bin\JujutsuHunters.exe`

## Project structure

```
desktop/
├── main.cpp          # C++ entry point — creates window + WebView2
├── CMakeLists.txt    # CMake build config
├── app.rc            # Windows resource file (version info, icon)
├── build.bat         # One-click build script
└── README.md         # This file
```

## Customizing the URL

Edit `main.cpp` line 12:
```cpp
static const wchar_t* GAME_URL = L"https://jujutsuhunters.vercel.app/hunters.html";
```

For local development, change it to:
```cpp
static const wchar_t* GAME_URL = L"http://localhost:3000/hunters.html";
```

## Adding an icon

Place a `JujutsuHunters.ico` file in the `desktop/` folder, then uncomment line 5 in `app.rc`:
```rc
1 ICON "JujutsuHunters.ico"
```
