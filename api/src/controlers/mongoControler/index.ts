import { MongoClient, ServerApiVersion, MongoClientOptions, Db, Collection } from 'mongodb'

interface constructorOptions {
    conn: {
        protocal: string, 
        user: string, 
        pass: string, 
        host: string, 
        port: string | number, 
    } | string
    options?: MongoClientOptions
}

export class MongoControler {

    private client: MongoClient
    private connPromise: Promise<MongoClient>
    private db: Db | undefined
    private collection: Collection | undefined

    constructor({
        conn,
        options
    }: constructorOptions) {
        if ( typeof conn === 'object' ) {
            const {
                protocal, 
                user, 
                pass, 
                host, 
                port
            } = conn;

            conn = `${protocal}://${user}:${pass}@${host}:${port}`
        }
        this.client = new MongoClient(conn,  {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
            ...options
        });
        this.connPromise = this.client.connect()
    }

    public getInUseDb(): Db {
        if (!this.db) {
            throw Error('no db in use')
        }

        return this.db
    }

    public getInUseCollection(): Collection {
        if (!this.collection) {
            throw Error('no collection in use')
        }

        return this.collection
    }

    async getDb(dbName: string): Promise<Db> {
        await this.connPromise;
        return this.client.db(dbName);
    }

    async useDb(dbName: string): Promise<Db> {
        this.db = await this.getDb(dbName)
        return this.db
    }

    async getCollection(collName: string): Promise<Collection> {
        return this.getInUseDb().collection(collName)
    }

    async useCollection(collName: string): Promise<Collection> {
        this.collection = await this.getCollection(collName)
        return this.collection
    }

    async dumpCollection(): Promise<any> {
        return (await this.getInUseCollection().find({})).toArray()
    }

    async addDocument(document: any): Promise<void> {
        await this.getInUseCollection().insertOne(
            document
        )
    }
}