import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

function Contacto() {
  return (
    <section id="contacto" className="py-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
          <h2>Contacto</h2>
          <p className="text-muted">Cuéntanos tu proyecto y agenda una asesoría.</p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <Form>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre y apellido"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingresa un correo válido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe tu comentario"
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Enviar mensaje
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;

