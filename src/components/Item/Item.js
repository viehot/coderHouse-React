import React from 'react'

import "./Item.css"

const Item = ({img, name, price}) => {
  return (
    <div className='col'>
    <div className="card mb-4 rounded-3 shadow-sm item-card" >
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: {price}</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
    </div>
  )
}

export default Item