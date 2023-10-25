import { BelongsToManyOptions, ModelStatic } from "sequelize"
import { DbConnection } from "../connection"
import definitions from "./definitions"
import { Association } from "./definitions/types"

const models: { [id: string]: ModelStatic<any> } = {}

const modelAssociations: { [modelName: string]: Association[] } = {}

for (const definition of Object.values(definitions)) {
    const model = DbConnection.define(
        definition.name,
        definition.fields
    )
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
                fromModel.belongsToMany(toModel, (opts as BelongsToManyOptions))
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

export default models