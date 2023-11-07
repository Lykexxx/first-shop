import React from 'react';

export default function Item({ item, onAdd, onShowItem }) {
  return (
    <div className="item">
      <img src={'./img/' + item.img} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}
