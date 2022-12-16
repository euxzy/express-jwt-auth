import bcrypt from 'bcryptjs'
import db from '../models/index.js'

const { customer: Customer } = db

const showAll = (req, res) => {
  Customer.findAll().then((custs) => {
    res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Get All Data Successfully!',
      data: custs,
    })
  })
}

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
    message: 'Create Data Successfully!',
    data: req.body,
  })
}

export { showAll, create }
