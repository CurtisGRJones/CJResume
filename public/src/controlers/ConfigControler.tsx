import { ApiControler } from "./ApiControler";

export class ConfigControler extends ApiControler{
    config: { [i: string]: any } = {}

    constructor() {
        super();
    }
    
    async getConfig() {
        this.config = (await this.get('config')).data.data
        return this.config
    }
}