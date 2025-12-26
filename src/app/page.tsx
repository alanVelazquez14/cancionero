import Generos from "@/components/Generos";

const genres = [
  { title: "Chacarera", description: "Ritmo santiagueño para el zapateo" },
  { title: "Chamamé", description: "Música del litoral y el acordeón" },
  { title: "Tonada", description: "Canto cuyano, lento y profundo" },
  { title: "Cueca", description: "Baile cuyano de pañuelo" },
  { title: "Gato", description: "Folklore alegre y picaresco" },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {genres.map((g) => (
        <Generos
          key={g.title}
          title={g.title}
          description={g.description}
        />
      ))}
    </main>
  );
}
