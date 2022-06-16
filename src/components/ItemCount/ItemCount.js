import { useState } from "react";
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs";

import "./ItemCount.css";

const ItemCount = ({ stock, inicial }) => {
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

  return (
    <>
      <div className="input-group mb-3 div-count">
        <button className="btn btn-danger" onClick={decrement}>
          <BsFillCartDashFill />
        </button>
        <input
          type="number"
          className="form-control count-input"
          value={count}
          //defaultValue={count}
        />
        <button
          className="btn btn-success"
          onClick={increment}
          disabled={stock === 0 ? true : false}
        >
          <BsFillCartPlusFill />
        </button>
      </div>
    </>
  );
};

export default ItemCount;
