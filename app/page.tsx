import Link from "next/link";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  href,
  meta,
}: {
  title: string;
  desc: string;
  href: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-slate-900 group-hover:text-slate-950">
            {title}
          </h3>
          {meta ? (
            <p className="mt-1 text-xs text-slate-500">{meta}</p>
          ) : null}
        </div>
        <span className="text-slate-300 group-hover:text-slate-400 transition">
          →
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering portfolio
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Mechanical Engineering (Mechatronics) at UBC. I build pragmatic,
              testable systems—from CAD and mechanisms to embedded control and
              validation.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Tag>Mechatronics</Tag>
            <Tag>Mechanical Design</Tag>
            <Tag>Controls</Tag>
            <Tag>Embedded</Tag>
            <Tag>Testing</Tag>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              View Projects
            </Link>
            <Link
              href="/posts"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Read Posts
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Featured work
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Case studies with design rationale, trade-offs, and results.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            See all →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            title="Titan Endurance Project"
            meta="Fully mechanical vehicle • 2nd place"
            desc="Designed an energy-efficient, fully mechanical system—propulsion and actuation without electronics. Focused on efficiency, passive stability, and iteration through testing."
            href="/projects/titan-endurance"
          />
          <Card
            title="Capstone: Litter Drone"
            meta="Concept → prototypes • Systems engineering"
            desc="End-to-end development across mechanical design, subsystem integration, and test planning, with an emphasis on reliable real-world operation."
            href="/projects"
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-900">Engineering teams</p>
          <p className="mt-2 text-sm text-slate-600">
            UBC UAS • Solar • Baja (projects and competition build experience)
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-900">Experience</p>
          <p className="mt-2 text-sm text-slate-600">
            Co-op/internships spanning design, operations, and technical delivery.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-900">Achievements</p>
          <p className="mt-2 text-sm text-slate-600">
            Scholarships, certificates, and competition outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
