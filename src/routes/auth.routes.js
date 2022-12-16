import {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} from '../middleware/verifySignUp.js'
import { AuthController } from '../controllers/index.js'
import { Router } from 'express'

const { signin, signup } = AuthController

const AuthRouter = Router()

AuthRouter.post(
  '/signup',
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  signup
)

AuthRouter.post('/signin', signin)

export default AuthRouter
