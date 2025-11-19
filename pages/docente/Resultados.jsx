'use client';
import React from "react";
import { Link } from "react-router-dom";
import { resultados } from "../../data/resultados";

export default function ResultadosDocente({ usuario, onLogout }) {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Resultados</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '16px' }}>
            Revisa el desempeño de tus estudiantes y descarga reportes detallados.
          </p>
        </div>

        <Link to="/docente" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver al Dashboard
        </Link>

        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="grid grid-3">
            <div className="form-group">
              <label className="form-label">Filtrar por Actividad</label>
              <select className="form-select">
                <option value="">Todas las actividades</option>
                <option value="1">Test de Ecosistemas</option>
                <option value="2">Matemática: Fracciones</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Filtrar por Estado</label>
              <select className="form-select">
                <option value="">Todos los estados</option>
                <option value="completado">Completado</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Acciones</label>
              <button className="btn btn-accent" style={{ width: '100%' }}>
                📊 Exportar a PDF
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Resultados de Estudiantes</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Actividad</th>
                <th>Calificación</th>
                <th>Porcentaje</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((resultado) => (
                <tr key={resultado.id}>
                  <td><strong>{resultado.estudiante}</strong></td>
                  <td>{resultado.actividad}</td>
                  <td><strong>{resultado.puntaje}/{resultado.totalPuntos}</strong></td>
                  <td>
                    <span className={`badge ${resultado.porcentaje >= 80 ? 'badge-success' : resultado.porcentaje >= 60 ? 'badge-warning' : 'badge-danger'}`}>
                      {resultado.porcentaje}%
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-success">{resultado.estado}</span>
                  </td>
                  <td>{resultado.fecha}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">👁️ Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
