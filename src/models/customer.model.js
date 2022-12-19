const CustomerModel = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customers', {
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
    address: {
      type: Sequelize.TEXT,
    },
  })
  return Customer
}

export default CustomerModel
