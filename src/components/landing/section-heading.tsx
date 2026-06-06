type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description: string
  center?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-[color:var(--border-strong)] bg-[color:var(--panel-soft)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-2)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)] md:text-lg">
        {description}
      </p>
    </div>
  )
}
