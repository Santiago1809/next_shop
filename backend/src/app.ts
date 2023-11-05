import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/product.routes'
export const app = express()

const corsOptions = {
  origin: 'http://localhost:3001'
}
app.use(cors(corsOptions))
app.use('/products', productRoutes)
app.use(morgan('combined'))
