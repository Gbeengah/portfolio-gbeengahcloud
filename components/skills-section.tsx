import {
  AWSIcon,
  AzureIcon,
  DockerIcon,
  KubernetesIcon,
  GitHubActionsIcon,
  TerraformIcon,
  PrometheusIcon,
  GrafanaIcon,
  PythonIcon,
  BashIcon,
  VaultIcon,
  AnsibleIcon,
  ArgoCDIcon,
  HelmIcon,
} from "./tech-icons";
import Image from "next/image";

const skillCategories = [
  {
    image: "/skills/aws.png",
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: AWSIcon },
      { name: "Azure", icon: AzureIcon },
    ],
  },
  {
    image: "/skills/docker.png",
    title: "Containerization",
    skills: [
      { name: "Docker", icon: DockerIcon },
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "Helm", icon: HelmIcon },
    ],
  },
  {
    image: "/skills/cicd.png",
    title: "CI/CD",
    skills: [
      { name: "GitHub Actions", icon: GitHubActionsIcon },
      { name: "ArgoCD", icon: ArgoCDIcon },
    ],
  },
  {
    image: "/skills/terraform.png",
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: TerraformIcon },
      { name: "Ansible", icon: AnsibleIcon },
    ],
  },
  {
    image: "/skills/prometheus.png",
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: PrometheusIcon },
      { name: "Grafana", icon: GrafanaIcon },
    ],
  },
  {
    image: "/skills/security.png",
    title: "Security",
    skills: [
      { name: "Vault", icon: VaultIcon },
      { name: "IAM", icon: AWSIcon },
    ],
  },
  {
    image: "/skills/automation.png",
    title: "Automation",
    skills: [
      { name: "Python", icon: PythonIcon },
      { name: "Bash", icon: BashIcon },
    ],
  },
  {
    image: "/skills/cost-optimization.png",
    title: "Cost Optimization",
    skills: [
      { name: "FinOps", icon: null },
      { name: "Reserved Instances", icon: null },
      { name: "Spot Instances", icon: null },
      { name: "Right-sizing", icon: null },
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24" id="skills">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Core Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A comprehensive toolkit for building, deploying, and maintaining
            modern cloud infrastructure at scale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                {category.image ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={`${category.title} logo`}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : category.icon ? (
                  <category.icon className="h-7 w-7" />
                ) : category.lucideIcon ? (
                  <category.lucideIcon className="h-6 w-6 text-emerald-400" />
                ) : null}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {skill.icon && <skill.icon className="h-3.5 w-3.5" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
