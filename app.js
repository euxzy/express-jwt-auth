const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const corsOptions = {
  origin: 'http://localhost:3001',
}

const db = require('./src/models')
const Role = db.role

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and ResyncDb')
  initial()
})

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const initial = () => {
  Role.create({
    id: 1,
    name: 'user',
  })

  Role.create({
    id: 2,
    name: 'moderator',
  })

  Role.create({
    id: 3,
    name: 'admin',
  })
}

app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

require('./src/routes/auth.routes')(app)
require('./src/routes/user.routes')(app)

app.listen(port, () => {
  console.log(`Server running on port ${3000}`)
})
