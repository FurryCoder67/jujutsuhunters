#include <windows.h>
#include <wrl.h>
#include <wil/com.h>
#include <WebView2.h>
#include <string>
#include <sstream>

using namespace Microsoft::WRL;

// ── Config ────────────────────────────────────────────────────────────────────
static const wchar_t* APP_TITLE   = L"Jujutsu Hunters";
static const wchar_t* GAME_URL    = L"https://jujutsuhunters.vercel.app/hunters.html";
static const int      WIN_W       = 1280;
static const int      WIN_H       = 800;
static const wchar_t* WIN_CLASS   = L"JujutsuHuntersWnd";

// ── Globals ───────────────────────────────────────────────────────────────────
static HWND                                    g_hwnd      = nullptr;
static wil::com_ptr<ICoreWebView2Controller>   g_controller;
static wil::com_ptr<ICoreWebView2>             g_webview;

// ── Forward declarations ──────────────────────────────────────────────────────
LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
void InitWebView();
void ResizeWebView();

// ── Entry point ───────────────────────────────────────────────────────────────
int WINAPI WinMain(HINSTANCE hInst, HINSTANCE, LPSTR, int nCmdShow)
{
    // Register window class
    WNDCLASSEXW wc = {};
    wc.cbSize        = sizeof(wc);
    wc.lpfnWndProc   = WndProc;
    wc.hInstance     = hInst;
    wc.lpszClassName = WIN_CLASS;
    wc.hCursor       = LoadCursor(nullptr, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)GetStockObject(BLACK_BRUSH);
    // Load icon from resources if available, otherwise use default
    wc.hIcon         = LoadIcon(hInst, MAKEINTRESOURCE(1));
    if (!wc.hIcon) wc.hIcon = LoadIcon(nullptr, IDI_APPLICATION);
    RegisterClassExW(&wc);

    // Center window on screen
    int screenW = GetSystemMetrics(SM_CXSCREEN);
    int screenH = GetSystemMetrics(SM_CYSCREEN);
    int x = (screenW - WIN_W) / 2;
    int y = (screenH - WIN_H) / 2;

    g_hwnd = CreateWindowExW(
        0, WIN_CLASS, APP_TITLE,
        WS_OVERLAPPEDWINDOW,
        x, y, WIN_W, WIN_H,
        nullptr, nullptr, hInst, nullptr
    );

    if (!g_hwnd) {
        MessageBoxW(nullptr, L"Failed to create window.", APP_TITLE, MB_ICONERROR);
        return 1;
    }

    ShowWindow(g_hwnd, nCmdShow);
    UpdateWindow(g_hwnd);

    InitWebView();

    MSG msg = {};
    while (GetMessage(&msg, nullptr, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return (int)msg.wParam;
}

// ── Window procedure ──────────────────────────────────────────────────────────
LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp)
{
    switch (msg) {
    case WM_SIZE:
        ResizeWebView();
        return 0;
    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;
    }
    return DefWindowProcW(hwnd, msg, wp, lp);
}

// ── Resize WebView to fill window ─────────────────────────────────────────────
void ResizeWebView()
{
    if (!g_controller) return;
    RECT rc;
    GetClientRect(g_hwnd, &rc);
    g_controller->put_Bounds(rc);
}

// ── Inject JS helpers into every page ────────────────────────────────────────
static const wchar_t* INJECT_SCRIPT = LR"(
    // Expose native app API to the game
    window.electronAPI = {
        onUpdateAvailable: function(cb) {
            window._nativeUpdateCb = cb;
        }
    };
    // Suppress right-click context menu (game uses right-click for camera)
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    console.log('[JJH Desktop] Native app bridge loaded');
)";

// ── Initialize WebView2 ───────────────────────────────────────────────────────
void InitWebView()
{
    // User data folder next to the exe
    wchar_t exePath[MAX_PATH];
    GetModuleFileNameW(nullptr, exePath, MAX_PATH);
    std::wstring exeDir(exePath);
    exeDir = exeDir.substr(0, exeDir.rfind(L'\\'));
    std::wstring userDataDir = exeDir + L"\\WebView2Data";

    CreateCoreWebView2EnvironmentWithOptions(
        nullptr,
        userDataDir.c_str(),
        nullptr,
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            [](HRESULT hr, ICoreWebView2Environment* env) -> HRESULT
            {
                if (FAILED(hr) || !env) {
                    MessageBoxW(g_hwnd,
                        L"WebView2 Runtime not found.\n\n"
                        L"Please install it from:\n"
                        L"https://developer.microsoft.com/microsoft-edge/webview2/",
                        APP_TITLE, MB_ICONERROR);
                    PostQuitMessage(1);
                    return hr;
                }

                env->CreateCoreWebView2Controller(
                    g_hwnd,
                    Callback<ICoreWebView2CreateCoreWebView2ControllerCompletedHandler>(
                        [](HRESULT hr, ICoreWebView2Controller* ctrl) -> HRESULT
                        {
                            if (FAILED(hr) || !ctrl) return hr;

                            g_controller = ctrl;
                            g_controller->get_CoreWebView2(&g_webview);

                            // Settings
                            wil::com_ptr<ICoreWebView2Settings> settings;
                            g_webview->get_Settings(&settings);
                            settings->put_IsStatusBarEnabled(FALSE);
                            settings->put_AreDefaultContextMenusEnabled(FALSE);
                            settings->put_IsZoomControlEnabled(FALSE);

                            // Inject bridge script on every navigation
                            g_webview->AddScriptToExecuteOnDocumentCreated(
                                INJECT_SCRIPT, nullptr);

                            // Handle new-window requests (open in same view)
                            g_webview->add_NewWindowRequested(
                                Callback<ICoreWebView2NewWindowRequestedEventHandler>(
                                    [](ICoreWebView2* sender,
                                       ICoreWebView2NewWindowRequestedEventArgs* args) -> HRESULT
                                    {
                                        wil::unique_cotaskmem_string uri;
                                        args->get_Uri(&uri);
                                        args->put_Handled(TRUE);
                                        g_webview->Navigate(uri.get());
                                        return S_OK;
                                    }).Get(),
                                nullptr);

                            // Fit to window
                            ResizeWebView();

                            // Navigate to game
                            g_webview->Navigate(GAME_URL);

                            return S_OK;
                        }).Get());
                return S_OK;
            }).Get());
}
