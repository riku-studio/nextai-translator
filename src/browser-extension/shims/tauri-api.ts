/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

export type UnlistenFn = () => void

export type Event<T = unknown> = {
    event: string
    id: number
    payload: T
    windowLabel: string
}

export const listen = async (): Promise<UnlistenFn> => {
    return () => {}
}

export const once = async (): Promise<UnlistenFn> => {
    return () => {}
}

export const emit = async (): Promise<void> => {}

export const emitTo = async (): Promise<void> => {}

export class LogicalSize {
    type = 'Logical'

    constructor(
        public width: number,
        public height: number
    ) {}
}

export class PhysicalSize {
    type = 'Physical'

    constructor(
        public width: number,
        public height: number
    ) {}
}

export class LogicalPosition {
    type = 'Logical'

    constructor(
        public x: number,
        public y: number
    ) {}
}

export class PhysicalPosition {
    type = 'Physical'

    constructor(
        public x: number,
        public y: number
    ) {}
}

export const currentMonitor = async (): Promise<null> => null

class BrowserWebviewWindow {
    label: string

    constructor(label = 'main') {
        this.label = label
    }

    static getCurrent(): BrowserWebviewWindow {
        return new BrowserWebviewWindow()
    }

    static getByLabel(): BrowserWebviewWindow | null {
        return null
    }

    static async getFocusedWindow(): Promise<BrowserWebviewWindow | null> {
        return null
    }

    async listen(): Promise<UnlistenFn> {
        return () => {}
    }

    async once(): Promise<UnlistenFn> {
        return () => {}
    }

    async emit(): Promise<void> {}

    async onMoved(): Promise<UnlistenFn> {
        return () => {}
    }

    async onResized(): Promise<UnlistenFn> {
        return () => {}
    }

    async onCloseRequested(): Promise<UnlistenFn> {
        return () => {}
    }

    async onFocusChanged(): Promise<UnlistenFn> {
        return () => {}
    }

    async center(): Promise<void> {}

    async setPosition(): Promise<void> {}

    async setSize(): Promise<void> {}

    async setMinSize(): Promise<void> {}

    async setMaxSize(): Promise<void> {}

    async unminimize(): Promise<void> {}

    async setFocus(): Promise<void> {}

    async show(): Promise<void> {}

    async hide(): Promise<void> {}

    async close(): Promise<void> {}
}

export const WebviewWindow = BrowserWebviewWindow

export const Effect = {
    AppearanceBased: 'AppearanceBased',
    Light: 'Light',
    Dark: 'Dark',
}

export class Channel<T = unknown> {
    onmessage?: (message: T) => void

    constructor(onmessage?: (message: T) => void) {
        this.onmessage = onmessage
    }
}

export const invoke = async (): Promise<never> => {
    throw new Error('Tauri invoke is not available in the browser extension.')
}

export const BaseDirectory = {
    Audio: 1,
    Cache: 2,
    Config: 3,
    Data: 4,
    LocalData: 5,
    Desktop: 6,
    Document: 7,
    Download: 8,
    Executable: 9,
    Font: 10,
    Home: 11,
    Picture: 12,
    Public: 13,
    Runtime: 14,
    Template: 15,
    Video: 16,
    Resource: 17,
    App: 18,
    Log: 19,
    Temp: 20,
    AppConfig: 21,
    AppData: 22,
    AppLocalData: 23,
    AppCache: 24,
    AppLog: 25,
}

export const writeTextFile = async (): Promise<void> => {}

export const readFile = async (): Promise<never> => {
    throw new Error('Tauri file access is not available in the browser extension.')
}

export type ProxyConfig = {
    url: string
    noProxy?: string
    basicAuth?: {
        username: string
        password: string
    }
}

export type Proxy = {
    all?: ProxyConfig
    http?: ProxyConfig
    https?: ProxyConfig
}

export const fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    return globalThis.fetch(input, init)
}

export const appCacheDir = async (): Promise<string> => ''

export const join = async (...paths: string[]): Promise<string> => paths.filter(Boolean).join('/')

export const convertFileSrc = (filePath: string): string => filePath

export const open = async (): Promise<void> => {}

export const isEnabled = async (): Promise<boolean> => false

export const enable = async (): Promise<void> => {}

export const disable = async (): Promise<void> => {}

export const register = async (): Promise<void> => {}

export const unregister = async (): Promise<void> => {}

export const isRegistered = async (): Promise<boolean> => false

export const check = async (): Promise<null> => null

export const relaunch = async (): Promise<void> => {}

export const sendNotification = async (): Promise<void> => {}
