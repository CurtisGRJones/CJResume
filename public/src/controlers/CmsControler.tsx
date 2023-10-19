import { ApiControler } from "./ApiControler";

export class ConfigControler extends ApiControler{

    constructor() {
        super()
    }
    async getCmsData(content: string) {
        return (await this.post('cms', {
            content
        })).data.data
    }
}