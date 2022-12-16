import { Sequelize } from 'sequelize'
import { DbConfig } from '../config/index.js'
import UserModel from './user.model.js'
import RoleModel from './role.model.js'
import CustomerModel from './customer.model.js'

const sequelize = new Sequelize(DbConfig.DB, DbConfig.USER, DbConfig.PASSWORD, {
  host: DbConfig.HOST,
  dialect: DbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: DbConfig.pool.max,
    min: DbConfig.pool.min,
    acquire: DbConfig.pool.acquire,
    idle: DbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = UserModel(sequelize, Sequelize)
db.role = RoleModel(sequelize, Sequelize)
db.customer = CustomerModel(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})

db.ROLES = ['user', 'admin', 'moderator']

export default db
