import { Zap, Cloud, Users, CheckCircle } from "lucide-react";

const focusAreas = [
  {
    icon: Zap,
    title: "Automation & Efficiency",
    description:
      "Streamlining workflows and eliminating manual processes through CI/CD pipelines, infrastructure as code, and automated testing to maximize productivity.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Architecture",
    description:
      "Designing cloud infrastructure that scales seamlessly with demand, leveraging auto-scaling, load balancing, and distributed systems for optimal performance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working closely with development teams to bridge the gap between development and operations, fostering a culture of shared responsibility and continuous improvement.",
  },
  {
    icon: CheckCircle,
    title: "Production Readiness",
    description:
      "Ensuring systems are reliable, secure, and monitored with comprehensive observability, disaster recovery plans, and incident response procedures.",
  },
];

export function CareerFocus() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Career Focus
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The core principles and areas that drive my work in DevOps and cloud
            engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <area.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm text-primary">
                <span className="font-medium">Focus Area {index + 1}</span>
                <div className="ml-2 h-px flex-1 bg-primary/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
