import bcrypt from 'bcryptjs'
import db from '../models/index.js'

const { customer: Customer } = db

const create = (req, res) => {
  Customer.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Create data Successfully!',
    data: req.body,
  })
}

export { create }
