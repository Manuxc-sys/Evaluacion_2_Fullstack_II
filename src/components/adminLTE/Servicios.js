// src/components/adminLTE/Servicios.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarDash from './NavbarDash';
import Sidebar from './Sidebar';

function Servicios() {
  const navigate = useNavigate();
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/servicios')
      .then(response => setServicios(response.data))
      .catch(error => {
        console.error("Error cargando servicios:", error);
        alert("No se pudieron cargar los servicios. ¿Mockoon está corriendo?");
      });
  }, []);

  const verDetalle = (id) => {
    navigate(`/admin/servicios/${id}`);
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
                <h1>Gestión de Servicios</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Listado de Servicios</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: '10%' }}>ID</th>
                    <th style={{ width: '40%' }}>Nombre</th>
                    <th style={{ width: '30%' }}>Descripción</th>
                    <th style={{ width: '20%' }} className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {servicios.length > 0 ? (
                    servicios.map((servicio) => (
                      <tr key={servicio.id}>
                        <td>{servicio.id}</td>
                        <td><strong>{servicio.nombre}</strong></td>
                        <td>{servicio.descripcion}</td>
                        <td className="project-actions text-center">
                          <button
                            className="btn btn-info btn-sm mx-1"
                            onClick={() => verDetalle(servicio.id)}
                            title="Ver Detalle"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          {/* Botón eliminar (solo visual por ahora) */}
                          <button className="btn btn-danger btn-sm mx-1" disabled>
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No hay servicios disponibles.
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

export default Servicios;