import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <>
        {items.map(item => <Item key={item.id} {...item} />)
        }
    </>
  )
}

export default ItemList