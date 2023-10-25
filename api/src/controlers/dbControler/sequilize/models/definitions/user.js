const { DataTypes } = require('sequelize')

// TODO make this paranoid

const user = {
    name: 'user',
    fields: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey: true
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    associations: [
        //{
            //modelName: 'hits',
            //relationship: 'hasMany'
        //}
    ]
}

module.exports = user