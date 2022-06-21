import React from 'react'

const Item = ({item}) => {
  return (
    <div className="card item-card" >
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Precio: {item.price}</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
  )
}

export default Item