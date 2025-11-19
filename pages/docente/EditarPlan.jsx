'use client';
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { planes } from "../../data/planes";

export default function EditarPlan({ usuario, onLogout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = planes.find((p) => p.id === parseInt(id));

  const [nombre, setNombre] = useState(plan?.nombre || "");
  const [descripcion, setDescripcion] = useState(plan?.descripcion || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Plan actualizado exitosamente");
    navigate("/docente/planes");
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Editar Plan de Estudio</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <Link to="/docente/planes" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver a Planes
        </Link>

        <div className="grid grid-3" style={{ marginBottom: '24px' }}>
          <div className="card">
            <p className="card-subtitle">VERSIÓN ACTUAL</p>
            <h3 className="card-title">{plan?.versiones?.[plan.versiones.length - 1]?.version || 'v1.0'}</h3>
            <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Última actualización: {plan?.versiones?.[plan.versiones.length - 1]?.fecha || plan?.createdAt}</p>
          </div>
          <div className="card">
            <p className="card-subtitle">ESTADO</p>
            <h3 className="card-title">{plan?.estado || 'Borrador'}</h3>
          </div>
          <div className="card">
            <p className="card-subtitle">HISTORIAL</p>
            <h3 className="card-title">{plan?.versiones?.length || 1} versiones</h3>
            <button className="btn btn-secondary btn-sm" style={{ marginTop: '8px' }}>
              📜 Ver Historial
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '900px' }}>
          <h2 className="card-title">Editar Plan de Clase</h2>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Título del Plan</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Estado</label>
              <select className="form-select">
                <option value="Borrador">Borrador</option>
                <option value="Publicado">Publicado</option>
                <option value="Archivado">Archivado</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Descripción / Objetivos</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="form-textarea"
              rows="6"
              required
            />
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit" className="btn btn-primary">
              💾 Guardar Cambios
            </button>
            <button type="button" className="btn btn-accent">
              🔄 Crear Nueva Versión
            </button>
            <button type="button" className="btn btn-danger">
              🗑️ Eliminar Plan
            </button>
          </div>
        </form>

        <div className="card" style={{ maxWidth: '900px', marginTop: '24px' }}>
          <h3 className="card-title">Historial de Versiones</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Versión</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {plan?.versiones?.map((version, index) => (
                <tr key={index}>
                  <td><strong>{version.version}</strong></td>
                  <td>{version.fecha}</td>
                  <td>
                    <button className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>👁️ Ver</button>
                    <button className="btn btn-accent btn-sm">↩️ Restaurar</button>
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', color: '#9ca3af' }}>No hay versiones anteriores</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
