import React, { useState } from 'react';
import figura1 from '../../assets/img/figura1.jpg';
import figura2 from '../../assets/img/figura2.jpg';
import figura3 from '../../assets/img/figura3.jpg';
import figura4 from '../../assets/img/figura4.jpg';
import figura5 from '../../assets/img/figura5.jpg';
import figura6 from '../../assets/img/figura6.jpg';
import figura7 from '../../assets/img/figura7.jpg';

const TarjetaInclinada = ({ figura, onClick }) => {
  return (
    <div className="tarjeta-inclinada" onClick={() => onClick(figura)}>
      <img src={figura.image} alt={figura.name} />
      <div className="contenido">
        <h3>{figura.name}</h3>
        <p>Precio: ${figura.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
export const Figuras = () => {
  const [figuras] = useState([
    { id: 1, name: 'Batman', price: 24.99, image: figura1 },
    { id: 2, name: 'DeadPool', price: 29.70, image: figura2 },
    { id: 3, name: 'Superman', price: 19.99, image: figura3 },
    { id: 1, name: 'Spiderman', price: 28.45, image: figura4 },
    { id: 2, name: 'Hulk', price: 32.15, image: figura5 },
    { id: 3, name: 'Capitán América', price: 21.90, image: figura6 },
    { id: 3, name: 'Wolwerine', price: 33.99, image: figura7 },
  ]);

  const [figuraSeleccionada, setFiguraSeleccionada] = useState(null);

  const handleClick = (figura) => {
    setFiguraSeleccionada(figura);
  };

  return (
    <div className="figuras-accion-container">
      <h2>Figuras de Acción</h2>
      <div className="tarjetas-container">
        {figuras.map((figura) => (
          <TarjetaInclinada key={figura.id} figura={figura} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}
