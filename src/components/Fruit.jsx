



import CountBtn from './CountBtn.jsx'
export default function Fruit({name, price}) {

    return (
        <div className="fruit">
    <span className="name">{name}</span>

    <span className="price">{price}</span>

        <CountBtn />
</div>
    )
}
