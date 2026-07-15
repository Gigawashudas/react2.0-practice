



import Vegetable from "./Vegetable.jsx"
export default function Vegetables({products}) {
    return (
        <div>
            <h2 style={{margin: "0 0 10px 0"}}>Vegetables</h2>
            {
                products.filter(product => product.category === "Vegetable")
                .map( product => {
                    return (
                    <Vegetable key={product.id} name={product.name} price={product.price}></Vegetable>
                )
                })
            }
        </div>
    )
}