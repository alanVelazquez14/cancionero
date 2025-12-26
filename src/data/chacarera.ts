export type Cancion = {
  title: string;
  slug: string;
  author?: string;
  tono?: string;
  letra?: string;
};

export const chacareras: Cancion[] = [
  {
    title: "Puente Carretero",
    slug: "puente-carretero",
    author: "Peteco Carabajal",
    letra: `
A7                    D
Si pasas por mi provincia
                    A
Con tu familia viajero
           F7          Bm
Veras que lindo es el río
 E7                    A
Desde el Puente Carretero


A7                   D
Es cuna de mil recuerdos
                     A
De amores y de nostalgias
          F7       Bm
Corazón entrelazado
    E7                  A
Entre Santiago y La Banda


A7                   D
Será el Puente Carretero
                   A
Que va cortando caminos
           F7          Gm
Para llegar a los brazos
    E7                 A
Donde me espera un cariño


A7                     D
Encontrarás en mi tierra
                  A
Cantores de salamanca
          F7           Bm
Para que nunca te olvides
    E7                A
Aromas a Santiago manta

A7                     D
Por nada olvides viajero
                         A
Lo que sienten mis paisanos
         F7           Bm
Seguro te han de querer
         E7               A
Como se quiere a un hermano

A7                    D
Y cuando llega la noche
                     A
Te pasas mirando el río
         F7           Bm
Seguro que algún dorado
         E7        A
Se besa con el rocío

 A7                    D
Coplitas que van naciendo
                     A
De mi corazón travieso
           F7               Bm
Me hacen cosquilla en el alma
            E7              A
Cuando se agranda el silencio

A7                     D
Encontrarás en mi tierra
                  A
Cantores de salamanca
          F7           Bm
Para que nunca te olvides
    E7                A
Aromas a Santiago manta`,
  },
  {
    title: "Añoranzas",
    slug: "anoranzas",
    author: "Julio Argentino Jerez",
  },
  {
    title: "Entre a mi pago sin golpear",
    slug: "entre-a-mi-pago-sin-golpear",
    author: "Carlos Carabajal",
  },
  {
    title: "Chacarera del rancho",
    slug: "chacarera-del-rancho",
    author: "Hermanos Ábalos",
  },
];
