import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    image: "/skills/aws.png",
    title: "Cloud Architecture",
    description:
      "Design scalable, resilient cloud architectures on AWS, Azure, or GCP tailored to your business needs.",
  },
  {
    image: "/skills/cicd.png",
    title: "CI/CD Implementation",
    description:
      "Build automated deployment pipelines that accelerate releases while maintaining quality and security.",
  },
  {
    image: "/skills/terraform.png",
    title: "Infrastructure as Code",
    description:
      "Transform manual processes into version-controlled, reproducible infrastructure with Terraform and Ansible.",
  },
  {
    image: "/skills/security.png",
    title: "Security & Compliance",
    description:
      "Implement DevSecOps practices, secrets management, and compliance frameworks (SOC2, HIPAA, PCI-DSS).",
  },
  {
    image: "/skills/prometheus.png",
    title: "Observability",
    description:
      "Set up comprehensive monitoring, logging, and alerting systems for full visibility into your infrastructure.",
  },
  {
    image: "/skills/cost-optimization.png",
    title: "Cost Optimization",
    description:
      "Analyze and optimize cloud spend with FinOps best practices, typically achieving 30-40% cost reduction.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Services
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            How I Can Help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            End-to-end DevOps and cloud consulting services to accelerate your
            digital transformation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn more
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
