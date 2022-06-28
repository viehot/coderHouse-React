import React from "react";
import ItemCount from "../ItemCount/ItemCount";

// CSS
import "./ItemDetail.css"

const ItemDetail = ({name, img, description, price, stock}) => {

  const onAdd = (number) => {
    number != 0
      ? alert("El carrito se cargo con " + number)
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
              <ItemCount stock={stock} inicial={0} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
