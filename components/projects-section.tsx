import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Renewable Energy Analytics Platform",
    description:
      "Built a full-stack data engineering platform — Kafka streaming ingestion, Bronze/Silver/Gold Lakehouse architecture, and DuckDB analytics — to process real-time weather data across German cities. Engineered domain-specific renewable energy metrics (Solar Score, Wind Energy Index, Energy Potential) and delivered insights through an interactive geospatial Streamlit dashboard.",
    image: "/project-pipeline.png",
    tags: ["Kafka", "DuckDB", "Streamlit", "Lakehouse","Geospatial"],
    href: "#",
  },
  //{
  //  title: "Cloud Warehouse Migration",
  //  description:
  //    "Migrated a legacy on-prem warehouse to Snowflake with zero downtime, cutting query times 60% and storage costs by a third.",
  //  image: "/project-warehouse.png",
  //  tags: ["Snowflake", "dbt", "Terraform"],
  //  href: "#",
  //},
  //{
  //  title: "ML Feature Store",
  //  description:
  //    "Designed a centralized feature store serving online and offline features to the ML team, standardizing data across 30+ models.",
  //  image: "/project-ml.png",
  //  tags: ["Spark", "Databricks", "Feast", "GCP"],
  //  href: "#",
  //},
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary">03 / Selected Work</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Projects I&apos;m proud of.
            </h2>
          </div>
          <a
            href="https://github.com/nancydhusar"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            See all on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} visualization`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
