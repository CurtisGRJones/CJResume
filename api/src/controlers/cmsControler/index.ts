import { MongoControler } from '../mongoControler';
import { cms as cmsSeedData } from '../../seedData';

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
            throw Error('Missing the following ENV vars to connect to mongoDb' +
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
        
        // TODO make db if does not exist
        this.useDbPromise = this.client.useDb('cms');
    }

    async seedDb(): Promise<void> {
        for (const collection of Object.keys(cmsSeedData)) {
            await this.client.useCollection(collection)
            const data = cmsSeedData[collection]
            if ( Array.isArray(data) ) {
                console.error(`Bulk addition is not implemented. collection: ${collection}`)
            } else {
                await this.client.addDocument(cmsSeedData[collection])
            }
        }
    }

    // TODO type this
    async getResume(): Promise<any> {
        await this.useDbPromise

        await this.client.useCollection('resume');
        return this.client.dumpCollection();
    }
    
}