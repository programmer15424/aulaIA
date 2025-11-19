'use client';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { docentes } from "../data/docentes";
import { estudiantes } from "../data/estudiantes";

export default function Login({ setUsuario }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const docente = docentes.find(d => d.email === email && d.password === password);
    if (docente) {
      setUsuario({ ...docente, tipo: "docente" });
      navigate("/docente");
      return;
    }
    
    const estudiante = estudiantes.find(e => e.email === email && e.password === password);
    if (estudiante) {
      setUsuario({ ...estudiante, tipo: "estudiante" });
      navigate("/estudiante");
      return;
    }
    
    alert("Credenciales incorrectas");
  };

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="card-title text-center">Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
