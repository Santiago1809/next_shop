import Header from "./components/Header/Header";
import Products from "@/app/components/Products/Products"
export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex">
        <Products />
      </section>
    </main>
  )
}
