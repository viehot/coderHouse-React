import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

//Componente
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const [validar, setValidar] = useState(true);

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fireDataId = async () => {
      const q = query(collection(db, "product"), where(documentId(), "==", id));

      const list = await getDocs(q);
      if (!list.empty) {
        list.forEach((item) => {
          setItem({ id: item.id, ...item.data() });
        });
      } else {
        setValidar(false);
      }
      setLoading(true);
    };
    fireDataId();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          {validar ? (
            <ItemDetail item={item} />
          ) : (
            <div className="alert alert-danger" role="alert">
              Error: Producto inexistente
            </div>
          )}
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
