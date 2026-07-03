import { Briefcase, Target, Zap } from "lucide-react";

export function ProfessionalSummary() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Professional Summary
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Senior DevOps and Cloud Infrastructure Engineer with
                extensive experience designing, automating, securing, and
                optimizing cloud environments across AWS and Azure. I specialize
                in building production-ready infrastructure using Terraform,
                implementing robust CI/CD pipelines, and orchestrating
                containerized workloads with Kubernetes and Docker.
              </p>
              <p>
                My approach combines deep technical expertise with a strong
                focus on reliability, security, and cost efficiency. I work
                closely with development teams to streamline deployments,
                improve system observability, and establish DevOps best
                practices that accelerate delivery while maintaining operational
                excellence.
              </p>
              <p>
                Whether it&apos;s architecting multi-tier applications,
                implementing zero-downtime deployments, or optimizing cloud
                costs, I bring a solutions-oriented mindset to every project.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Experience
              </h3>
              <p className="text-sm text-muted-foreground">
                8+ years of hands-on experience in DevOps, cloud architecture,
                and infrastructure automation across diverse industries.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Mission
              </h3>
              <p className="text-sm text-muted-foreground">
                To empower organizations with reliable, scalable, and secure
                cloud infrastructure that accelerates innovation and growth.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Approach
              </h3>
              <p className="text-sm text-muted-foreground">
                Infrastructure as Code, GitOps workflows, automated testing, and
                continuous improvement to deliver production-grade systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
