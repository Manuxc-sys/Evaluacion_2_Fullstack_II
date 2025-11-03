import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


function Servicios() {
    return (

        <section id="servicios" className="py-5">
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
                    <h2>Servicios</h2>

                    <p className=" text-muted">Estudio energético, instalación certificada, Monitoreo y mantención</p>

                </div>

                <Row className="justify-content-center g-4">
                    {/* Cada card en col-12 (móvil), col-md-6 (tablet), col-lg-3 (escritorio) */}
                    <Col xs={12} md={6} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="analisis.png" />
                            <Card.Body>
                                <Card.Title>Estudio energético</Card.Title>
                                <Card.Text>
                                    Análisis de consumo y propuesta ajustada a tu perfil.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="instalacion.png" />
                            <Card.Body>
                                <Card.Title>Instalación certificada SEC</Card.Title>
                                <Card.Text>
                                    Técnicos certificados y cumplimiento normativo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="monitoreo.png" />
                            <Card.Body>
                                <Card.Title>Monitoreo</Card.Title>
                                <Card.Text>
                                    Seguimiento en tiempo real desde tu celular.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="mantencion.png" />
                            <Card.Body>
                                <Card.Title>Mantención</Card.Title>
                                <Card.Text>
                                    Servicios programados para máxima eficiencia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </section >


    );


}

export default Servicios;
