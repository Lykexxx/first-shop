import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Trash({ item, onDelete }) {
  return (
    <div className="item">
      <img src={'./img/' + item.img} />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash className="delete-icon" onClick={() => onDelete(item.id)} />
    </div>
  );
}
