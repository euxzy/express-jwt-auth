import {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} from '../middleware/verifySignUp.js'
import { signin, signup } from '../controllers/auth.controller.js'

const AuthRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.post(
    '/api/auth/signup',
    [checkDuplicateUsernameOrEmail, checkRolesExisted],
    signup
  )

  app.post('/api/auth/signin', signin)
}

export default AuthRoutes
