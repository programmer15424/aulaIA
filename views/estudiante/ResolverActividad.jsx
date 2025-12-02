'use client';
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { actividades } from "../../data/actividades";

export default function ResolverActividad({ usuario, onLogout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const actividad = actividades.find((a) => a.id === parseInt(id));
  const [respuesta, setRespuesta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Respuesta enviada exitosamente");
    navigate(`/estudiante/retroalimentacion/${id}`);
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Resolver Actividad</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <Link to="/estudiante/actividades" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver
        </Link>
        <div className="alert alert-info" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <strong>ℹ️ Instrucciones:</strong> Lee cuidadosamente cada pregunta y selecciona la respuesta correcta. Tendrás retroalimentación inmediata al finalizar.
        </div>

        <div className="card" style={{ maxWidth: '800px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <h2 className="card-title">{actividad?.titulo}</h2>
              <p className="card-subtitle">
                {actividad?.tipo} • {actividad?.docente}
              </p>
            </div>
            <span className="badge badge-info">
              {actividad?.preguntas?.length || 5} preguntas
            </span>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              <strong>Tema:</strong> {actividad?.tema}<br/>
              <strong>Dificultad:</strong> {actividad?.dificultad}<br/>
              <strong>Tiempo estimado:</strong> 15-20 minutos
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {actividad?.preguntas?.map((pregunta, index) => (
            <div key={pregunta.id} className="card" style={{ maxWidth: '800px', marginBottom: '16px' }}>
              <h3 className="form-label">
                Pregunta {index + 1} de {actividad.preguntas.length}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px', color: '#1f2937' }}>
                {pregunta.pregunta}
              </p>
              <div className="radio-group" style={{ flexDirection: 'column', gap: '12px' }}>
                {pregunta.alternativas.map((alt, altIndex) => (
                  <div key={altIndex} className="radio-option" style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer' }}>
                    <input type="radio" id={`p${pregunta.id}-a${altIndex}`} name={`pregunta-${pregunta.id}`} value={altIndex} />
                    <label htmlFor={`p${pregunta.id}-a${altIndex}`} style={{ cursor: 'pointer', flex: 1 }}>{alt}</label>
                  </div>
                ))}
              </div>
            </div>
          )) || (
            <div className="card" style={{ maxWidth: '800px' }}>
              <div className="form-group">
                <label className="form-label">Tu Respuesta</label>
                <textarea
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  className="form-textarea"
                  rows="8"
                  placeholder="Escribe tu respuesta aquí..."
                  required
                />
              </div>
            </div>
          )}

          <div className="card" style={{ maxWidth: '800px', backgroundColor: '#fef3c7' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e' }}>
              ⚠️ <strong>Importante:</strong> Una vez enviado, no podrás modificar tus respuestas. Revisa bien antes de enviar.
            </p>
          </div>

          <div style={{ maxWidth: '800px', display: 'flex', gap: '12px', marginTop: '24px' }}>
            <button type="submit" className="btn btn-primary btn-lg">
              ✅ Enviar Respuestas
            </button>
            <Link to="/estudiante/actividades" className="btn btn-secondary btn-lg">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
