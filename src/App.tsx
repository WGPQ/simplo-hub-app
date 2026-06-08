import { useEffect, useState } from 'react'
import heroImage from './assets/hero.png'
import {
  benefits,
  ecosystemProducts,
  industries,
  navItems,
  scheduleFeatures,
  testimonials,
  visionItems,
} from './data/landing'
import {
  BoltIcon,
  CalendarIcon,
  ChartIcon,
  HeartPulseIcon,
  MessageIcon,
  PawIcon,
  ScissorsIcon,
  ShieldIcon,
  SparklesIcon,
  StoreIcon,
  ToothIcon,
  TrendingIcon,
  UsersIcon,
} from './components/landing/icons'
import { SectionHeading } from './components/landing/section-heading'

type Theme = 'light' | 'dark'
type FooterLinkItem = {
  label: string
  href: string
  external?: boolean
}

const APP_SCHEDULE_URL = 'https://schedule.simpliohub.com/'
const WHATSAPP_URL = 'https://wa.me/593997702533'
const LINKEDIN_URL = 'https://www.linkedin.com/in/simplo-hub-a01203415'
const INSTAGRAM_URL = 'https://www.instagram.com/'

const footerProductLinks: FooterLinkItem[] = [
  { label: 'Schedule App', href: APP_SCHEDULE_URL, external: true },
  { label: 'CRM App', href: '#ecosystem' },
  { label: 'Inventory App', href: '#ecosystem' },
  { label: 'Analytics Hub', href: '#ecosystem' },
]

const footerContactLinks: FooterLinkItem[] = [
  { label: 'support@simpliohub.com', href: 'mailto:support@simpliohub.com', external: true },
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
]

const footerLegalLinks: FooterLinkItem[] = [
  { label: 'Privacidad', href: '#privacy' },
  { label: 'Terminos', href: '#terms' },
  { label: 'Seguridad', href: '#security' },
  { label: 'Soporte', href: '#support' },
]

const featureIcons = [SparklesIcon, BoltIcon, TrendingIcon, ShieldIcon]
const scheduleIcons = [CalendarIcon, UsersIcon, MessageIcon, TrendingIcon]
const industryIcons = [
  ScissorsIcon,
  SparklesIcon,
  StoreIcon,
  HeartPulseIcon,
  ToothIcon,
  PawIcon,
  UsersIcon,
]

function resolveInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem('simplo-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme] = useState<Theme>(resolveInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('simplo-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)]">
      <div className="mx-auto max-w-[1120px] px-4 pb-10 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 border-b border-[color:var(--border-subtle)] bg-[color:var(--header-bg)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#" className="text-sm font-semibold tracking-[-0.03em] text-[color:var(--text-primary)]">
              Simplo Hub
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[color:var(--text-secondary)] transition hover:text-[color:var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#cta" className="button-primary hidden sm:inline-flex">
                Request Demo
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-8 pt-8 md:space-y-10 md:pt-10">
          <section className="panel-shell overflow-hidden px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-[color:var(--badge-border)] bg-[color:var(--badge-bg)] px-4 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-2)]">
                Nueva plataforma SaaS 2024
              </span>
              <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-[color:var(--text-primary)] md:text-7xl">
                Aplicaciones simples.
                <span className="block bg-[linear-gradient(180deg,var(--text-primary),var(--accent-2))] bg-clip-text text-transparent">
                  Resultados extraordinarios.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[color:var(--text-secondary)] md:text-lg">
                Simplo Hub desarrolla soluciones SaaS modernas para ayudar a empresas a crecer,
                automatizar procesos y ofrecer mejores experiencias a sus clientes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#ecosystem" className="button-primary">
                  Explorar productos
                </a>
                <a href="#cta" className="button-secondary">
                  Solicitar demo
                </a>
              </div>
            </div>

            <div className="hero-device mt-12 lg:mt-14">
              <div className="hero-device__glow" />
              <div className="hero-device__frame">
                <img
                  src={heroImage}
                  alt="Dashboard de Simplo Hub mostrando metricas, agenda y comportamiento del negocio."
                  className="h-full w-full rounded-[22px] object-cover opacity-90"
                />
              </div>
            </div>
          </section>

          <section id="vision" className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="panel-card flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-sm font-medium text-[color:var(--text-secondary)]">One Hub, Multiple Apps.</p>
                <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                  Nuestra vision es construir un ecosistema conectado para negocios reales.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-[color:var(--text-secondary)]">
                  Simplo Hub no busca ser una sola herramienta. Diseñamos una plataforma que
                  centraliza aplicaciones especializadas, comparte contexto entre equipos y ayuda
                  a digitalizar operaciones con menos complejidad.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {visionItems.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length]

                return (
                  <article key={item.title} className="panel-card p-5">
                    <div className="icon-chip">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[color:var(--text-primary)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </section>

          <section id="ecosystem" className="panel-shell px-6 py-12 sm:px-8 md:px-10">
            <SectionHeading
              center
              eyebrow="El Ecosistema Simplo"
              title="Soluciones especializadas para cada rincon de tu negocio."
              description="Un stack de productos pensado para operar reservas, relacionamiento, ventas, inventario y comunicacion desde una misma vision."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {ecosystemProducts.map((product, index) => {
                const ProductIcon = index === 0 ? CalendarIcon : index % 2 === 0 ? ChartIcon : UsersIcon

                return (
                  <article
                    key={product.name}
                    className={`product-card ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                  >
                  <div className="flex items-start justify-between gap-4">
                    <div className="icon-chip">
                      <ProductIcon className="h-4 w-4" />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.63rem] font-semibold uppercase tracking-[0.22em] ${
                        product.status === 'live' ? 'status-live' : 'status-soon'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                    {product.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[color:var(--text-secondary)]">
                    {product.description}
                  </p>

                  {index === 0 ? (
                    <div className="featured-inline mt-8 flex items-center justify-between gap-4 rounded-3xl p-4">
                      <div>
                        <p className="text-sm font-medium text-[color:var(--text-primary)]">Schedule App</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                          Smart booking platform
                        </p>
                      </div>
                      <a href="#schedule-app" className="text-sm font-medium text-[color:var(--accent-2)]">
                        Saber mas →
                      </a>
                    </div>
                  ) : null}
                  </article>
                )
              })}
            </div>
          </section>

          <section id="schedule-app" className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="panel-card p-6 md:p-8">
              <p className="text-sm font-medium text-[color:var(--text-secondary)]">
                Potencia tu agenda con Schedule App
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                El primer producto del ecosistema Simplo Hub.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--text-secondary)]">
                Diseñado para negocios que viven de sus citas y reservas. Desde la primera reserva
                online hasta el seguimiento post-servicio, todo ocurre en una experiencia clara,
                centralizada y lista para escalar.
              </p>

              <div className="mt-8 grid gap-3">
                {scheduleFeatures.map((feature, index) => {
                  const Icon = scheduleIcons[index % scheduleIcons.length]

                  return (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)] px-4 py-3"
                    >
                      <div className="icon-chip !h-10 !w-10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-[color:var(--text-primary)]">{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="panel-card p-5 md:p-7">
              <div className="mockup-grid h-full min-h-[420px] rounded-[28px] p-4 sm:p-6">
                <div className="mockup-browser">
                  <div className="mockup-header flex items-center justify-between px-4 py-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8d83]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f3b54c]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7fd38c]" />
                    </div>
                    <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-secondary)]">
                      Schedule App Dashboard
                    </span>
                  </div>

                  <div className="grid gap-4 p-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-4">
                      <div className="mockup-panel rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-[color:var(--text-primary)]">Agenda inteligente</p>
                            <p className="mt-1 text-xs text-[color:var(--text-secondary)]">
                              Vista diaria con control de disponibilidad.
                            </p>
                          </div>
                          <div className="live-pill rounded-full px-2 py-1 text-xs">
                            Live
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-2">
                          {Array.from({ length: 21 }).map((_, cellIndex) => (
                            <div
                              key={cellIndex}
                              className={`calendar-cell h-8 rounded-lg ${
                                cellIndex === 10 || cellIndex === 11
                                  ? 'calendar-cell--active'
                                  : cellIndex % 5 === 0
                                    ? 'calendar-cell--mid'
                                    : 'calendar-cell--soft'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="mockup-panel rounded-2xl p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                            Conversion
                          </p>
                          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">92%</p>
                          <div className="mt-4 h-24 rounded-2xl bg-[linear-gradient(180deg,rgba(43,115,255,0.32),transparent)]" />
                        </div>
                        <div className="mockup-panel rounded-2xl p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                            Recordatorios
                          </p>
                          <div className="mt-4 space-y-3">
                            {['WhatsApp', 'Email', 'Confirmacion'].map((item) => (
                              <div key={item} className="mockup-list-item flex items-center justify-between rounded-2xl px-3 py-2 text-sm">
                                <span>{item}</span>
                                <span className="text-[color:var(--accent-2)]">Activo</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mockup-panel rounded-[24px] p-4">
                      <p className="text-sm font-medium text-[color:var(--text-primary)]">Metricas del negocio</p>
                      <div className="mt-4 flex h-40 items-end gap-2">
                        {[38, 62, 48, 77, 59, 83, 68, 72].map((value) => (
                          <div
                            key={value}
                            className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,rgba(63,135,255,0.95),rgba(23,34,79,0.18))]"
                            style={{ height: `${value}%` }}
                          />
                        ))}
                      </div>
                      <div className="mockup-list mt-5 rounded-2xl p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                          Modulos incluidos
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {['Reservas', 'Clientes', 'Staff', 'Sucursales', 'Reportes'].map((tag) => (
                            <span key={tag} className="module-tag rounded-full px-3 py-1 text-xs text-[color:var(--text-primary)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel-shell px-6 py-12 sm:px-8 md:px-10">
            <SectionHeading
              center
              eyebrow="Beneficios"
              title="La operacion diaria se vuelve mas simple, medible y escalable."
              description="Desde la primera reserva hasta el control de cada sucursal, cada modulo esta pensado para mover indicadores reales."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = [BoltIcon, ShieldIcon, TrendingIcon, SparklesIcon, MessageIcon, ChartIcon][
                  index % 6
                ]

                return (
                  <div key={benefit} className="panel-card flex items-center gap-4 p-5">
                    <div className="icon-chip !h-12 !w-12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{benefit}</h3>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Impacto visible en operacion, servicio y crecimiento.
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="panel-shell px-6 py-12 sm:px-8 md:px-10">
            <SectionHeading
              center
              eyebrow="Sectores"
              title="Diseñado para negocios que dependen de agendas, reservas y experiencias."
              description="Simplo Hub se adapta a equipos de servicio, salud y bienestar que necesitan orden, velocidad y seguimiento."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {industries.map((industry, index) => {
                const Icon = industryIcons[index % industryIcons.length]

                return (
                  <article key={industry} className="panel-card flex flex-col items-center gap-4 p-5 text-center">
                    <div className="icon-chip !h-12 !w-12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium text-[color:var(--text-primary)]">{industry}</h3>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="panel-card p-6">
                <div className="flex gap-1 text-sm tracking-[0.3em] text-[color:var(--accent-2)]">★★★★★</div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)]">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-2),var(--accent))] text-sm font-semibold text-white">
                    {testimonial.author
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--text-primary)]">{testimonial.author}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="cta" className="panel-shell px-6 py-14 text-center sm:px-8 md:px-10">
            <p className="text-sm font-medium text-[color:var(--text-secondary)]">
              Comienza a digitalizar tu negocio hoy.
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              Unete a cientos de empresas que ya estan ahorrando tiempo y elevando su experiencia.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[color:var(--text-secondary)]">
              Lleva reservas, clientes, personal y seguimiento comercial a una sola plataforma lista
              para crecer contigo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:support@simplohub.com" className="button-primary">
                Solicitar Demo
              </a>
              <a href="#schedule-app" className="button-secondary">
                Conocer Schedule App
              </a>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article id="privacy" className="panel-shell px-6 py-10 sm:px-8">
              <SectionHeading
                eyebrow="Legal"
                title="Privacidad"
                description="App Schedule opera con datos en UTC, visualizacion segun timezone y controles razonables para proteger la operacion del negocio."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                <p>
                  Simplo Hub procesa la informacion necesaria para operar reservas, clientes,
                  usuarios y recordatorios dentro del flujo normal del producto.
                </p>
                <p>
                  Cada empresa usuaria es responsable de la legitimidad de los datos que carga en
                  la plataforma y de su uso conforme a la normativa aplicable.
                </p>
              </div>
            </article>

            <article id="terms" className="panel-shell px-6 py-10 sm:px-8">
              <SectionHeading
                eyebrow="Legal"
                title="Terminos"
                description="El uso de App Schedule debe mantenerse dentro de fines licitos, operativos y compatibles con la gestion del negocio."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                <p>
                  Cada cuenta es responsable de sus credenciales, configuracion interna y uso
                  adecuado de la plataforma por parte de su equipo.
                </p>
                <p>
                  Simplo Hub puede actualizar funciones, reforzar seguridad o limitar acceso en
                  casos de abuso, riesgo operativo o incumplimiento del uso permitido.
                </p>
              </div>
            </article>

            <article id="security" className="panel-shell px-6 py-10 sm:px-8">
              <SectionHeading
                eyebrow="Operacion"
                title="Seguridad"
                description="La plataforma busca consistencia entre datos, agenda e interfaz sin perder trazabilidad ni control de acceso."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                <p>
                  El producto usa una logica de almacenamiento en UTC y renderiza segun el timezone
                  configurado para mantener coherencia entre base de datos y calendario.
                </p>
                <p>
                  Tambien se aplican medidas razonables de autenticacion, separacion por empresa y
                  proteccion de informacion sensible en el entorno de operacion.
                </p>
              </div>
            </article>

            <article id="support" className="panel-shell px-6 py-10 sm:px-8">
              <SectionHeading
                eyebrow="Contacto"
                title="Soporte"
                description="Los canales de contacto deben llevar rapido al usuario correcto sin esconder el siguiente paso."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                <p>
                  Puedes escribir a <a className="font-medium text-[color:var(--accent-2)]" href="mailto:support@simplohub.com">support@simplohub.com</a> o abrir una conversacion directa por <a className="font-medium text-[color:var(--accent-2)]" href={WHATSAPP_URL} rel="noreferrer" target="_blank">WhatsApp</a>.
                </p>
                <p>
                  Para presencia institucional y novedades del producto tambien puedes visitar el
                  perfil de <a className="font-medium text-[color:var(--accent-2)]" href={LINKEDIN_URL} rel="noreferrer" target="_blank">LinkedIn</a>.
                </p>
              </div>
            </article>
          </section>
        </main>

        <footer className="mt-4 border-t border-[color:var(--border-subtle)] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <h3 className="text-sm font-semibold text-[color:var(--text-primary)]">Simplo Hub</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-secondary)]">
                Soluciones tecnologicas elegantes para problemas cotidianos del negocio.
              </p>
            </div>
            <FooterColumn
              title="Productos"
              items={footerProductLinks}
            />
            <FooterColumn title="Contacto" items={footerContactLinks} />
            <FooterColumn title="Legal" items={footerLegalLinks} />
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--border-subtle)] pt-6 text-xs text-[color:var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2024 Simplo Hub. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#cta">Solicitar demo</a>
              <a href="#ecosystem">Productos</a>
              <a href="#vision">Plataforma</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

type FooterColumnProps = {
  title: string
  items: FooterLinkItem[]
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-primary)]">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition hover:text-[color:var(--accent-2)]"
              rel={item.external ? 'noreferrer' : undefined}
              target={item.external ? '_blank' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
