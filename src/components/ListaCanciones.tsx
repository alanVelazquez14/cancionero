"use client";

import { useState } from "react";
import Lista from "@/components/Lista";
import type { Cancion } from "@/data/chacarera";
import { genres } from "@/data/Genres";

type Props = {
  genero: string;
  canciones: Cancion[];
};

export default function ListaCanciones({ genero, canciones }: Props) {
  const [search, setSearch] = useState("");
    const generoData = genres.find((g) => g.slug === genero);
  

  const filtradas = canciones.filter((c) =>
    `${c.title} ${c.author ?? ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
        <h1 className="text-3xl font-semibold mb-2">{generoData?.nombre}</h1>
      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar canción..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring"
      />

      {/* LISTA */}
      {filtradas.length > 0 ? (
        <div className="space-y-3">
          {filtradas.map((c) => (
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
          No se encontraron canciones 🎶
        </p>
      )}
    </div>
  );
}
