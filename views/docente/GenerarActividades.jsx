'use client';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { planes } from "../../data/planes";

export default function GenerarActividades({ usuario, onLogout }) {
  const [planSeleccionado, setPlanSeleccionado] = useState("");
  const [nivel, setNivel] = useState("");

  const handleGenerar = () => {
    alert("Actividad generada exitosamente");
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Generar Actividades</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '16px' }}>
            Genera actividades educativas personalizadas usando IA. Selecciona un plan de clase y configura los parámetros.
          </p>
        </div>

        <Link to="/docente" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver al Dashboard
        </Link>

        <div className="card" style={{ maxWidth: '900px' }}>
          <h2 className="card-title">🎯 Generador de Actividades con IA</h2>
          <p className="card-subtitle" style={{ marginBottom: '24px' }}>
            Crea tests, ejercicios y evaluaciones automáticas basadas en tus planes de clase.
          </p>

          <div className="form-group">
            <label className="form-label">Plan de Estudio Base</label>
            <select
              value={planSeleccionado}
              onChange={(e) => setPlanSeleccionado(e.target.value)}
              className="form-select"
            >
              <option value="">-- Seleccionar plan de clase --</option>
              {planes.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.titulo} ({plan.asignatura} - {plan.grado})
                </option>
              ))}
            </select>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>
              El contenido se generará basándose en el plan seleccionado
            </p>
          </div>

          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Tipo de Actividad</label>
              <select className="form-select">
                <option value="test">Test de Opción Múltiple</option>
                <option value="verdadero-falso">Verdadero/Falso</option>
                <option value="completar">Completar Espacios</option>
                <option value="desarrollo">Preguntas de Desarrollo</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Número de Preguntas</label>
              <select className="form-select">
                <option value="5">5 preguntas</option>
                <option value="10">10 preguntas</option>
                <option value="15">15 preguntas</option>
                <option value="20">20 preguntas</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Nivel de Dificultad</label>
            <div className="radio-group">
              <div className="radio-option">
                <input type="radio" id="basico" name="dificultad" value="basico" checked={nivel === 'basico'} onChange={(e) => setNivel(e.target.value)} />
                <label htmlFor="basico">🟢 Básico - Conceptos fundamentales</label>
              </div>
              <div className="radio-option">
                <input type="radio" id="intermedio" name="dificultad" value="intermedio" checked={nivel === 'intermedio'} onChange={(e) => setNivel(e.target.value)} />
                <label htmlFor="intermedio">🟡 Intermedio - Aplicación de conceptos</label>
              </div>
              <div className="radio-option">
                <input type="radio" id="avanzado" name="dificultad" value="avanzado" checked={nivel === 'avanzado'} onChange={(e) => setNivel(e.target.value)} />
                <label htmlFor="avanzado">🔴 Avanzado - Análisis crítico</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tema Específico (Opcional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ej: Ecosistemas costeros del Perú"
            />
          </div>

          <div style={{ backgroundColor: '#fef3c7', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e' }}>
              ⚡ <strong>IA Generativa:</strong> Las preguntas serán creadas automáticamente considerando el currículo peruano y adaptadas al nivel educativo.
            </p>
          </div>

          <button 
            onClick={handleGenerar} 
            className="btn btn-primary btn-lg"
            disabled={!planSeleccionado || !nivel}
          >
            ✨ Generar Actividad con IA
          </button>
        </div>
      </div>
    </div>
  );
}
