import { Router } from "express"
import { prisma } from "../lib/prisma.js";

const router = Router()

router.get('/categories', async (req, res) => {
  const categories = await prisma.category.findMany()
  res.json(categories)
})
router.post('/categories', async (req, res) => {
  const category = await prisma.category.create({
    data: req.body
  })
  res.json(category)
})

export default router