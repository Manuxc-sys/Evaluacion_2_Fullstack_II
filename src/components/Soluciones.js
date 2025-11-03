
import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";


function Soluciones() {
    return (
        <section id="soluciones" className="py-5">
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
                    <h2>Soluciones</h2>

                    <p className="text-muted">Kit residenciales, PyME, Off-grid con baterías e híbridos</p>

                </div>

                <Row className="justify-content-center g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Estudio energético</Card.Title>
                <Card.Text>
                  Análisis de consumo y propuesta ajustada a tu perfil.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Instalación certificada</Card.Title>
                <Card.Text>
                  Ejecutada por personal acreditado y normativa vigente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Monitoreo</Card.Title>
                <Card.Text>
                  Seguimiento de rendimiento y alertas preventivas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


            </Container>

        </section>


    );

}
export default Soluciones;