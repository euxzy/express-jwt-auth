const DbConfig = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'postgres',
  DB: 'express_jwt',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

export default DbConfig
