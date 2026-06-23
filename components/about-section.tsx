const experience = [
  {
    period: "2022 — Present",
    role: "Senior Data Engineer",
    company: "Northwind Analytics",
    description:
      "Lead the data platform team building streaming and batch pipelines on AWS. Cut warehouse costs 38% by redesigning the ingestion layer.",
  },
  {
    period: "2019 — 2022",
    role: "Data Engineer",
    company: "Lumen Cloud",
    description:
      "Built the company's first lakehouse on GCP, powering analytics for 200+ internal users and real-time product metrics.",
  },
  {
    period: "2017 — 2019",
    role: "Analytics Engineer",
    company: "Bridge Labs",
    description:
      "Owned ETL and dbt models feeding executive dashboards, establishing data quality and testing standards.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-sm text-primary">01 / About</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            I make data infrastructure boring — in the best way.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            For nearly a decade I&apos;ve worked at the intersection of cloud infrastructure and data. My focus is
            building systems that are observable, cost-aware, and dependable — so analysts and ML teams can move fast
            without worrying about what&apos;s underneath.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            I care deeply about clean schemas, idempotent jobs, and pipelines that fail loudly and recover gracefully.
            When I&apos;m not orchestrating DAGs, I&apos;m writing about data architecture and mentoring engineers.
          </p>

          <div className="mt-10 space-y-px overflow-hidden rounded-xl border border-border bg-border">
            {experience.map((job) => (
              <div
                key={job.role}
                className="grid gap-2 bg-background p-6 transition-colors hover:bg-secondary/50 sm:grid-cols-[140px_1fr]"
              >
                <div className="font-mono text-xs text-muted-foreground">{job.period}</div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {job.role} · <span className="text-primary">{job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
