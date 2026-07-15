


import '../styles/fruit.css'
import CountBtn from './CountBtn.jsx'
export default function Vegetable({name, price}) {
    const style = {
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <div style={style} className="fruit">
            <span className='name'>{name}</span>
            <span>{price}</span>
            <div>
                <CountBtn></CountBtn>
            </div>
        </div>
    )
}