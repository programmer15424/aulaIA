'use client';
import React from "react";
import { Link } from "react-router-dom";
import { planes } from "../../data/planes";

export default function PlanesDocente({ usuario, onLogout }) {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Planes de Estudio</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '16px' }}>
            Gestiona tus planes de clase y crea nuevos planes personalizados con ayuda de IA.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/docente" className="btn btn-secondary">← Volver</Link>
          <Link to="/docente/planes/nuevo" className="btn btn-success">
            + Crear Nuevo Plan
          </Link>
        </div>

        {planes.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
            <h3 className="card-title">No hay planes creados</h3>
            <p className="card-subtitle" style={{ marginBottom: '24px' }}>
              Comienza creando tu primer plan de clase con asistencia de IA
            </p>
            <Link to="/docente/planes/nuevo" className="btn btn-primary">
              Crear Primer Plan
            </Link>
          </div>
        ) : (
          <div className="grid grid-3">
            {planes.map((plan) => (
              <div key={plan.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 className="card-title" style={{ marginBottom: 0 }}>{plan.titulo}</h3>
                  <span className={`badge ${plan.estado === 'Publicado' ? 'badge-success' : 'badge-warning'}`}>
                    {plan.estado}
                  </span>
                </div>
                <p className="card-subtitle">
                  <strong>{plan.asignatura}</strong> • {plan.nivel} • {plan.grado}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '8px' }}>
                  <strong>Tema:</strong> {plan.tema}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '8px' }}>
                  <strong>Duración:</strong> {plan.duracion}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '0.9rem' }}>
                  {plan.competencias.substring(0, 80)}...
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link to={`/docente/planes/editar/${plan.id}`} className="btn btn-primary btn-sm">
                    ✏️ Editar
                  </Link>
                  <button className="btn btn-secondary btn-sm">
                    📋 Ver Versiones
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
