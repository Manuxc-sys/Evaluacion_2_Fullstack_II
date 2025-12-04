// src/components/adminLTE/PlanDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarDash from './NavbarDash';
import Sidebar from './Sidebar';

function PlanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    // Obtenemos el plan directamente por ID desde Mockoon
    axios.get(`http://localhost:3002/api/planes/${id}`)
      .then(response => {
        setPlan(response.data);
      })
      .catch(error => {
        console.error("Error al cargar el plan:", error);
        alert("Plan no encontrado. Asegúrate de que Mockoon esté corriendo.");
        navigate('/admin/planes');
      });
  }, [id, navigate]);

  if (!plan) {
    return (
      <div className="wrapper">
        <NavbarDash />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <h1>Cargando información del plan...</h1>
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
                <h1>Detalle del Plan</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/admin/planes">Planes</a></li>
                  <li className="breadcrumb-item active">Plan #{plan.id}</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-solar-panel mr-1"></i>
                Información del Plan
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Contenido principal */}
                <div className="col-12 col-md-8">
                  <h3 className="text-primary">
                    <i className="fas fa-bolt"></i> {plan.nombre}
                  </h3>
                  <p className="text-muted mt-2">
                    <strong>Rango de potencia:</strong> {plan.rangoPotencia}
                  </p>
                  <p className="text-muted">
                    {plan.descripcion}
                  </p>
                </div>

                {/* Panel lateral */}
                <div className="col-12 col-md-4 border-left">
                  <h5 className="text-muted">Estado</h5>
                  <div className="callout callout-success">
                    <p>Activo en la landing pública.</p>
                  </div>
                  
                  <hr />
                  
                  <button 
                    className="btn btn-secondary btn-block"
                    onClick={() => navigate('/admin/planes')}
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

export default PlanDetail;