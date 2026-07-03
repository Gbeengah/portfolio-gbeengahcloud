import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "AWS Three-Tier Web Application",
    description:
      "Architected and deployed a highly available three-tier web application on AWS with CloudFormation, auto-scaling, load balancing, and RDS multi-AZ for production workloads.",
    technologies: ["AWS", "CloudFormation", "EC2", "RDS", "ALB"],
    metrics: "99.9% uptime • Auto-scaling enabled",
    github: "https://github.com/Gbeengah/AWS-IaC-Three-Tier-App",
    demo: "https://gbeengah.medium.com/building-a-scalable-three-tier-application-on-aws-with-cloudformation-10dad35c6b4a",
  },
  {
    title: "CI/CD Pipeline for Microservices E-Commerce Platform",
    description:
      "Built end-to-end CI/CD pipelines for a microservices-based e-commerce platform with automated testing, container builds, and blue-green deployments.",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "ArgoCD"],
    metrics: "Zero-downtime deployments • 10x faster releases",
    github: "https://github.com/Gbeengah/Scalable-CI-CD-Pipeline-for-a-Microservices-Based-E-Commerce-Platform",
    demo: "https://gbeengah.medium.com/scalable-ci-cd-pipeline-for-a-microservices-based-e-commerce-platform-7f0715e9b731",
  },
  {
    title: "Azure Static Web App Deployment Pipeline",
    description:
      "Implemented automated deployment pipeline for an Angular app on Azure Static Web Apps with staging environments, preview URLs, and integrated CI/CD workflows.",
    technologies: ["Azure", "GitHub Actions", "Angular", "Node.js"],
    metrics: "Automated staging • Preview deployments",
    github: "https://github.com/Gbeengah/Another-Angular-Demo-Azure-Static-web-app",
  },
  {
    title: "Kubernetes Monitoring Stack with Prometheus and Grafana",
    description:
      "Deployed comprehensive monitoring and observability with Prometheus, Grafana, and Node Exporter on an Azure virtual machine, including custom dashboards and alerting.",
    technologies: ["Prometheus", "Grafana", "Node Exporter", "Azure", "Kubernetes"],
    metrics: "Full observability • Real-time alerting",
    demo: "https://gbeengah.medium.com/cloud-monitoring-made-easy-setting-up-prometheus-grafana-and-node-exporter-on-an-azure-virtual-4c3c98ee408d",
  },
  {
    title: "ChatGPT Clone Deployment on AWS EKS with Terraform & CI/CD",
    description:
      "Deployed a ChatGPT clone app on an AWS Elastic Kubernetes Service (EKS) cluster using Terraform for infrastructure as code and Jenkins for the CI/CD pipeline.",
    technologies: ["AWS EKS", "Terraform", "Jenkins", "Docker", "Kubernetes"],
    metrics: "IaC provisioned • Automated CI/CD",
    github: "https://github.com/Gbeengah/Deployment-of-chat-gpt-clone-app-on-kubernetes-using-Terraform-and-jenkins-ci-cd",
    demo: "https://gbeengah.medium.com/deployment-of-chat-gpt-clone-app-on-aws-elastic-kubernetes-service-cluster-eks-cluster-using-iac-67a628bb0e7e",
  },
  {
    title: "Azure End-to-End CI/CD Pipeline Implementation",
    description:
      "Built a complete end-to-end CI/CD pipeline on Azure DevOps, automating build, test, and deployment stages for reliable, repeatable releases.",
    technologies: ["Azure", "Azure DevOps", "CI/CD", "YAML Pipelines"],
    metrics: "End-to-end automation • Repeatable releases",
    github: "https://github.com/Gbeengah/Azure-CI-CD-Deployment",
    demo: "https://gbeengah.medium.com/azure-ci-cd-deployment-e03c15bb115f",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-secondary/30" id="projects">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real-world infrastructure projects that delivered measurable business
            impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4 rounded-lg bg-secondary/50 px-4 py-2">
                <p className="text-sm font-medium text-foreground">
                  {project.metrics}
                </p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm" className="gap-2">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      Read Article
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/Gbeengah" target="_blank" className="gap-2">
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
