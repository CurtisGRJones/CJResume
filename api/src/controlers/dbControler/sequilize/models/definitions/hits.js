const { DataTypes } = require('sequelize')

const hits =  {
    name: 'hits',
    fields: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            // allowNull: false,
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
    },
    associations: [
        {
            modelName: 'user',
            relationship: 'belongsTo',
            options: {
                key: 'id',
                as: 'userId',
                onDelete: 'SET NULL',
            }
        }
    ]
}

module.exports = hits