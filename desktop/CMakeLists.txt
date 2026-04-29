cmake_minimum_required(VERSION 3.20)
project(JujutsuHunters VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# ── NuGet package restore ─────────────────────────────────────────────────────
# WebView2 and WIL are fetched via NuGet in build.bat before CMake runs.
# The paths below match where build.bat extracts them.
set(NUGET_PACKAGES "${CMAKE_SOURCE_DIR}/packages")
set(WEBVIEW2_DIR   "${NUGET_PACKAGES}/Microsoft.Web.WebView2.1.0.2478.35")
set(WIL_DIR        "${NUGET_PACKAGES}/Microsoft.Windows.ImplementationLibrary.1.0.240803.1")

# ── Sources ───────────────────────────────────────────────────────────────────
add_executable(JujutsuHunters WIN32
    main.cpp
    app.rc
)

# ── Include dirs ──────────────────────────────────────────────────────────────
target_include_directories(JujutsuHunters PRIVATE
    "${WEBVIEW2_DIR}/build/native/include"
    "${WIL_DIR}/include"
)

# ── Link WebView2 loader ──────────────────────────────────────────────────────
if(CMAKE_SIZEOF_VOID_P EQUAL 8)
    set(WEBVIEW2_LIB "${WEBVIEW2_DIR}/build/native/x64/WebView2LoaderStatic.lib")
else()
    set(WEBVIEW2_LIB "${WEBVIEW2_DIR}/build/native/x86/WebView2LoaderStatic.lib")
endif()

target_link_libraries(JujutsuHunters PRIVATE
    "${WEBVIEW2_LIB}"
    shlwapi
    ole32
    oleaut32
    version
)

# ── Compiler flags ────────────────────────────────────────────────────────────
target_compile_definitions(JujutsuHunters PRIVATE
    UNICODE
    _UNICODE
    WIN32_LEAN_AND_MEAN
    NOMINMAX
)

# ── Output ────────────────────────────────────────────────────────────────────
set_target_properties(JujutsuHunters PROPERTIES
    OUTPUT_NAME "JujutsuHunters"
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin"
)

# ── Install ───────────────────────────────────────────────────────────────────
install(TARGETS JujutsuHunters DESTINATION .)
