import { urlJoin } from 'url-join-ts'
import { getUniversalFetch } from '../universal-fetch'
import { getSettings } from '../utils'
import { AbstractOpenAI } from './abstract-openai'
import { IModel } from './interfaces'

export class LiteLLM extends AbstractOpenAI {
    supportCustomModel(): boolean {
        return true
    }

    async listModels(apiKey: string | undefined): Promise<IModel[]> {
        if (!apiKey) {
            return []
        }
        const apiURL = await this.getAPIURL()
        if (!apiURL) {
            return []
        }
        const url = urlJoin(apiURL, '/v1/models')
        const fetcher = getUniversalFetch()
        const response = await fetcher(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        })
        if (response.status !== 200) {
            return []
        }
        const json = await response.json()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (json.data ?? []).map((model: any) => {
            return {
                id: model.id,
                name: model.id,
            }
        })
    }

    async getAPIModel(): Promise<string> {
        const settings = await getSettings()
        return settings.litellmAPIModel
    }

    async getAPIKey(): Promise<string> {
        const settings = await getSettings()
        return settings.litellmAPIKey
    }

    async getAPIURL(): Promise<string> {
        const settings = await getSettings()
        return settings.litellmAPIURL
    }

    async getAPIURLPath(): Promise<string> {
        const settings = await getSettings()
        return settings.litellmAPIURLPath
    }
}
