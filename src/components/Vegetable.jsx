



import CountBtn from './CountBtn.jsx'
export default function Vegetable({name, price}) {
    return (
        <div className="fruit">
            <span className='name'>{name}</span>
            <span>{price}</span>
            <div>
                <CountBtn></CountBtn>
            </div>
        </div>
    )
}