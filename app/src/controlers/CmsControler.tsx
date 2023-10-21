import { ApiControler } from "./ApiControler";

export class CmsControler extends ApiControler{

    constructor() {
        super()
    }

    async getResumeData() {
        return (await this.get('cms/resume')).data.data
    }
}