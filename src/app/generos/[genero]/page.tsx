import { notFound } from "next/navigation";
import { chacareras } from "@/data/chacarera";
import { genres } from "@/data/Genres";
import Lista from "@/components/Lista";

type Props = {
  params: Promise<{
    genero: string;
  }>;
};

export default async function GeneroPage({ params }: Props) {
  const { genero } = await params;

  const generoData = genres.find(
    (g) => g.slug === genero
  );

  if (!generoData) {
    notFound();
  }

  const canciones =
    genero === "chacarera" ? chacareras : [];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">
        {generoData.nombre}
      </h1>

      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        {generoData.descripcion}
      </p>

      {canciones.length > 0 ? (
        <div className="space-y-3">
          {canciones.map((c) => (
            <Lista
              key={c.slug}
              genero={genero}
              title={c.title}
              slug={c.slug}
              author={c.author}
            />
          ))}
        </div>
      ) : (
        <p className="italic text-neutral-500">
          Próximamente canciones de este género 🎶
        </p>
      )}
    </section>
  );
}
