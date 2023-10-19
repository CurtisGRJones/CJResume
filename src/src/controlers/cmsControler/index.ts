import { MongoControler } from '../mongoControler';

export class CmsControler {

    // TODO determine if these should be static
    private client: MongoControler
    private useDbPromise: Promise<unknown>

    constructor() {
        const {
            MONGO_USER: mongoUser,
            MONGO_PASS: mongoPass,
            MONGO_HOST: mongoHost,
            MONGO_PORT: mongoPort
        } = process.env

        if( !( mongoUser && mongoPass && mongoHost && mongoPort ) ) {
            throw Error('Missing the following ENV vard to connect to mongoDb' +
                (!mongoUser ? '\nMONGO_USER' : '') +
                (!mongoPass ? '\nMONGO_PASS' : '') +
                (!mongoHost ? '\nMONGO_HOST' : '') +
                (!mongoPort ? '\nMONGO_PORT' : '')
            )
        }

        this.client = new MongoControler(
            'mongodb',
            mongoUser,
            mongoPass,
            mongoHost,
            mongoPort
        )

        this.useDbPromise = this.client.useDb('cms');
    }

    // TODO type this
    async getResume(): Promise<any> {
        await this.useDbPromise

        await this.client.useCollection('resume');
        return this.client.dumpCollection();
    }
    
}