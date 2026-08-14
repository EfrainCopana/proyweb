import React from 'react'
import hot1 from '../../assets/img/Hot1.jpg';
import hot2 from '../../assets/img/Hot2.jpg';
import hot3 from '../../assets/img/Hot3.jpg';
import hot4 from '../../assets/img/Hot4.jpg';
import hot5 from '../../assets/img/Hot5.jpg';
import hot6 from '../../assets/img/Hot6.jpg';
import hot7 from '../../assets/img/Hot7.jpg';
import hot8 from '../../assets/img/Hot8.jpg';
import hot9 from '../../assets/img/Hot9.jpg';
import hot10 from '../../assets/img/Hot10.jpg';
import hot11 from '../../assets/img/Hot11.jpg';
import hot12 from '../../assets/img/Hot12.png';

import { useState } from 'react';
export const Hotweels = () => {
    const [hotWheelsProducts] = useState([
        { id: 1, name: 'Hot Wheels Coche de colección Boulevard', price: 10.99, image: hot1 },
        { id: 2, name: 'Hot Wheels Fast & Furious ', price: 9.99, image: hot2 },
        { id: 3, name: 'Hot Wheels Batman Coche ', price: 4.79, image: hot3 },
        { id: 4, name: 'Hot Wheels MatchBox 70 Aniversario ', price: 4.99, image: hot4 },
        { id: 5, name: 'Hot Wheels Neon Speeders ', price: 12.39, image: hot5 },
        { id: 6, name: 'Hot Wheels Premium ', price: 5.99, image: hot6 },
        { id: 7, name: 'Hot Wheels Collector ', price: 4.99, image: hot7 },
        { id: 8, name: 'Hot Wheels Collector ZAMAC ', price: 15.12, image: hot8 },
        { id: 9, name: 'Hot Wheels Transportador Legends ', price: 6.69, image: hot9 },
        { id: 10, name: 'Hot Wheels Jurassic World ', price: 7.99, image: hot10 },
        { id: 11, name: 'Hot Wheels Collecion Stars ', price: 8.75, image: hot11 },
        { id: 12, name: 'Hot Wheels Porsche 911 GT3', price: 12.99, image: hot12 },
      ]);
      const [clickedButton, setClickedButton] = useState(null);

      const handleButtonClick = (productId) => {
        setClickedButton(productId);
        // Aquí puedes agregar la lógica adicional al hacer clic en el botón
      };
  return (
    <div className="hotwheels-container">
      <h2>Hot Wheels</h2>
      <div className="hotwheels-grid">
        {hotWheelsProducts.map(product => (
          <div key={product.id} className="hotwheels-product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <button
              className={`hotwheels-button ${clickedButton === product.id ? 'clicked' : ''}`}
              onClick={() => handleButtonClick(product.id)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}
