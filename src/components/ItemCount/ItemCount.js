import { useState } from 'react'
import {BsFillCartDashFill , BsFillCartPlusFill} from "react-icons/bs"

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}><BsFillCartDashFill /></button>
        <button onClick={increment}><BsFillCartPlusFill /></button>
    </div>
  )
}

export default ItemCount