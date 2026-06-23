import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Github, Linkedin } from "@/components/social-icons"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
            <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
            Available for new projects
          </p>

          <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Cloud Data
            <br />
            <span className="text-primary">Engineer</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I&apos;m Nancy. I design and build resilient data platforms — turning messy, high-volume data into
            reliable pipelines and warehouses that teams actually trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact me
            </a>
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/nancydhusar"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nancy-gupta-834897176/"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/portrait.jpeg"
              alt="Portrait of Nancy"
              width={640}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
        {[
          { value: "4+", label: "Years experience" },
          { value: "40+", label: "Pipelines shipped" },
          { value: "1-10TB", label: "Data processed daily" },
          { value: "99.9%", label: "Pipeline uptime" },
        ].map((stat) => (
          <div key={stat.label} className="bg-background p-6">
            <div className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
