export const planes = [
  {
    id: 1,
    titulo: "Plan de Ciencias - Ecosistemas",
    docente: "Mariela Torres",
    docenteId: 1,
    asignatura: "Ciencia y Ambiente",
    nivel: "Primaria",
    grado: "5to",
    tema: "Ecosistemas del Perú",
    duracion: "4 semanas",
    competencias:
      "Indaga mediante métodos científicos para construir conocimientos.",
    materiales:
      "Láminas sobre ecosistemas, videos educativos, pizarra interactiva, libros de consulta.",
    objetivos:
      "Que los estudiantes comprendan los componentes de un ecosistema y su importancia en la naturaleza.",
    createdAt: "2025-11-15",
    estado: "Publicado",
    versiones: [
      { version: "v1.0", fecha: "2025-11-15" },
      { version: "v1.1", fecha: "2025-11-16" },
      { version: "v2.0", fecha: "2025-11-18" },
    ],
  },
  {
    id: 2,
    titulo: "Fracciones y sus aplicaciones",
    docente: "Carlos Paredes",
    docenteId: 2,
    asignatura: "Matemática",
    nivel: "Primaria",
    grado: "5to",
    tema: "Introducción a fracciones",
    duracion: "3 semanas",
    competencias:
      "Resuelve problemas de cantidad que implican el uso de fracciones.",
    materiales:
      "Fichas de trabajo, manipulables (fracciones en papel), pizarra digital.",
    objetivos:
      "Que los estudiantes dominen la representación y operaciones básicas con fracciones.",
    createdAt: "2025-11-10",
    estado: "Publicado",
    versiones: [{ version: "v1.0", fecha: "2025-11-10" }],
  },
  {
    id: 3,
    titulo: "Literatura peruana clásica",
    docente: "Josué Gutiérrez",
    docenteId: 3,
    asignatura: "Lenguaje",
    nivel: "Secundaria",
    grado: "1ro",
    tema: "Obras maestras de autores peruanos",
    duracion: "5 semanas",
    competencias:
      "Lee diversos tipos de textos con estructura y propósitos diversos.",
    materiales:
      "Libros de consulta, fragmentos de obras, análisis crítico, audiolibros.",
    objetivos:
      "Que los estudiantes valoren la literatura peruana y desarrollen crítica literaria.",
    createdAt: "2025-11-12",
    estado: "Borrador",
    versiones: [{ version: "v1.0", fecha: "2025-11-12" }],
  },
];

export const getPlanesByDocente = (docenteId) => {
  return planes.filter((p) => p.docenteId === docenteId);
};

export const getPlanById = (id) => {
  return planes.find((p) => p.id === id);
};
