import React, { useState } from "react";
import {Link} from "react-router-dom"

// Component
import ItemCount from "../ItemCount/ItemCount";

// CSS
import "./ItemDetail.css"

const ItemDetail = ({name, img, description, price, stock}) => {

  const [carrito , setCarrito] = useState(0)

  const onAdd = (number) => {
    number != 0
      ? setCarrito(carrito + number)
      : alert("No agrego nada");
  };

  return (
    <div>
      <div className="card mb-3 card-container">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={img} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
               {description}
              </p>
              <p className="card-text">
                Precio: {price}$
              </p>
              <p className="card-text">
                Stock: {stock}
              </p>
              {carrito === 0
                ? <ItemCount stock={stock} inicial={0} onAdd={onAdd} />
                : <Link to="/cart" className="btn btn-primary">Terminar compra</Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
