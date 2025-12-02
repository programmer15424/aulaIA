'use client';
import React from "react";
import { Link } from "react-router-dom";
import { actividades } from "../../data/actividades";

export default function ActividadesEstudiante({ usuario, onLogout }) {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Actividades</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '16px' }}>
            Completa tus actividades antes de la fecha de vencimiento. Cada actividad incluye retroalimentación automática.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/estudiante" className="btn btn-secondary">← Volver al Dashboard</Link>
          <div>
            <select className="form-select" style={{ display: 'inline-block', width: 'auto' }}>
              <option value="todas">Todas las actividades</option>
              <option value="pendientes">Pendientes</option>
              <option value="completadas">Completadas</option>
            </select>
          </div>
        </div>

        {actividades.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
            <h3 className="card-title">No hay actividades disponibles</h3>
            <p className="card-subtitle">
              Tus docentes aún no han publicado actividades. Vuelve más tarde.
            </p>
          </div>
        ) : (
          <div className="grid grid-2">
            {actividades.map((actividad) => (
              <div key={actividad.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 className="card-title" style={{ marginBottom: 0 }}>{actividad.titulo}</h3>
                  <span className="badge badge-warning">Pendiente</span>
                </div>
                <p className="card-subtitle">
                  <strong>{actividad.tipo}</strong> • {actividad.docente}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <strong>Tema:</strong> {actividad.tema}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <strong>Dificultad:</strong> {actividad.dificultad === 'media' ? '🟡 Media' : actividad.dificultad === 'facil' ? '🟢 Fácil' : '🔴 Difícil'}
                </p>
                <p style={{ color: '#6b7280', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <strong>Preguntas:</strong> {actividad.preguntas?.length || 5}
                </p>
                <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.85rem', fontWeight: '600' }}>
                  ⏰ Vence: {actividad.vencimiento}
                </p>
                <Link to={`/estudiante/actividad/${actividad.id}`} className="btn btn-primary">
                  📝 Resolver Actividad →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
