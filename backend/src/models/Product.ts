import { Schema, model, type Document, type Model } from 'mongoose'

export interface IProduct extends Document {
  name: string
  price: number
  available: boolean
}

const ProductSchema: Schema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, required: true }
})

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema)

export default Product
