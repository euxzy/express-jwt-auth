import { Router } from 'express'
import { CustomerController } from '../controllers/index.js'
import { verifyCustomer } from '../middleware/index.js'
import { authJwt } from '../middleware/index.js'

const CustomerRouter = Router()
const { showAll, showCust, create, update, destroy } = CustomerController
const { checkDuplicateUsernameOrEmail } = verifyCustomer
const { verifyToken, isModeratorOrAdmin } = authJwt

CustomerRouter.get('/', [verifyToken], showAll)
CustomerRouter.get('/:id', [verifyToken], showCust)
CustomerRouter.post(
  '/create',
  [checkDuplicateUsernameOrEmail, verifyToken, isModeratorOrAdmin],
  create
)
CustomerRouter.put('/update/:id', [verifyToken, isModeratorOrAdmin], update)
CustomerRouter.delete('/delete', [verifyToken, isModeratorOrAdmin], destroy)

export default CustomerRouter
