import { useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ title }) => {
  const onAdd = (number) => {
    number != 0
      ? alert("El carrito se cargo con " + number)
      : alert("No agrego nada");
  };

  return (
    <div>
      <h1 className="titulo">{title}</h1>
      <ItemCount stock={5} inicial={0} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
