import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Component
import ItemList from "../ItemList/ItemList";

//CSS
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {

  const [items, setItems] = useState([])

  const [loading , setLoading] = useState()

  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      fetch(`http://localhost:3000/data.json`)
        .then((resp) => resp.json())
        .then((data) => {
          idCategory
            ? setItems(data.filter((e) => e.category === idCategory))
            : setItems(data);
        });
        setLoading(true);
    }, 2000);
  }, [idCategory]);

  return (
    <>
      {title 
        ? <h1 className="titulo">{title}</h1>
        : <h1 className="titulo">{idCategory.toLocaleUpperCase()}</h1>}
      {loading ? (
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
