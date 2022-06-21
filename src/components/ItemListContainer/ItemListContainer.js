import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  /*const onAdd = (number) => {
    number != 0
      ? alert("El carrito se cargo con " + number)
      : alert("No agrego nada");
  };*/

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3000/data.json`)
        .then((resp) => resp.json())
        .then((data) => {
          setItems(data);
        });
    }, 2000);
  }, []);

  return (
    <>
      <h1 className="titulo">{title}</h1>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
