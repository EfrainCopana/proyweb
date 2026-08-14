import React from 'react'
import { useState } from 'react';
import lego1 from '../../assets/img/lego1.jpg';
import lego2 from '../../assets/img/lego2.jpg';
import lego3 from '../../assets/img/lego3.jpg';
import lego4 from '../../assets/img/lego4.jpg';
import lego5 from '../../assets/img/lego5.jpg';
import lego6 from '../../assets/img/lego6.jpg';
import lego7 from '../../assets/img/lego7.jpg';
import lego8 from '../../assets/img/lego8.jpg';
import lego9 from '../../assets/img/lego9.jpg';

export const Legos = () => {
  const [legoProducts] = useState([
    { id: 1, name: 'Lego Classic Bricks', price: 19.99, image: lego1 },
    { id: 2, name: 'Lego Star Wars Millennium Falcon', price: 129.99, image: lego2 },
    { id: 3, name: 'Lego Technic Porsche 911 GT3 RS', price: 299.99, image: lego3 },
    { id: 4, name: 'Lego Ninjago Destiny\'s Bounty', price: 159.99, image: lego4 },
    { id: 5, name: 'Lego City Deep Space Rocket', price: 89.99, image: lego5 },
    { id: 6, name: 'Lego Friends Heartlake City', price: 74.99, image: lego6 },
    { id: 7, name: 'Lego Marvel Super Heroes Avengers', price: 39.99, image: lego7 },
    { id: 8, name: 'Lego Architecture Statue of Liberty', price: 99.99, image: lego8 },
    { id: 9, name: 'Lego Ideas Ship in a Bottle', price: 69.99, image: lego9 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const handleClick = (product) => {
    setSelectedProduct(product);
    setIsBoxVisible(false);
  };


  return (
    <div className="lego-container">
      <div className="lego-column">
        <h2>Legos</h2>
        <div className="lego-grid">
          {legoProducts.map((product) => (
            <div key={product.id} className="lego-product" onClick={() => handleClick(product)}>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="lego-column">
        {selectedProduct && (
          <div className="selected-product">
            <h3>{selectedProduct.name}</h3>
            <p>Precio: ${selectedProduct.price.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  )
}
