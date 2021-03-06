const Sequelize = require('sequelize')
const path = require('path')

const config = require('../config')

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    ...config.db,
    dialect: 'mysql'
  }
)

const Logs = sequelize.import(
  path.join(__dirname, 'logs.js')
)

const Users = sequelize.import(
  path.join(__dirname, 'users.js')
)


Users.hasMany(Logs)
Logs.belongsTo(Users)

const db = {}

db[Users.name] = Users
db[Logs.name] = Logs

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
