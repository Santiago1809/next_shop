"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Products from "@/app/components/Products/Products"
export default function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    await fetch('http://localhost/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <main>
      <Header />
      <section className="flex">
        <Products products={ products }/>
      </section>
    </main>
  )
}
