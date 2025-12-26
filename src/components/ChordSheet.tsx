type Props = {
  title: string;
  author?: string;
  key?: string;
  letra: string;
};

export default function ChordSheet({ title, author, key, letra }: Props) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{title}</h1>
      {author && <p><strong>Autor:</strong> {author}</p>}
      {key && <p><strong>Tono:</strong> {key}</p>}
      <pre className="font-mono whitespace-pre-wrap">
        {letra}
      </pre>
    </article>
  );
}
