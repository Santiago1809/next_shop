export type Product = {
  id: number;
  name: string;
  price: number;
  created_at: Date;
  categoryId: number;
  stock: number;
  owner_id: number;
}