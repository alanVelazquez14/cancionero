import { notFound } from "next/navigation";
import { genres } from "@/data/Genres";
import { cancionesPorGenero } from "@/data/canciones";
import ListaCanciones from "@/components/ListaCanciones";

type Props = {
  params: Promise<{
    genero: string;
  }>;
};

export default async function GeneroPage({ params }: Props) {
  const { genero } = await params;

  const generoData = genres.find((g) => g.slug === genero);

  if (!generoData) {
    notFound();
  }

  const canciones =
    cancionesPorGenero[genero as keyof typeof cancionesPorGenero];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <ListaCanciones genero={genero} canciones={canciones} />
    </section>
  );
}
