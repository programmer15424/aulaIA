'use client';
import React from "react";
import { Link } from "react-router-dom";

export default function DashboardEstudiante({ usuario, onLogout }) {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Dashboard Estudiante</h1>
        <div className="header-actions">
          <span className="header-user">Bienvenido, {usuario?.nombre}</span>
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div className="alert alert-warning" style={{ marginBottom: '24px' }}>
          <strong>📢 Atención:</strong> Tienes 2 actividades pendientes. ¡No olvides completarlas antes de la fecha límite!
        </div>

        <div className="grid grid-3" style={{ marginBottom: '32px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>2</h3>
            <p className="card-subtitle">Actividades Pendientes</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>5</h3>
            <p className="card-subtitle">Actividades Completadas</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--color-success)' }}>85%</h3>
            <p className="card-subtitle">Promedio General</p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Acceso Rápido</h2>
        <div className="grid grid-2" style={{ marginBottom: '32px' }}>
          <Link to="/estudiante/actividades" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className="card-title">📝 Mis Actividades</h3>
            <p className="card-subtitle">Ver y resolver actividades asignadas</p>
            <p style={{ marginTop: '12px', color: '#6b7280', fontSize: '0.9rem' }}>
              Accede a todas las actividades disponibles y revisa tu progreso.
            </p>
          </Link>
          <div className="card" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
            <h3 className="card-title">📊 Mis Calificaciones</h3>
            <p className="card-subtitle">Ver historial de resultados</p>
            <p style={{ marginTop: '12px', color: '#6b7280', fontSize: '0.9rem' }}>
              Próximamente: Revisa todas tus calificaciones y estadísticas.
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Actividades Recientes</h2>
        <div className="grid grid-2">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
              <h3 className="card-title">Test de Ecosistemas</h3>
              <span className="badge badge-warning">Pendiente</span>
            </div>
            <p className="card-subtitle">Ciencia y Ambiente • Mariela Torres</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '8px' }}>Vence: 01/12/2025</p>
            <Link to="/estudiante/actividad/1" className="btn btn-primary btn-sm" style={{ marginTop: '12px' }}>
              Resolver Ahora →
            </Link>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
              <h3 className="card-title">Matemática: Fracciones</h3>
              <span className="badge badge-warning">Pendiente</span>
            </div>
            <p className="card-subtitle">Matemática • Carlos Paredes</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '8px' }}>Vence: 28/11/2025</p>
            <Link to="/estudiante/actividad/2" className="btn btn-primary btn-sm" style={{ marginTop: '12px' }}>
              Resolver Ahora →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
