import { ArrowUpRight, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/social-icons"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-sm text-primary">04 / Contact</p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
                Let&apos;s build something
                <br />
                <span className="text-primary">data-driven.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                Have a pipeline that needs taming or a platform to design from scratch? I&apos;d love to hear about it.
              </p>

              <a
                href="mailto:hello@mayareyes.dev"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-4" />
                hello@mayareyes.dev
              </a>
            </div>

            <ul className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
              {[
                { icon: Github, label: "GitHub", value: "@mayareyes", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", value: "in/mayareyes", href: "https://linkedin.com" },
                { icon: Mail, label: "Email", value: "hello@mayareyes.dev", href: "mailto:hello@mayareyes.dev" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between gap-4 bg-background p-5 transition-colors hover:bg-secondary/50"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="size-5 text-primary" />
                      <span>
                        <span className="block font-mono text-xs text-muted-foreground">{item.label}</span>
                        <span className="block text-sm text-foreground">{item.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">© 2026 Maya Reyes. Built with care.</p>
          <p className="font-mono text-xs text-muted-foreground">Cloud Data Engineer</p>
        </footer>
      </div>
    </section>
  )
}
