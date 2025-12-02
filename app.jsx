'use client';
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import DashboardDocente from "./views/docente/Dashboard";
import PlanesDocente from "./views/docente/Planes";
import CrearPlan from "./views/docente/CrearPlan";
import EditarPlan from "./views/docente/EditarPlan";
import GenerarActividades from "./views/docente/GenerarActividades";
import ResultadosDocente from "./views/docente/Resultados";
import DashboardEstudiante from "./views/estudiante/Dashboard";
import ActividadesEstudiante from "./views/estudiante/Actividades";
import ResolverActividad from "./views/estudiante/ResolverActividad";
import Retroalimentacion from "./views/estudiante/Retroalimentacion";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setUsuario={setUsuario} />}
        />

        {/* Rutas Docente */}
        <Route
          path="/docente"
          element={usuario?.tipo === "docente" ? <DashboardDocente usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/docente/planes"
          element={usuario?.tipo === "docente" ? <PlanesDocente usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/docente/planes/nuevo"
          element={usuario?.tipo === "docente" ? <CrearPlan usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/docente/planes/editar/:id"
          element={usuario?.tipo === "docente" ? <EditarPlan usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/docente/actividades"
          element={usuario?.tipo === "docente" ? <GenerarActividades usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/docente/resultados"
          element={usuario?.tipo === "docente" ? <ResultadosDocente usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />

        {/* Rutas Estudiante */}
        <Route
          path="/estudiante"
          element={usuario?.tipo === "estudiante" ? <DashboardEstudiante usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/estudiante/actividades"
          element={usuario?.tipo === "estudiante" ? <ActividadesEstudiante usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/estudiante/actividad/:id"
          element={usuario?.tipo === "estudiante" ? <ResolverActividad usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/estudiante/retroalimentacion/:id"
          element={usuario?.tipo === "estudiante" ? <Retroalimentacion usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
