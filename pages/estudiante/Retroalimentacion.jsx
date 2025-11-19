'use client';
import React from "react";
import { Link, useParams } from "react-router-dom";
import { actividades } from "../../data/actividades";

export default function Retroalimentacion({ usuario, onLogout }) {
  const { id } = useParams();
  const actividad = actividades.find((a) => a.id === parseInt(id));

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Retroalimentación</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <Link to="/estudiante/actividades" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver a Actividades
        </Link>
        <div className="alert alert-success" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <strong>✅ ¡Actividad Completada!</strong> Tu actividad ha sido calificada automáticamente. Revisa los detalles a continuación.
        </div>

        <div className="grid grid-3" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <div className="card" style={{ textAlign: 'center', backgroundColor: '#d1fae5' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--color-success)' }}>17/20</h3>
            <p className="card-subtitle">Puntaje Obtenido</p>
          </div>
          <div className="card" style={{ textAlign: 'center', backgroundColor: '#dbeafe' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--color-primary)' }}>85%</h3>
            <p className="card-subtitle">Porcentaje</p>
          </div>
          <div className="card" style={{ textAlign: 'center', backgroundColor: '#fef3c7' }}>
            <h3 className="card-title" style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--color-accent)' }}>4/5</h3>
            <p className="card-subtitle">Respuestas Correctas</p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <h2 className="card-title">{actividad?.titulo}</h2>
          <p className="card-subtitle">
            {actividad?.tipo} • Completado el 19/11/2025
          </p>
        </div>

        <div className="card" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <h3 className="card-title">📊 Retroalimentación General</h3>
          <p className="card-content" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <strong>Excelente trabajo.</strong> Has demostrado una buena comprensión del tema de ecosistemas.
            Considera profundizar en los conceptos relacionados con el cambio climático para mejorar aún más tu desempeño.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <h3 className="card-title">📝 Detalles por Pregunta</h3>
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num} style={{ padding: '12px', backgroundColor: index < 4 ? '#d1fae5' : '#fee2e2', borderRadius: '8px', marginBottom: '12px' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                <strong>Pregunta {num}:</strong> {index < 4 ? '✅ Correcta' : '❌ Incorrecta'}
              </p>
              {index >= 4 && (
                <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: '#991b1b' }}>
                  <strong>Respuesta correcta:</strong> Cambio climático (tu respuesta: Erupciones volcánicas)
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="card" style={{ maxWidth: '800px', backgroundColor: '#ede9fe' }}>
          <h3 className="card-title">💡 Sugerencias de Mejora</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Repasa los conceptos sobre causas del cambio climático en los Andes peruanos</li>
            <li>Investiga más sobre los efectos del calentamiento global en ecosistemas montañosos</li>
            <li>Consulta material adicional sobre conservación ambiental en el Perú</li>
          </ul>
        </div>

        <div style={{ maxWidth: '800px', marginTop: '24px' }}>
          <Link to="/estudiante/actividades" className="btn btn-primary">
            ← Volver a Actividades
          </Link>
        </div>
      </div>
    </div>
  );
}
