import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET_JWT

export const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {
    algorithm: "HS256",
    expiresIn: "1h"
  })
  return token
}