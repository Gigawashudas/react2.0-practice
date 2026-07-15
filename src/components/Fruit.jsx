


import '../styles/fruit.css'
import CountBtn from './CountBtn.jsx'
export default function Fruit({name, price}) {

    return (
        <table>
            <tr>
                <td className='name'>{name}</td>
                <td>{price}</td>
                <td>
                    <CountBtn></CountBtn>
                </td>
            </tr>
        </table>
    )
}