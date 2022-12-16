import { Router } from 'express'
import { CustomerController } from '../controllers/index.js'

const CustomerRouter = Router()
const { showAll, showCust, create, update } = CustomerController

CustomerRouter.get('/', showAll)
CustomerRouter.get('/:id', showCust)
CustomerRouter.post('/create', create)
CustomerRouter.put('/update/:id', update)

export default CustomerRouter
