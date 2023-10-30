import models from './sequilize/models'
class DbControler {
    getModles = () => {
        return models
    }

    getModel = (name:string) => {
        return models[name]
    }
}