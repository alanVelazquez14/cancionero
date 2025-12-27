import { chacareras } from "./chacarera";
import type { Cancion } from "./chacarera";
import { chamames } from "./chamame";
import { gatos } from "./gato";
import { tonadas } from "./tonada";
import { zambas } from "./zamba";

export type GeneroSlug = "chacarera" | "chamame" | "gato" | "tonada" | "zamba";

export const cancionesPorGenero: Record<GeneroSlug, Cancion[]> = {
  chacarera: chacareras,
  chamame: chamames,
  gato: gatos,
  tonada: tonadas,
  zamba: zambas,
};
