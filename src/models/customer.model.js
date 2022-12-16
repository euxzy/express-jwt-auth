const CustomerModel = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customers', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  })
  return Customer
}

export default CustomerModel
