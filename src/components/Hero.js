// src/components/Hero.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



const imagenHero = '/panel_solar.jpg'; 

function Hero() {
  return (
    <section id="inicio" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Columna de Texto */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <span className="badge bg-primary mb-3">Energía solar</span>
            <h1 className="display-5 fw-bold mb-3">
              Energía solar accesible y confiable para tu hogar o pyme
            </h1>
            <p className="lead mb-4">
              Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.
            </p>
            <div className="d-flex gap-2">
              <Button variant="primary" href="#demo-calculadora">
                Ver DEMO
              </Button>
              <Button variant="outline-primary" href="/catalogo-helioandes.pdf" target="_blank" rel="noopener noreferrer">
                Descargar catálogo
              </Button>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <Image src={imagenHero} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;