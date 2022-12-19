import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import db from './src/models/index.js'
import { routes } from './src/routes/index.js'
import { SeedRole } from './src/seeders/index.js'

const app = express()
const port = process.env.PORT || 3000
const corsOptions = {
  origin: 'http://localhost:3001',
}

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and ResyncDb')
  SeedRole()
})

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

routes(app)

app.listen(port, () => {
  console.log(`Server running on port ${3000}`)
})
