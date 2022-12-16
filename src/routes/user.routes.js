import { authJwt } from '../middleware/index.js'
import { UserController } from '../controllers/index.js'

const { adminBoard, moderatorBoard, userBoard, allAccess } = UserController

const UserRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.get('/api/test/all', allAccess)
  app.get('/api/test/user', [authJwt.verifyToken], userBoard)
  app.get(
    '/api/test/mod',
    [authJwt.verifyToken, authJwt.isModerator],
    moderatorBoard
  )
  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)
}

export default UserRoutes
