import React, { useContext } from 'react'

import {Carrito} from "../../CartContext"

const ItemCart = ({item}) => {
    const [carr, setCarr, addItem, removeItem] = useContext(Carrito)
  return (
    <div>
        <h1>{item.name}</h1>
        <p>La cantidad de {item.quantity}</p>
        <p>Con el precio de {item.price}</p>
        <button onClick={() => removeItem(item.id)}>Borrar</button>
        <br />
        <br />
        <br />
    </div>
  )
}

export default ItemCart