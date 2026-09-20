export function SectionHeading({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-xl sm:mb-12">
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-base text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}
