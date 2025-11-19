export const actividades = [
  {
    id: 1,
    titulo: "Test de Ecosistemas",
    tipo: "Test",
    planId: 1,
    docente: "Mariela Torres",
    tema: "Ecosistemas del Perú",
    dificultad: "media",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué es un ecosistema?",
        alternativas: [
          "Un conjunto de seres vivos e interacciones con su ambiente",
          "Solo un grupo de animales",
          "Una galaxia",
        ],
        respuestaCorrecta: 0,
      },
      {
        id: 2,
        pregunta: "¿Cuál es la principal causa del deshielo en los Andes?",
        alternativas: ["Cambio climático", "Erupciones volcánicas", "Terremotos"],
        respuestaCorrecta: 0,
      },
      {
        id: 3,
        pregunta: "¿Qué es la fotosíntesis?",
        alternativas: [
          "Proceso de producción de energía por las plantas",
          "Movimiento de la tierra",
          "Ciclo del agua",
        ],
        respuestaCorrecta: 0,
      },
      {
        id: 4,
        pregunta: "¿Cuál es el nivel más bajo de la cadena alimenticia?",
        alternativas: ["Productores (plantas)", "Consumidores primarios", "Descomponedores"],
        respuestaCorrecta: 0,
      },
      {
        id: 5,
        pregunta: "¿Qué ecosistema predomina en la región amazónica?",
        alternativas: ["Bosque tropical", "Desierto", "Tundra"],
        respuestaCorrecta: 0,
      },
    ],
    estado: "Publicado",
    createdAt: "2025-11-16",
    vencimiento: "2025-12-01",
  },
  {
    id: 2,
    titulo: "Matemática: Fracciones",
    tipo: "Test",
    planId: 2,
    docente: "Carlos Paredes",
    tema: "Introducción a fracciones",
    dificultad: "media",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Cuál es la mitad de 8?",
        alternativas: ["4", "2", "16"],
        respuestaCorrecta: 0,
      },
      {
        id: 2,
        pregunta: "¿Cuál fracción representa 50% de un total?",
        alternativas: ["1/2", "1/4", "1/3"],
        respuestaCorrecta: 0,
      },
      {
        id: 3,
        pregunta: "¿Qué es una fracción?",
        alternativas: [
          "Una parte de un todo",
          "Un número completo",
          "Una operación matemática",
        ],
        respuestaCorrecta: 0,
      },
      {
        id: 4,
        pregunta: "¿Cuál es el denominador en la fracción 3/5?",
        alternativas: ["5", "3", "8"],
        respuestaCorrecta: 0,
      },
      {
        id: 5,
        pregunta: "¿Cuál es mayor: 1/2 o 1/3?",
        alternativas: ["1/2", "1/3", "Son iguales"],
        respuestaCorrecta: 0,
      },
    ],
    estado: "Publicado",
    createdAt: "2025-11-14",
    vencimiento: "2025-11-28",
  },
];

export const getActividadesByPlan = (planId) => {
  return actividades.filter((a) => a.planId === planId);
};

export const getActividadesPendientes = (estudianteId) => {
  return actividades.map((a) => ({
    ...a,
    estado: "Pendiente",
    vence: "2025-12-01",
  }));
};

export const getActividadById = (id) => {
  return actividades.find((a) => a.id === id);
};
