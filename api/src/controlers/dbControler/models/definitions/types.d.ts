import { BelongsToManyOptions, HasOneOptions, BelongsToOptions, HasManyOptions, ModelAttributes } from "sequelize";

interface BTMAccociation {
    relationship: "belongsToMany"
    modelName: string,
    options: BelongsToManyOptions
}

type Association<T = "hasOne" | "belongsTo" | "hasMany"> = {
    relationship: T
    modelName: string,
    options?: {
        "hasOne" : HasOneOptions | undefined,
        "belongsTo": BelongsToOptions | undefined,
        "hasMany": HasManyOptions | undefined,
    }[T] 
} | BTMAccociation

interface Definition {
    name: string,
    fields: ModelAttributes,
    associations: Association[]
}