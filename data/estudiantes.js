export const estudiantes = [
  {
    id: 1,
    nombre: "Valeria Quispe",
    email: "valeria.quispe@aulapro.edu",
    password: "password123",
    grado: "5to Primaria",
    seccion: "A",
  },
  {
    id: 2,
    nombre: "Diego Huamán",
    email: "diego.huaman@aulapro.edu",
    password: "password123",
    grado: "5to Primaria",
    seccion: "A",
  },
  {
    id: 3,
    nombre: "Katherine Saldaña",
    email: "katherine.saldana@aulapro.edu",
    password: "password123",
    grado: "5to Primaria",
    seccion: "B",
  },
  {
    id: 4,
    nombre: "Luis Ccorahua",
    email: "luis.ccorahua@aulapro.edu",
    password: "password123",
    grado: "6to Primaria",
    seccion: "A",
  },
  {
    id: 5,
    nombre: "Sofía Mendoza",
    email: "sofia.mendoza@aulapro.edu",
    password: "password123",
    grado: "5to Primaria",
    seccion: "B",
  },
];

export const getEstudianteByEmail = (email) => {
  return estudiantes.find((e) => e.email === email);
};
