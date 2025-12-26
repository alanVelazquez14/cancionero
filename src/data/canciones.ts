import { chacareras } from "./chacarera";
import type { Cancion } from "./chacarera";
import { chamames } from "./chamame";
import { tonadas } from "./tonada";
import { zambas } from "./zamba";

export type GeneroSlug = "chacarera" | "chamame" | "tonada" | "zamba";

export const cancionesPorGenero: Record<GeneroSlug, Cancion[]> = {
  chacarera: chacareras,
  chamame: chamames,
  tonada: tonadas,
  zamba: zambas,
};
