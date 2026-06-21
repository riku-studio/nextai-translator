/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

const noopAsync = async () => {}
const unavailableCommand = async () => {
    throw new Error('Tauri commands are not available in the browser extension.')
}

export const commands = new Proxy<Record<string, (...args: any[]) => Promise<any>>>(
    {},
    {
        get(_target, prop) {
            if (prop === 'getConfigContent') {
                return async () => '{}'
            }
            return unavailableCommand
        },
    }
)

const createEvent = () => ({
    listen: async () => () => {},
    emit: noopAsync,
})

export const events = new Proxy<Record<string, ReturnType<typeof createEvent>>>(
    {},
    {
        get() {
            return createEvent()
        },
    }
)
