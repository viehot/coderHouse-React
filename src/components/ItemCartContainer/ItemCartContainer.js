import React, { useContext, useEffect, useState } from "react";

import ItemCart from "../ItemCart/ItemCart";

import { Carrito } from "../../CartContext";

const ItemCartContainer = () => {
  const [carr, setCarr, addItem, removeItem, clear] = useContext(Carrito);

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let suma = 0

        carr.forEach( item => {
            suma = suma + (parseInt(item.price) * parseInt(item.quantity) )
        });

        setTotal(suma)
    }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <button onClick={() => clear()}>Borrar todo</button>
          {carr
            ? carr.map((item) => <ItemCart item={item} key={item.id} />)
            : null}
        </div>
        <div className="col-md-4">
          <h1>Total de venta: {total}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemCartContainer;
