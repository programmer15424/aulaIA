export const docentes = [
  {
    id: 1,
    nombre: "Mariela Torres",
    email: "mariela.torres@aulapro.edu",
    password: "password123",
    especialidad: "Ciencia y Ambiente",
    grado: "Primaria",
  },
  {
    id: 2,
    nombre: "Carlos Paredes",
    email: "carlos.paredes@aulapro.edu",
    password: "password123",
    especialidad: "Matemática",
    grado: "Primaria",
  },
  {
    id: 3,
    nombre: "Josué Gutiérrez",
    email: "josue.gutierrez@aulapro.edu",
    password: "password123",
    especialidad: "Lenguaje",
    grado: "Secundaria",
  },
];

export const getDocenteByEmail = (email) => {
  return docentes.find((d) => d.email === email);
};
