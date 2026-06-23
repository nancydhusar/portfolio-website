import { Cloud, Database, GitBranch, Workflow } from "lucide-react"

const services = [
  {
    icon: Workflow,
    title: "Data Pipelines & Orchestration",
    description:
      "End-to-end batch and event-driven pipelines using Airflow, Python, and SQL — focused on data ingestion, validation, transformation, and reliable delivery to BigQuery.",
    tags: ["Airflow", "Python", "SQL", "Pub/Sub", "Cloud Run", "ETL/ELT"],
  },
  {
    icon: Cloud,
    title: "Cloud Data Engineering (GCP Focused)",
    description:
      "Scalable cloud data solutions on Google Cloud Platform including BigQuery, Cloud Storage, Pub/Sub, and Terraform-based infrastructure automation.",
    tags: ["GCP", "BigQuery", "Cloud Storage", "Terraform", "IAM"],
  },
  {
    icon: Database,
    title: "Data Warehousing & Analytics",
    description:
      "Building curated and analytics-ready datasets in BigQuery with strong data modeling, partitioning, and performance optimization for reporting and insights.",
    tags: ["BigQuery", "SQL", "Data Modeling", "Looker", "DBT"],
  },
  {
    icon: GitBranch,
    title: "Data Migration & Data Quality",
    description:
      "Migrating data from legacy systems (DB2, Azure, SAP) to cloud platforms with validation checks, schema consistency, and automated data quality controls.",
    tags: ["Data Migration", "DB2", "Data Quality", "Data Validation", "ETL/ELT Testing"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">02 / Skills &amp; Services</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            What I bring to your data stack.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="group bg-background p-8 transition-colors hover:bg-secondary/40">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{service.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
