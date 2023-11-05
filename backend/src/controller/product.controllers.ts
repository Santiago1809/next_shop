import { type Request, type Response } from 'express'
import Product from '../models/Product'

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Product.findByIdAndUpdate('654708d0dd2603e225734d2f', {
      name: 'Redmi Note 10'
    })
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching products' })
  }
}
