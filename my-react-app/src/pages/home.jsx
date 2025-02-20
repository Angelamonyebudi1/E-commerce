// src/pages/HomePage.js

import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$20' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$30' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$25' },
  ];

  return (
    <Layout>
      <div className="home-page">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
