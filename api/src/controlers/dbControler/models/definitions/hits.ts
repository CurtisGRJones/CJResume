import { DataTypes } from "sequelize";
import { Definition } from "./types";

const hits: Definition =  {
    name: 'hits',
    fields: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: true,

        },
    },
    associations: [
        {
            modelName: '',
            relationship: 'belongsTo',
        }
    ]
}

export default hits