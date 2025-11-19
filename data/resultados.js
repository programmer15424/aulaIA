export const resultados = [
  {
    id: 1,
    estudiante: "Valeria Quispe",
    estudianteId: 1,
    actividad: "Test de Ecosistemas",
    actividadId: 1,
    puntaje: 18,
    totalPuntos: 20,
    porcentaje: 90,
    respuestasCorrectas: 5,
    totalPreguntas: 5,
    fecha: "2025-11-20",
    estado: "Completado",
    retroalimentacion:
      "Excelente desempeño. Demuestra comprensión sólida de los ecosistemas.",
  },
  {
    id: 2,
    estudiante: "Diego Huamán",
    estudianteId: 2,
    actividad: "Test de Ecosistemas",
    actividadId: 1,
    puntaje: 15,
    totalPuntos: 20,
    porcentaje: 75,
    respuestasCorrectas: 4,
    totalPreguntas: 5,
    fecha: "2025-11-19",
    estado: "Completado",
    retroalimentacion:
      "Buen trabajo. Practica más sobre las causas del cambio climático.",
  },
  {
    id: 3,
    estudiante: "Katherine Saldaña",
    estudianteId: 3,
    actividad: "Test de Ecosistemas",
    actividadId: 1,
    puntaje: 12,
    totalPuntos: 20,
    porcentaje: 60,
    respuestasCorrectas: 3,
    totalPreguntas: 5,
    fecha: "2025-11-18",
    estado: "Completado",
    retroalimentacion:
      "Necesitas reforzar conceptos sobre fotosíntesis y cadena alimenticia.",
  },
  {
    id: 4,
    estudiante: "Luis Ccorahua",
    estudianteId: 4,
    actividad: "Matemática: Fracciones",
    actividadId: 2,
    puntaje: 16,
    totalPuntos: 20,
    porcentaje: 80,
    respuestasCorrectas: 4,
    totalPreguntas: 5,
    fecha: "2025-11-17",
    estado: "Completado",
    retroalimentacion: "Progreso notable. Sigue practicando operaciones con fracciones.",
  },
  {
    id: 5,
    estudiante: "Sofía Mendoza",
    estudianteId: 5,
    actividad: "Matemática: Fracciones",
    actividadId: 2,
    puntaje: 14,
    totalPuntos: 20,
    porcentaje: 70,
    respuestasCorrectas: 3,
    totalPreguntas: 5,
    fecha: "2025-11-16",
    estado: "Completado",
    retroalimentacion: "Buena base. Refuerza comparación de fracciones.",
  },
];

export const getResultadosByActividad = (actividadId) => {
  return resultados.filter((r) => r.actividadId === actividadId);
};

export const getResultadosByDocente = (docenteId) => {
  return resultados;
};
