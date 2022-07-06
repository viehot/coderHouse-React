import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

//Componente
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        setTimeout(() => {
          fetch(`http://localhost:3000/data.json`)
            .then((resp) => resp.json())
            .then((data) => {
              setItem(data.find(dat => dat.id === parseInt(id)))
              setLoading(true)
            });
        }, 2000);
      }, [])

  return (
    <div>
        {loading ? (
        <ItemDetail item={item} />
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer