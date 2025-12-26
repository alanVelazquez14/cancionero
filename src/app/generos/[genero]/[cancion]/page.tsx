import { notFound } from "next/navigation";
import { chacareras } from "@/data/chacarera";

type Props = {
  params: {
    genero: string;
    cancion: string;
  };
};

export default async function CancionPage({ params }: Props) {
  const { genero, cancion } = await params;

  if (genero !== "chacarera") {
    notFound();
  }

  const tema = chacareras.find((c) => c.slug === cancion);

  if (!tema) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold">{tema.title}</h1>

      {tema.author && (
        <p className="text-neutral-600 dark:text-neutral-400">{tema.author}</p>
      )}

      {tema.tono && <p className="mt-2 text-sm italic">Tono: {tema.tono}</p>}

      <pre className="mt-8 whitespace-pre-wrap font-mono text-sm bg-white/70 dark:bg-neutral-900/70 p-6 rounded-xl overflow-x-auto">
        {tema.letra}
      </pre>
    </section>
  );
}
