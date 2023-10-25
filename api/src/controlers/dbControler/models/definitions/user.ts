import { DataTypes } from "sequelize";
import { Definition } from "./types";

const user: Definition = {
    name: 'user',
    fields: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    associations: [
        {
            modelName: 'hits',
            relationship: 'hasMany'
        }
    ]
}

export default user