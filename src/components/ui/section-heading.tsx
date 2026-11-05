interface SectionHeadingProps {
  id: string;
  number: string;
  title: string;
  aside?: string;
}

export function SectionHeading({ id, number, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 sm:mb-10">
      <h2 id={id} className="text-xs font-semibold tracking-[0.12em] uppercase">
        <span className="text-muted">{number} / </span>
        {title}
      </h2>
      {aside ? <p className="text-sm text-muted">{aside}</p> : null}
    </div>
  );
}
