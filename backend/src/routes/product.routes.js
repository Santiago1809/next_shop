import { Router } from "express";
import { prisma } from "../lib/prisma.js";
const router = Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});
router.post("/products", async (req, res) => {
  const product = await prisma.product.create({
    data: req.body
  })
  res.json(product);
});

export default router;
