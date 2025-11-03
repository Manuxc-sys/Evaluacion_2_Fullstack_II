
import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";


function Planes() {
    return (
        <section id="planes" className="py-5">
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
                    <h2>Planes</h2>

                    <p className="text-muted">Elije el plan que se adapta a tu proyecto.</p>

                </div>

                <Row className="justify-content-center g-4">
          {/* Plan Básico */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="text-center mb-3">
                  <span className="badge bg-primary mb-2">Básico</span>
                  <Card.Title>3–5 kW</Card.Title>
                  <Card.Text>
                    Estudio energético<br />
                    Instalación certificada<br />
                    Monitoreo básico
                  </Card.Text>
                  <Button variant="primary">Solicitar evaluación</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Optimizado */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="text-center mb-3">
                  <span className="badge bg-primary mb-2">Optimizado</span>
                  <Card.Title>10–15 kW</Card.Title>
                  <Card.Text>
                    Estudio avanzado<br />
                    Instalación optimizada<br />
                    Monitoreo avanzado
                  </Card.Text>
                  <Button variant="primary">Solicitar evaluación</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Autónomo */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="text-center mb-3">
                  <span className="badge bg-primary mb-2">Autónomo</span>
                  <Card.Title>Híbrido + baterías</Card.Title>
                  <Card.Text>
                    Diseño off-grid<br />
                    Almacenamiento<br />
                    Soporte preferente
                  </Card.Text>
                  <Button variant="primary">Solicitar evaluación</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


            </Container>

        </section>


    );

}
export default Planes;