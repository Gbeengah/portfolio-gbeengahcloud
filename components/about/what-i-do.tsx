import {
  Cloud,
  Container,
  GitBranch,
  Shield,
  Activity,
  DollarSign,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Design and implement scalable, highly available cloud infrastructure on AWS and Azure with best practices for security and performance.",
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description:
      "Deploy and manage containerized applications using Kubernetes and Docker, with automated scaling and self-healing capabilities.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description:
      "Build end-to-end CI/CD pipelines using GitHub Actions, Jenkins, and ArgoCD for automated testing, building, and zero-downtime deployments.",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description:
      "Implement security best practices including IAM policies, network security, secrets management, and compliance frameworks.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Set up comprehensive monitoring stacks with Prometheus, Grafana, and alerting systems for full visibility into system health.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Analyze and optimize cloud spending through right-sizing, reserved instances, spot instances, and resource scheduling strategies.",
  },
];

export function WhatIDo() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I help organizations build and maintain robust cloud infrastructure
            that scales with their business needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
