import type { LegalDocument } from '../data/legal'

type LegalPageProps = {
  document: LegalDocument
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--border-subtle)] bg-[color:var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[960px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-semibold tracking-[-0.03em]">Simplio Hub</a>
          <a href="/" className="button-secondary !min-h-0 !px-4 !py-2">Volver al inicio</a>
        </div>
      </header>

      <main className="mx-auto max-w-[960px] px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <article className="panel-shell overflow-hidden px-6 py-10 sm:px-10 md:px-14 md:py-14">
          <div className="border-b border-[color:var(--border-subtle)] pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-2)]">{document.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">{document.title}</h1>
            <p className="mt-4 text-sm text-[color:var(--text-secondary)]">Última actualización: {document.updatedAt}</p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[color:var(--text-secondary)]">{document.introduction}</p>
          </div>

          <div className="mt-10 space-y-10">
            {document.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-[-0.025em]">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => {
                  const [beforeEmail, afterEmail] = paragraph.split('support@simpliohub.com')

                  return (
                    <p key={paragraph} className="mt-4 text-[0.95rem] leading-7 text-[color:var(--text-secondary)]">
                      {beforeEmail}
                      {afterEmail !== undefined ? <a className="font-medium text-[color:var(--accent-2)]" href="mailto:support@simpliohub.com">support@simpliohub.com</a> : null}
                      {afterEmail ?? ''}
                    </p>
                  )
                })}
                {section.items ? (
                  <ul className="mt-4 grid gap-2 text-[0.95rem] leading-7 text-[color:var(--text-secondary)] sm:grid-cols-2">
                    {section.items.map((item) => <li key={item} className="flex gap-3"><span className="text-[color:var(--accent-2)]">•</span><span>{item}</span></li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="mx-auto max-w-[960px] px-4 pb-10 text-center text-xs text-[color:var(--text-secondary)] sm:px-6 lg:px-8">
        © 2026 Simplio Hub. Todos los derechos reservados.
      </footer>
    </div>
  )
}
