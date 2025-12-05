// src/components/adminLTE/ServicioDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarDash from './NavbarDash';
import Sidebar from './Sidebar';

function ServicioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/api/servicios')
      .then(response => {
        const servicioEncontrado = response.data.find(s => s.id == id);
        if (servicioEncontrado) {
          setServicio(servicioEncontrado);
        } else {
          throw new Error("No encontrado");
        }
      })
      .catch(error => {
        console.error("Error al cargar el servicio:", error);
        alert("Servicio no encontrado. Asegúrate de que Mockoon esté corriendo.");
        navigate('/admin/servicios');
      });
  }, [id, navigate]);

  if (!servicio) {
    return (
      <div className="wrapper">
        <NavbarDash />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <h1>Cargando información del servicio...</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <NavbarDash />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Detalle del Servicio</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/admin/servicios">Servicios</a></li>
                  <li className="breadcrumb-item active">Servicio #{servicio.id}</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-info-circle mr-1"></i>
                Información del Servicio
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-8">
                  <h3 className="text-primary">
                    <i className="fas fa-cogs"></i> {servicio.nombre}
                  </h3>
                  <p className="text-muted mt-3">
                    {servicio.descripcion}
                  </p>
                </div>
                <div className="col-12 col-md-4 border-left">
                  <h5 className="text-muted">Estado</h5>
                  <div className="callout callout-success">
                    <p>Activo en la landing pública.</p>
                  </div>
                  <hr />
                  <button 
                    className="btn btn-secondary btn-block"
                    onClick={() => navigate('/admin/servicios')}
                  >
                    <i className="fas fa-arrow-left mr-1"></i> Volver al listado
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicioDetail;