'use client';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CrearPlan({ usuario, onLogout }) {
  const [titulo, setTitulo] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [nivel, setNivel] = useState("");
  const [grado, setGrado] = useState("");
  const [duracion, setDuracion] = useState("");
  const [tema, setTema] = useState("");
  const [competencias, setCompetencias] = useState("");
  const [materiales, setMateriales] = useState("");
  const [objetivos, setObjetivos] = useState("");
  const [cargandoIA, setCargandoIA] = useState(false);
  const navigate = useNavigate();

  const generarSugerenciasIA = () => {
    setCargandoIA(true);
    setTimeout(() => {
      const sugerencias = `• Comprender los componentes básicos de ${tema || 'el tema seleccionado'}.\n• Analizar las relaciones e interacciones entre los elementos estudiados.\n• Desarrollar habilidades de investigación y observación científica.\n• Fomentar el pensamiento crítico sobre problemáticas actuales relacionadas.\n• Aplicar conocimientos en situaciones prácticas del contexto peruano.`;
      setObjetivos(sugerencias);
      setCargandoIA(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Plan creado exitosamente");
    navigate("/docente/planes");
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Crear Plan de Estudio</h1>
        <div className="header-actions">
          <button onClick={onLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <Link to="/docente/planes" className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          ← Volver
        </Link>
        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '900px' }}>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Título del Plan</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="form-input"
                placeholder="Ej: Plan de Ciencias - Ecosistemas"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Asignatura</label>
              <select
                value={asignatura}
                onChange={(e) => setAsignatura(e.target.value)}
                className="form-select"
                required
              >
                <option value="">Seleccionar...</option>
                <option value="Matemática">Matemática</option>
                <option value="Ciencia y Ambiente">Ciencia y Ambiente</option>
                <option value="Lenguaje">Lenguaje</option>
                <option value="Historia">Historia</option>
                <option value="Geografía">Geografía</option>
                <option value="Arte">Arte</option>
              </select>
            </div>
          </div>

          <div className="grid grid-3">
            <div className="form-group">
              <label className="form-label">Nivel Educativo</label>
              <select
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                className="form-select"
                required
              >
                <option value="">Seleccionar...</option>
                <option value="Primaria">Primaria</option>
                <option value="Secundaria">Secundaria</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Grado</label>
              <input
                type="text"
                value={grado}
                onChange={(e) => setGrado(e.target.value)}
                className="form-input"
                placeholder="Ej: 5to"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Duración</label>
              <input
                type="text"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
                className="form-input"
                placeholder="Ej: 4 semanas"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tema Principal</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="form-input"
              placeholder="Ej: Ecosistemas del Perú"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Competencias</label>
            <textarea
              value={competencias}
              onChange={(e) => setCompetencias(e.target.value)}
              className="form-textarea"
              rows="3"
              placeholder="Ej: Indaga mediante métodos científicos para construir conocimientos..."
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Materiales</label>
            <textarea
              value={materiales}
              onChange={(e) => setMateriales(e.target.value)}
              className="form-textarea"
              rows="3"
              placeholder="Ej: Láminas, videos educativos, pizarra interactiva..."
              required
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Objetivos Sugeridos</label>
              <button
                type="button"
                onClick={generarSugerenciasIA}
                className="btn btn-accent btn-sm"
                disabled={cargandoIA || !tema}
              >
                {cargandoIA ? '⏳ Generando...' : '✨ Generar con IA'}
              </button>
            </div>
            <textarea
              value={objetivos}
              onChange={(e) => setObjetivos(e.target.value)}
              className="form-textarea"
              rows="5"
              placeholder="Haz clic en 'Generar con IA' para obtener sugerencias automáticas..."
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button type="submit" className="btn btn-primary">
              Crear Plan
            </button>
            <Link to="/docente/planes" className="btn btn-secondary">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
