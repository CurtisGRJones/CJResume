// import { Sequelize, BelongsToManyOptions, ModelStatic } from "sequelize"
// import { DbConnection } from "../../connection"
// import definitions from "./definitions"

const { Sequelize } = require('sequelize')
const definitions = require('./definitions')

console.log(definitions)

console.log('HERE')

// TODO look into https://sequelize.org/docs/v6/other-topics/typescript/
// https://blog.logrocket.com/using-sequelize-with-typescript/

const {
    MYSQL_USER: mySqlUser,
    MYSQL_PASS: mySqlPass,
    MYSQL_HOST: mySqlHost,
    MYSQL_PORT: mySqlPort,
    MYSQL_DB_NAME: mySqlDbName,
} = process.env

if (!(mySqlUser && mySqlPass && mySqlHost && mySqlPort && mySqlDbName)) {
    throw Error('MySQL vars not set')
}

const sequelize = new Sequelize(
    mySqlDbName,
    mySqlUser,
    mySqlPass,
    {
        host: mySqlHost,
        // TODO check this is a valid number before hand
        port: Number(mySqlPort),
        dialect: 'mysql'
    }
);

const models = {} // : { [id: string]: ModelStatic<any> }

const modelAssociations = {} // : { [modelName: string]: Association[] }

for (const definition of Object.values(definitions)) {
    console.log(definition.name)
    console.log(definition.fields)
    const model = sequelize.define(
        definition.name,
        definition.fields
    )
    console.log(model)
    models[definition.name] = model
    modelAssociations[definition.name] = definition.associations
}

for ( const fromModelName of Object.keys(modelAssociations) ) {
    const fromModel = models[fromModelName]
    const associations = modelAssociations[fromModelName]
    for ( const association of associations ) {
        const toModelName = association.modelName
        const toModel = models[toModelName]
        const opts = association.options
        const relationship = association.relationship

        try {
        switch (relationship) {
            case 'hasOne':
                fromModel.hasOne(toModel, opts)
                break;
            case 'belongsTo':
                fromModel.belongsTo(toModel, opts)
                break;
            case 'hasMany':
                fromModel.hasMany(toModel, opts)
                break;
            case 'belongsToMany':
                fromModel.belongsToMany(toModel, opts)//(opts as BelongsToManyOptions))
                break;
            default:
                throw Error(`Association does not exist`)
        }
        } catch (e) {
            console.error (
                `[api/src/controlers/dbControler/models/index.ts] Assosiation ${relationship} failed to be applied from ` +
                `${fromModelName} to ${toModelName} with error:\n${e}`
            )
        }
    }
}

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    models: models
}