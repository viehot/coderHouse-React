import React from 'react'

// Icono
import {BsCartFill} from "react-icons/bs"

// CSS
import "./CardWidget.css";

const CardWidget = () => {
  return (
    <div>
        <BsCartFill className='cart-icon' />
    </div>
  )
}

export default CardWidget