// src/components/Footer.js
import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <p className="text-muted mb-0">
          © {currentYear} HelioAndes Energía. Todos los derechos reservados.
        </p>
        <p className="text-muted small mt-2">
          <a href="/politica-privacidad.pdf" className="text-muted text-decoration-none me-3">
            Política de privacidad
          </a>
          <a href="/terminos-uso.pdf" className="text-muted text-decoration-none">
            Términos de uso
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;