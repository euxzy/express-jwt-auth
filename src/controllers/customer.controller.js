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

const showCust = (req, res) => {
  Customer.findByPk(req.params.id).then((cust) => {
    res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Get Data Successfully!',
      data: cust,
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

const update = (req, res) => {
  Customer.findByPk(req.params.id).then((cust) => {
    if (req.body.name) cust.name = req.body.name
    if (req.body.username) cust.username = req.body.username
    if (req.body.email) cust.email = req.body.email
    if (req.body.password) cust.password = bcrypt.hashSync(req.body.password, 8)

    cust.save()

    res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Update data Success!',
      data: cust,
    })
  })
}

export { showAll, showCust, create, update }
