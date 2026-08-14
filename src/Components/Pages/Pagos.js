import React from 'react'
import { useState } from 'react';
import productoImage from '../../assets/img/Hot5.jpg';

export const Pagos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        tarjeta: '',
        fecha: '',
        cvv: '',
      });
      const [productoComprado, setProductoComprado] = useState({
        nombre: 'Juguete Ejemplo',
        precio: '$19.99',
      });
      const [mostrarDatos, setMostrarDatos] = useState(false);
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarDatos(true);
      };
  return (
    <div className="pagos-container">
      <h1>Detalles del Producto</h1>
      <div className="product-details" style={{ color: '#FDBF6E' }}>
        <img src={productoImage} alt="Producto" />
        <p>Nombre del Producto: Juguete de Ejemplo</p>
        <p>Precio: $19.99</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Información de Pago</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={handleInputChange} required />

        <label htmlFor="tarjeta">Número de Tarjeta:</label>
        <input type="text" id="tarjeta" name="tarjeta" onChange={handleInputChange} required />

        <label htmlFor="fecha">Fecha de Expiración:</label>
        <input type="text" id="fecha" name="fecha" placeholder="MM/AA" onChange={handleInputChange} required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" onChange={handleInputChange} required />

        <button type="submit">Pagar</button>
      </form>
      {mostrarDatos && (
        <div className="datos-ingresados">
          <h2>Datos Ingresados</h2>
          <p>Nombre: {formData.nombre}</p>
          <p>Número de Tarjeta: {formData.tarjeta}</p>
          <p>Fecha de Expiración: {formData.fecha}</p>
          <p>CVV: {formData.cvv}</p>

          <h2>Detalles del Producto</h2>
          <p>Producto: {productoComprado.nombre}</p>
          <p>Precio: {productoComprado.precio}</p>
        </div>
      )}
    </div>
  )
}
