



import Fruits from './Fruits.jsx'
import Vegetables from "./Vegetables.jsx"
export default function Body({products, search}) {

    const filteredProduct = products.filter( product => product.name.toLowerCase().includes(search.toLowerCase()))
    
    const displayProducts = search ? filteredProduct : products

    return (
        <div className="body">
            <div className='thead'>
                <span className="thname">Name</span>
                <span>Price</span>
                <span>Quantity</span>
            </div>
            <Fruits key={displayProducts.id} products={displayProducts}></Fruits>
            <Vegetables key={displayProducts.id} products={displayProducts}></Vegetables>
        </div>
    )
}