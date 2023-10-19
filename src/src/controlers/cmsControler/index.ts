import { MongoControler } from '../mongoControler';

export class CmsControler {

    private client: MongoControler

    constructor() {
        // TODO error check
        
        this.client = new MongoControler(
            process.env.MONGO_USER,
            process.env.MONGO_PASS,
            process.env.MONGO_HOST,
            process.env.MONGO_PORT
        )
    }
    
}