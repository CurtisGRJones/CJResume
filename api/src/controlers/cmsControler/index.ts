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
            MONGO_PORT: mongoPort,
            MONGO_CONN_STRING: mongoConString
        } = process.env

        if( !( mongoUser && mongoPass && mongoHost && mongoPort ) && ! mongoConString) {
            throw Error('Missing the following ENV vars to connect to mongoDb' +
                (!mongoUser ? '\nMONGO_USER' : '') +
                (!mongoPass ? '\nMONGO_PASS' : '') +
                (!mongoHost ? '\nMONGO_HOST' : '') +
                (!mongoPort ? '\nMONGO_PORT' : '') +
                "\nOr\n" +
                (!mongoConString ? '\MONGO_CONN_STRING' : '')
            )
        }

        const conn = mongoConString || {
            protocal: 'mongodb',
            user: String(mongoUser),
            pass: String(mongoPass),
            host: String(mongoHost),
            port: String(mongoPort)
        }

        this.client = new MongoControler({ conn } )
        
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