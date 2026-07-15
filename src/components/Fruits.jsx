


import '../styles/fruits.css'
import Fruit from "./Fruit.jsx"
export default function Fruits({products}) {
    return (
        <div className="fruits">
            <h2>Fruits</h2>
            {
                products.filter(product => product.category === "Fruit").map( product => {
                    return (
                    <Fruit key={product.id} name={product.name} price={product.price}></Fruit>
                )
                })
            }
        </div>
    )
}