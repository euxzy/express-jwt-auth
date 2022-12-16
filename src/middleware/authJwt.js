import jwt from 'jsonwebtoken'
import { AuthConfig } from '../config/index.js'
import db from '../models/index.js'

const { user: User } = db

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']

  if (!token) return res.status(403).send({ message: 'No token provided!' })

  jwt.verify(token, AuthConfig.secret, (err, decode) => {
    if (err) return res.status(401).send({ message: 'Unathorized!' })
    req.userId = decode.id
    next()
  })
}

const role = (roleName) => {
  return (req, res, next) => {
    User.findByPk(req.userId).then((user) => {
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === roleName) {
            next()
            return
          }
        }
        res.status(403).send({ message: `Require ${roleName} Role!` })
        return
      })
    })
  }
}

const isAdmin = role('admin')
const isModerator = role('moderator')

const isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          next()
          return
        }
        if (roles[i].name === 'moderator') {
          next()
          return
        }
      }
      res.status(403).send({ message: 'Require Moderator or Admin Role!' })
      return
    })
  })
}

export { verifyToken, isAdmin, isModerator, isModeratorOrAdmin }
