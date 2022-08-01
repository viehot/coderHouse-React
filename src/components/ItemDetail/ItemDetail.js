import React, { useContext } from "react";
import {Link} from "react-router-dom"

// Component
import ItemCount from "../ItemCount/ItemCount";

import {Carrito} from "../../CartContext"

// CSS
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const [carr , setCarr, addItem,removeItem, clear, isInCart] = useContext(Carrito)

  const onAdd = (number) => {
    number != 0
      ? addItem(item,number)
      : alert("No agrego nada");
  };
  const validar = (id) => {
    return isInCart(id)
  }

  return (
    <div>
      <div className="card mb-3 card-container">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
               {item.description}
              </p>
              <p className="card-text">
                Precio: {item.price}$
              </p>
              <p className="card-text">
                Stock: {item.stock}
              </p>
              {!validar(item.id)
                ? <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />
                : <Link to="/cart" className="btn btn-primary">IR al carrito</Link>}
              <Link to="/" className="btn btn-primary m-2">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
