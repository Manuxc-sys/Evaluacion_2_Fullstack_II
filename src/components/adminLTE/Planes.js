// src/components/adminLTE/Planes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarDash from './NavbarDash';
import Sidebar from './Sidebar';

function Planes() {
  const navigate = useNavigate();
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/planes')
      .then(response => setPlanes(response.data))
      .catch(error => {
        console.error("Error cargando planes:", error);
        alert("No se pudieron cargar los planes. ¿Mockoon está corriendo en el puerto 3001?");
      });
  }, []);

  const verDetalle = (id) => {
    navigate(`/admin/planes/${id}`);
  };

  return (
    <div className="wrapper">
      <NavbarDash />
      <Sidebar />
      
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Gestión de Planes</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Planes de Sistemas Solares</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: '10%' }}>ID</th>
                    <th style={{ width: '25%' }}>Nombre</th>
                    <th style={{ width: '25%' }}>Rango Potencia</th>
                    <th style={{ width: '30%' }}>Descripción</th>
                    <th style={{ width: '10%' }} className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {planes.length > 0 ? (
                    planes.map((plan) => (
                      <tr key={plan.id}>
                        <td>{plan.id}</td>
                        <td><strong>{plan.nombre}</strong></td>
                        <td>{plan.rangoPotencia}</td>
                        <td><small>{plan.descripcion}</small></td>
                        <td className="project-actions text-center">
                          <button
                            className="btn btn-info btn-sm mx-1"
                            onClick={() => verDetalle(plan.id)}
                            title="Ver Detalle"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          {/* Botón eliminar (solo visual, no funcional según PDF) */}
                          <button className="btn btn-danger btn-sm mx-1" disabled>
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No hay planes registrados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Planes;