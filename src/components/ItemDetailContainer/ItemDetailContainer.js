import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          fetch(`http://localhost:3000/data.json`)
            .then((resp) => resp.json())
            .then((data) => {
              setItem(data.find(dat => dat.id === 1));
              setLoading(true)
            });
        }, 2000);
      }, [])

  return (
    <div>
        {loading ? (
        <ItemDetail name={item.name} img={item.img} description={item.description} price={item.price} />
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer