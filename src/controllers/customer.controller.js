import bcrypt from 'bcryptjs'
import db from '../models/index.js'

const { customer: Customer } = db

const showAll = (req, res) => {
  Customer.findAll().then((custs) => {
    if (custs.length > 0) {
      res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Get All Data Successfully!',
        data: custs,
      })
    } else {
      res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'No Customer Here!',
      })
    }
  })
}

const showCust = (req, res) => {
  Customer.findByPk(req.params.id).then((cust) => {
    if (cust) {
      res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Get Data Successfully!',
        data: cust,
      })
    } else {
      res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Customer Not Found!',
      })
    }
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
    if (cust) {
      if (req.body.name) cust.name = req.body.name
      if (req.body.username) cust.username = req.body.username
      if (req.body.email) cust.email = req.body.email
      if (req.body.password)
        cust.password = bcrypt.hashSync(req.body.password, 8)

      cust.save()

      res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Update data Success!',
        data: cust,
      })
    } else {
      res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Customer Not Found!',
      })
    }
  })
}

const destroy = (req, res) => {
  const { username } = req.body
  Customer.findOne({ where: { username } }).then((cust) => {
    if (cust) {
      Customer.destroy({ where: { username } }).then(() => {
        res.status(200).send({
          status: true,
          statusCode: 200,
          message: `Customer with username ${username} has been deleted!`,
        })
      })
    } else {
      res.status(404).send({
        status: false,
        statusCode: 404,
        message: `Customer with username ${username} not found!`,
      })
    }
  })
}

export { showAll, showCust, create, update, destroy }
