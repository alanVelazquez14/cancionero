export type Genero = {
  slug: string;
  nombre: string;
  descripcion: string;
};

export const genres: Genero[] = [
  {
    slug: "chacarera",
    nombre: "Chacarera",
    descripcion: "Ritmo santiagueño por excelencia, alegre y bien marcado.",
  },
  {
    slug: "chamame",
    nombre: "Chamamé",
    descripcion: "Música del litoral, melancólica y profunda.",
  },
  {
    slug: "tonada",
    nombre: "Tonada",
    descripcion: "Canto cuyano, pausado y expresivo.",
  },
  {
    slug: "cueca",
    nombre: "Cueca",
    descripcion: "Danza de pañuelo, presente en todo el oeste argentino.",
  },
  {
    slug: "gato",
    nombre: "Gato",
    descripcion: "Ritmo vivaz, picaresco y popular.",
  },
];
