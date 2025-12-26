import Link from "next/link";

type Props = {
  genero: string;
  title: string;
  slug: string;
  author?: string;
};

export default function Lista({
  genero,
  title,
  slug,
  author,
}: Props) {
  return (
    <Link
      href={`/generos/${genero}/${slug}`}
      className="block rounded-lg px-4 py-3 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 transition"
    >
      <h3 className="font-medium">{title}</h3>
      {author && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {author}
        </p>
      )}
    </Link>
  );
}
