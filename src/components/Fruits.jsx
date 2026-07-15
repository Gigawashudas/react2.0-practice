



import Fruit from "./Fruit.jsx"
export default function Fruits({products}) {
    return (
        <div className="fruits"
        style={{minHeight: "100px"}}>
            <h2 style={{margin: "0 0 5px 0"}}>Fruits</h2>
            {
                products.filter(product => product.category === "Fruit")
                .map( product => {
                    return (
                    <Fruit key={product.id} name={product.name} price={product.price}></Fruit>
                )
                })
            }
        </div>
    )
}