import { genres } from "@/data/Genres";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {genres.map((g) => (
          <Link
            key={g.slug}
            href={`/generos/${g.slug}`}
            className="block rounded-xl p-6 bg-white/80 dark:bg-neutral-900/80 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{g.nombre}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}