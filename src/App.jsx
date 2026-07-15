


import './styles/app.css'
import Header from "./components/Header"
import Body from './components/Body'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false)

  const products = [
    { id:1, name: "Apple", category: "Fruit", price: "$1", stock: "true" },
    { id:2, name: "Dragon fruit", category: "Fruit", price: "$3", stock: "true" },
    { id:3, name: "Passion fruit", category: "Fruit", price: "$2", stock: "false" },
    { id:4, name: "Spinach", category: "Vegetable", price: "$7", stock: "false" },
    { id:5, name: "Pumpkin", category: "Vegetable", price: "$4", stock: "true" },
    { id:6, name: "Peas", category: "Vegetable", price: "$6", stock: "false" },
  ]

  const productsToShow = isStockOnly
  ? products.filter((product) => product.stock === "true")
  : products;

  return (
    <>
    <main className='main'>
      <Header 
      key={products.id} 
      products={products} 
      search={search} 
      setSearch={setSearch}
      isStockOnly={isStockOnly}
      setIsStockOnly={setIsStockOnly} />
      <Body key={productsToShow.id} products={productsToShow} search={search}></Body>
    </main>
    </>
  )
}

export default App
