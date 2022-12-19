import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
import { verifySignUp } from '../middleware/index.js'

const AuthRouter = Router()
const { signin, signup } = AuthController
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = verifySignUp

AuthRouter.post(
  '/signup',
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  signup
)

AuthRouter.post('/signin', signin)

export default AuthRouter
