import db from '../models/index.js'

const { customer: Customer } = db

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // username
  Customer.findOne({
    where: {
      username: req.body.username,
    },
  }).then((cust) => {
    if (cust) {
      res.status(400).send({ message: 'Failed! Username is already in use!' })
      return
    }

    // email
    Customer.findOne({
      where: {
        email: req.body.email,
      },
    }).then((cust) => {
      if (cust) {
        res.status(400).send({ message: 'Failed! Email is already in use!' })
        return
      }
      next()
    })
  })
}

export { checkDuplicateUsernameOrEmail }
