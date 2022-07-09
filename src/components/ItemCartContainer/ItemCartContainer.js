import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ItemCart from "../ItemCart/ItemCart";

import { Carrito } from "../../CartContext";

const ItemCartContainer = () => {
  const [carr, setCarr, addItem, removeItem, clear] = useContext(Carrito);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let suma = 0;

    carr.forEach((item) => {
      suma = suma + parseInt(item.price) * parseInt(item.quantity);
    });

    setTotal(suma);
  }, [carr]);

  return (
    <div className="container">
      <div className="row g-6">
        <div className="col-md-8">
          {carr[0] ? (
            <>
              <button onClick={() => clear()} className="btn btn-danger m-4 ">Borrar todo</button>
              {carr.map((item) => (
                <ItemCart item={item} key={item.id} />
              ))}
            </>
          ) : (
            <div>
              <h1>No has seleccionado ningun producto</h1>
              <Link to="/" className="btn btn-primary">
                Volver a Comprar
              </Link>
            </div>
          )}
        </div>
        {carr[0] && (
          <div className="col-md-4">
            <h1>Total de venta: {total}</h1>
            <button className="btn btn-primary">Terminar compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCartContainer;