import React, { useContext } from 'react'

import {Carrito} from "../../CartContext"

const ItemCart = ({item}) => {
    const [carr, setCarr, addItem, removeItem] = useContext(Carrito)
  return (
    <div>
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
              La cantidad de {item.quantity}
              </p>
              <p className="card-text">
              Con el precio de {item.price}$
              </p>
              <button onClick={() => removeItem(item.id)} className="btn btn-danger">Borrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart