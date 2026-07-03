import { Cloud, Terminal } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Cloud className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              DevOps & Cloud Engineer
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            About <span className="text-primary">GbengaCloud</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building resilient, scalable, and secure cloud infrastructure that
            powers modern businesses and drives innovation.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3">
            <Terminal className="h-5 w-5 text-primary" />
            <code className="text-sm text-muted-foreground">
              <span className="text-primary">$</span> whoami{" "}
              <span className="text-foreground">DevOps & Cloud Infrastructure Engineer</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
