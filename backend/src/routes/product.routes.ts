import { Router } from 'express'
import { getProducts } from '../controller/product.controllers'
const router = Router()

router.get('/', getProducts)

export default router
