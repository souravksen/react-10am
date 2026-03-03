import React from 'react';
import './task.css';

const Table = ({ products, handleDelete }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="td-id">{product.id}</td>
            <td className="td-name">{product.title}</td>
            <td className="td-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </td>
            <td className="td-action">
              <button
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
