import { defineConfig } from 'vite'
import webExtension from '@samrum/vite-plugin-web-extension'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath, URL } from 'url'
import { getManifest } from './src/browser-extension/manifest'

const isDev = process.env.NODE_ENV === 'development'
const tauriAPIShim = fileURLToPath(new URL('./src/browser-extension/shims/tauri-api.ts', import.meta.url))
const tauriBindingsShim = fileURLToPath(new URL('./src/browser-extension/shims/tauri-bindings.ts', import.meta.url))
const aptabaseTauriShim = fileURLToPath(new URL('./src/browser-extension/shims/aptabase-tauri.ts', import.meta.url))

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        svgr(),
        webExtension({
            manifest: getManifest('chromium'),
            useDynamicUrlWebAccessibleResources: false,
        }),
    ],
    resolve: {
        alias: [
            { find: '@tauri-apps/api/event', replacement: tauriAPIShim },
            { find: '@tauri-apps/api/webviewWindow', replacement: tauriAPIShim },
            { find: '@tauri-apps/api/window', replacement: tauriAPIShim },
            { find: '@tauri-apps/api/dpi', replacement: tauriAPIShim },
            { find: '@tauri-apps/api/core', replacement: tauriAPIShim },
            { find: '@tauri-apps/api/path', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-fs', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-http', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-shell', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-autostart', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-notification', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-global-shortcut', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-updater', replacement: tauriAPIShim },
            { find: '@tauri-apps/plugin-process', replacement: tauriAPIShim },
            { find: '@aptabase/tauri', replacement: aptabaseTauriShim },
            { find: '@/tauri/bindings', replacement: tauriBindingsShim },
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
    build: {
        minify: !isDev,
        sourcemap: isDev,
        target: 'chrome105',
        rollupOptions: {
            output: {
                dir: 'dist/browser-extension/chromium',
            },
        },
    },
})
