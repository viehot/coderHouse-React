import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Carrito } from "../../CartContext";

// Icono
import { BsCartFill } from "react-icons/bs";

// CSS
import "./CardWidget.css";

const CardWidget = () => {
  const [carr, setCarr] = useContext(Carrito);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let suma = 0;

    carr.forEach((item) => {
      suma = suma + item.quantity;
    });

    setTotal(suma);
  }, [carr]);

  return (
    <div>
      {carr[0] && (
        <Link to="/cart" className="cartWidget">
          <BsCartFill className="cart-icon" />
          <span className="spanTotal">{total}</span>
        </Link>
      )}
    </div>
  );
};

export default CardWidget;
