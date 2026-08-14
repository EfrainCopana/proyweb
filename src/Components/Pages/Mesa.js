import React from 'react'
import { useState } from 'react';
import mesa1 from '../../assets/img/mesa1.jpeg';
import mesa2 from '../../assets/img/mesa2.jpg';
import mesa3 from '../../assets/img/mesa3.jpg';
import mesa4 from '../../assets/img/mesa4.jpg';
import mesa5 from '../../assets/img/mesa5.jpg';
import mesa6 from '../../assets/img/mesa6.jpg';
import mesa7 from '../../assets/img/mesa7.jpg';
import mesa8 from '../../assets/img/mesa8.jpg';
import mesa9 from '../../assets/img/mesa9.jpg';
import mesa10 from '../../assets/img/mesa10.jpg';



export const Mesa = () => {
  const [mesaProducts] = useState([
    { id: 1, name: 'Parchis', price: 3.59, image: mesa1 },
    { id: 2, name: 'Monopolio', price: 5.99, image: mesa2 },
    { id: 3, name: 'Ajedrez ', price: 7.25, image: mesa3 },
    { id: 4, name: 'Domino ', price: 4.55, image: mesa4 },
    { id: 5, name: 'Scrabble', price: 6.12, image: mesa5 },
    { id: 6, name: 'Uno ', price: 3.79, image: mesa6 },
    { id: 7, name: 'Jenga ', price: 7.00, image: mesa7 },
    { id: 8, name: 'Serpientes y Escaleras', price: 5.59, image: mesa8 },
    { id: 9, name: 'Rompecabezas ', price: 4.50, image: mesa9 },
    { id: 10, name: 'Naipes ', price: 3.00, image: mesa10 },
  ]);
    
  return (
    <div className="mesa-container">
      <h2>Juegos de Mesa</h2>
      <div className="mesa-grid">
        {mesaProducts.map(product => (
          <div key={product.id} className="mesa-product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
