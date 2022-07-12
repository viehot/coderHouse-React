import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

//Component
import ItemList from "../ItemList/ItemList";

//CSS
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState();

  const { idCategory } = useParams();

  const fireData = async () => {
    const q = query(collection(db, "product"));

    const products = []

    const list = await getDocs(q);
    list.forEach((item) => {
      products.push({id: item.id, ...item.data()})
    })

    setItems(products)
  };
  
  const fireDataCategory = async (idCategory) => {
    const q = query(collection(db, "product"), where("category", "==", idCategory));

    const products = []

    const list = await getDocs(q);
    list.forEach((item) => {
      products.push({id: item.id, ...item.data()})
    })

    setItems(products)
  };
  
  useEffect(() => {
    setLoading(false);

    idCategory
          ? fireDataCategory(idCategory)
          : fireData()
    
    setLoading(true);
  }, [idCategory]);

  return (
    <>
      {title ? (
        <h1 className="titulo">{title}</h1>
      ) : (
        <h1 className="titulo">{idCategory.toLocaleUpperCase()}</h1>
      )}
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
