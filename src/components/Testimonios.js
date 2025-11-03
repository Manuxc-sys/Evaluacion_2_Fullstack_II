
import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";


function Testimonios() {
    return (
        <section id="testimonios" className="py-5">
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
                    <h2>Testimonios</h2>

                    <p className="text-muted">Clientes que ya confían en HelioAndes</p>

                </div>

                <Row className="justify-content-center g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>Alejandra, Ñuñoa</Card.Title>
                <Card.Text className="text-muted">
                  Instalación rápida y eficiente. ¡Muy satisfecha con el servicio!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>Macarena, La Florida</Card.Title>
                <Card.Text className="text-muted">
                  Excelente asesoría y soporte durante todo el proceso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>Alejandro, Puerto Varas</Card.Title>
                <Card.Text className="text-muted">
                  Mi sistema solar funciona de maravilla.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


            </Container>

        </section>


    );

}
export default Testimonios;