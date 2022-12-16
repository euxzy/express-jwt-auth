import { Router } from 'express'

const CustomerRouter = Router()

CustomerRouter.get('/', (req, res) => {
  res.send({
    status: true,
    statusCode: 200,
    message: 'Get Data Customer Success!',
    data: {},
  })
})
CustomerRouter.post('/', (req, res) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Create Customer Success!',
    data: req.body,
  })
})
CustomerRouter.put('/', (req, res) => {
  const data = {
    name: 'Fulanah',
    username: 'fulanah',
    email: 'fulanah@mail.com',
    password: '12345678',
  }

  const newData = { ...data }

  if (req.body.name) {
    newData.name = req.body.name
  }
  if (req.body.username) {
    newData.username = req.body.username
  }
  if (req.body.email) {
    newData.email = req.body.email
  }
  if (req.body.password) {
    newData.password = req.body.password
  }

  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Create Customer Success!',
    data: {
      oldData: data,
      newData,
    },
  })
})

export default CustomerRouter
