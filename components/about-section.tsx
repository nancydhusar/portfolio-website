const experience = [
  {
    period: "May 2025 - Dec 2025",
    role: "Data Engineer",
    company: "Lloyds Technology Centre",
    description:
      "Led end-to-end migration of banking data pipelines (2–20M daily transactions, Teradata → BigQuery) using Dataflow and Airflow orchestration. Delivered dbt-modelled, analytics-ready BigQuery datasets and feature tables enabling AI/ML and predictive modelling for data science teams.",
  },
  {
    period: "Nov 2023 - Feb 2025",
    role: "Data Engineer",
    company: "Ascendion",
    description:
      "Delivered scalable, partitioned BigQuery pipelines for multi-billion row healthcare data — cutting query time by 30% and GCP costs by approx. 15% through SQL refactoring and workload optimisation. Applied validation frameworks and medical data compliance standards to ensure high data quality and reliable patient care analytics.",
  },
  {
    period: "Mar 2021 - Nov 2023",
    role: "Senior Analyst",
    company: "Capgemini",
    description:
      "Built cross-cloud data pipelines on GCP (Pub/Sub, Cloud Run) ingesting and validating SAP, KLOST, and enterprise data into BigQuery for real-time and batch scenarios. Collaborated with architects, analysts, and business teams to translate requirements into scalable analytics solutions, delivering actionable Looker dashboards and BI reporting across the organisation.",
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
            I build the data infrastructure that sits quietly behind good decisions. From migrating enterprise banking pipelines on GCP to engineering a renewable energy analytics platform from scratch - my work is about making data reliable, cost-efficient, and genuinely useful for the people who depend on it.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            I care about clean schemas, cost-efficient queries, and pipelines that fail loudly and recover gracefully - the unglamorous foundations that make everything else work. When I&apos;m not building pipelines, I&apos;m experimenting with new tools and architectures through personal projects.
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
