import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Servicios() {
    return (

        <section id="servicios" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                     <h2 className="mb-0">Servicios</h2>

                <p className=" mb-0">Estudio energético, instalación certificada, Monitoreo y mantención</p>

                </div>
               
                <div className="row">
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Estudio energético</Card.Title>
                                <Card.Text>
                                    Análisis de consumo y propuesta ajustada a tu perfil
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </Container>

        </section>


    );


}

export default Servicios;