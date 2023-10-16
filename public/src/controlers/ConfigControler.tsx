import { ApiControler } from "./ApiControler";

export class ConfigControler {

    api: ApiControler
    config: { [i: string]: any } = {}

    constructor() {
        this.api = new ApiControler()
    }
    async getConfig() {
        this.config = (await this.api.get('config')).data.data
        return this.config
    }
}