


import '../styles/btns.css'
import { useState } from "react"

export default function  CountBtn() {
    
    const [count, setCount] = useState(0)

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }
    return (
        <div className='btns'>
            <span className='count'>{count}</span>
            <button className='btn' onClick={plus}>+</button>
            <button className='btn' onClick={minus}>-</button>
        </div>
    )
}