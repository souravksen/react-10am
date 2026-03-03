import React, { useEffect, useState } from 'react';
import Table from './Table';

const UseEffectTask1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  

  return (
    <div className="container">
      <h1 className="title">UseEffectTask1</h1>
      <Table products={products} handleDelete={handleDelete} />
    </div>
  );
};

export default UseEffectTask1;
