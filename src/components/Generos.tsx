type Props = {
  title: string;
  description: string;
};

export default function GenreCard({ title, description }: Props) {
  return (
    <div className="card-style p-6 hover:border-zinc-700 dark:hover:bg-zinc-800/50 group">
      <h2 className="text-xl font-bold tracking-tight dark:text-zinc-100 group-hover:text-indigo-400 transition-colors">
        {title}
      </h2>
      <p className="text-sm dark:text-zinc-400 mt-1">
        {description}
      </p>
    </div>
  );
}