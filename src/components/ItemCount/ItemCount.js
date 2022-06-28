import { useState } from "react";

// Iconos
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs";

// CSS
import "./ItemCount.css";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [count, setCount] = useState(inicial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let validar = stock === 0 ? true : false;

  return (
    <div>
      <div className="input-group mb-3 div-count">
        <button className="btn btn-danger" onClick={decrement}>
          <BsFillCartDashFill />
        </button>
        <input
          type="number"
          className="form-control count-input"
          value={count}
          disabled={validar}
          //defaultValue="0"
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="btn btn-success"
          onClick={increment}
          disabled={validar}
        >
          <BsFillCartPlusFill />
        </button>
      </div>
      <button onClick={() => onAdd(count)} disabled={validar}>
        Sumar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
