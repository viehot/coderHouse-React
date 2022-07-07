import React, { useContext } from 'react'

import ItemCart from '../components/ItemCart/ItemCart'

import {Carrito} from "../CartContext"

const Cart = () => {
    const [carr, setCarr, addItem, removeItem, clear] = useContext(Carrito)

  return (
    <div>
        <button onClick={() => clear()}>Borrar todo</button>
        {carr ? carr.map((item) => (
            <ItemCart item={item} key={item.id}/>
        )): null}
    </div>
  )
}

export default Cart