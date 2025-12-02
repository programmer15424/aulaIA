'use client';
import React from "react";
import { Link } from "react-router-dom";
import { planes } from "../../data/planes";
import { actividades } from "../../data/actividades";
import { estudiantes } from "../../data/estudiantes";

export default function DashboardDocente({ usuario, onLogout }) {
  const planesDocente = planes.filter(p => p.docenteId === usuario?.id);
  const actividadesPublicadas = actividades.filter(a => a.estado === "Publicado").length;
  const totalEstudiantes = estudiantes.length;
  const planesRecientes = planesDocente.slice(0, 3);

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Dashboard Docente</h1>
        <div className="header-actions">
          <span className="header-user">Bienvenido, {usuario?.nombre}</span>
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '32px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{planesDocente.length}</h3>
            <p className="card-subtitle">Planes Creados</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{actividadesPublicadas}</h3>
            <p className="card-subtitle">Actividades Publicadas</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{totalEstudiantes}</h3>
            <p className="card-subtitle">Estudiantes Vinculados</p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Acceso Rápido</h2>
        <div className="grid grid-3" style={{ marginBottom: '32px' }}>
          <Link to="/docente/planes" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className="card-title">Planes de Estudio</h3>
            <p className="card-subtitle">Gestionar planes de estudio</p>
          </Link>
          <Link to="/docente/actividades" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className="card-title">Actividades</h3>
            <p className="card-subtitle">Generar y gestionar actividades</p>
          </Link>
          <Link to="/docente/resultados" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className="card-title">Resultados</h3>
            <p className="card-subtitle">Ver resultados de estudiantes</p>
          </Link>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Planes Recientes</h2>
        <div className="grid grid-2">
          {planesRecientes.map((plan) => (
            <div key={plan.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 className="card-title">{plan.titulo}</h3>
                  <p className="card-subtitle">
                    {plan.asignatura} • {plan.nivel} • {plan.grado}
                  </p>
                  <p style={{ marginTop: '8px', color: '#6b7280' }}>{plan.tema}</p>
                </div>
                <span className={`badge ${plan.estado === 'Publicado' ? 'badge-success' : 'badge-warning'}`}>
                  {plan.estado}
                </span>
              </div>
              <Link to={`/docente/planes/editar/${plan.id}`} className="btn btn-primary btn-sm" style={{ marginTop: '16px' }}>
                Ver Plan →
              </Link>
            </div>
          ))}
          {planesRecientes.length === 0 && (
            <div className="card">
              <p className="card-subtitle">No tienes planes creados aún. <Link to="/docente/planes/nuevo">Crear uno ahora</Link></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
