import { notFound } from "next/navigation";
import { cancionesPorGenero } from "@/data/canciones";
import { genres } from "@/data/Genres";

type Props = {
  params: Promise<{
    genero: string;
    cancion: string;
  }>;
};

export default async function DetalleCancionPage({ params }: Props) {
  const { genero, cancion: cancionSlug } = await params;

  const generoData = genres.find((g) => g.slug === genero);

  const cancionesDelGenero =
    cancionesPorGenero[genero as keyof typeof cancionesPorGenero];
  const cancion = cancionesDelGenero?.find((c) => c.slug === cancionSlug);

  if (!cancion) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{cancion.title}</h1>
        {cancion.author && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {cancion.author}
          </p>
        )}
      </header>

      <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
        {cancion.letra ? (
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {cancion.letra}
          </pre>
        ) : (
          <p className="italic text-neutral-500 text-center py-10">
            La letra de esta canción todavía no ha sido cargada.
          </p>
        )}
      </div>
    </section>
  );
}
