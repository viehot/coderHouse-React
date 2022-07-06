import React from "react";

// Component
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="container py-3">
      <div className="row row-cols-3 row-cols-md-3 mb-3 text-center">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
