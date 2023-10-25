require('dotenv').config({
    path: '../../../../../.env'
}); 

console.log(process.env)

const { sequelize } = require('./index')

sequelize.sync()