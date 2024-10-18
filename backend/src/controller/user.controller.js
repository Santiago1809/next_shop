import {prisma} from '../lib/prisma.js'
import { createToken } from '../middleware/jwt.middleware.js'

export const register = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    }
  })
  const token = createToken({email: user.email, user: user.name, cart:[], logged: []})
  res.json(token)
}