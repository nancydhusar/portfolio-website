import { Cloud, Database, GitBranch, Workflow } from "lucide-react"

const services = [
  {
    icon: Workflow,
    title: "Data Pipelines & ETL",
    description:
      "Batch and streaming pipelines with Airflow, dbt, Spark, and Kafka — built to be idempotent, tested, and observable.",
    tags: ["Airflow", "dbt", "Spark", "Kafka", "Flink"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Cloud-native data platforms across AWS, GCP, and Azure — IaC, cost optimization, and secure, scalable design.",
    tags: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Warehousing & Lakehouse",
    description:
      "Modern warehouses and lakehouses with strong modeling, partitioning, and governance for fast, trustworthy analytics.",
    tags: ["Snowflake", "BigQuery", "Databricks", "Redshift", "Iceberg"],
  },
  {
    icon: GitBranch,
    title: "DataOps & Reliability",
    description:
      "CI/CD for data, lineage, monitoring, and data-quality testing so pipelines stay healthy and incidents stay rare.",
    tags: ["Great Expectations", "Monte Carlo", "GitHub Actions", "Datadog"],
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
