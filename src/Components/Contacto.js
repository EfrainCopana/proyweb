import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { useState } from 'react';
export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [formMessages, setFormMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);

    setFormMessages([...formMessages, { ...formData }]);
  };


  return (
    <section id="contacto">
  <Container>
    <Row>
    <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Ingrese su número de teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese su mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
    <Col xs={12} md={6}>
      <div className="contact-cont">
        <h2>Información de Contacto</h2>
        <p>NOMBRE: EFRAIN SANTOS COPANA UCHARICO</p>
        <p>C.I.: 10954434</p>
         <p>DIRECCIÓN: AV. "I" Y CIRCUNVALACION URB. INTI RAYMI</p>
         <p>TELÉFONO: +591 76715083</p>
        <p>EMAIL: ecopana@umsa.bo</p>
      </div>
      <div className="message-box">
              <h3>Mensajes del Formulario</h3>
              {formMessages.length === 0 ? (
                <p>No hay mensajes aún.</p>
              ) : (
                <ul className="star-list">
                  {formMessages.map((message, index) => (
                    <li key={index}>
                      <strong>Mensaje {index + 1}:</strong>
                      <br />
                      Nombre: {message.nombre}
                      <br />
                      Email: {message.email}
                      <br />
                      Teléfono: {message.telefono}
                      <br />
                      Mensaje: {message.mensaje}
                    </li>
                  ))}
                </ul>
              )}
            </div>
      
    </Col>
    </Row>
  </Container>
  <footer>
        <p style={{ color: '#fff' }}>&copy; 2023 Maravillas Infantiles. Todos los derechos reservados.</p>
    </footer>
</section>
  )
}
