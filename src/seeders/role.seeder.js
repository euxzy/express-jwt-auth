import db from '../models/index.js'

const { role: Role } = db

const SeedRole = () => {
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

export default SeedRole
