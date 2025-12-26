type Props = {
  title: string;
  description: string;
};

export default function GenreCard({ title, description }: Props) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-800">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
}
