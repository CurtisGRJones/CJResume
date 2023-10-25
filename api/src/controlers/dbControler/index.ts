import { DbConnection } from "./connection";
import models from './models'

class DbControler {
    connection = DbConnection

    getModles = () => {
        return models
    }

    getModel = (name:string) => {
        return models[name]
    }
}