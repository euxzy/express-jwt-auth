import { authJwt } from '../middleware/index.js'
import { UserController } from '../controllers/index.js'
import { Router } from 'express'

const { adminBoard, moderatorBoard, userBoard, allAccess } = UserController
const { isAdmin, isModerator, verifyToken } = authJwt

const UserRouter = Router()

UserRouter.get('/all', allAccess)
UserRouter.get('/user', [verifyToken], userBoard)
UserRouter.get('/mod', [verifyToken, isModerator], moderatorBoard)
UserRouter.get('/admin', [verifyToken, isAdmin], adminBoard)

export default UserRouter
