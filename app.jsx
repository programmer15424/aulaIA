'use client';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import DashboardDocente from "./pages/docente/Dashboard";
import PlanesDocente from "./pages/docente/Planes";
import CrearPlan from "./pages/docente/CrearPlan";
import EditarPlan from "./pages/docente/EditarPlan";
import GenerarActividades from "./pages/docente/GenerarActividades";
import ResultadosDocente from "./pages/docente/Resultados";
import DashboardEstudiante from "./pages/estudiante/Dashboard";
import ActividadesEstudiante from "./pages/estudiante/Actividades";
import ResolverActividad from "./pages/estudiante/ResolverActividad";
import Retroalimentacion from "./pages/estudiante/Retroalimentacion";
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
