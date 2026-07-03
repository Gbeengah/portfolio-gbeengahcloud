import {
  AWSIcon,
  AzureIcon,
  TerraformIcon,
  KubernetesIcon,
  DockerIcon,
  GitHubActionsIcon,
  PrometheusIcon,
  GrafanaIcon,
  PythonIcon,
  BashIcon,
  ArgoCDIcon,
  HelmIcon,
  AnsibleIcon,
} from "@/components/tech-icons";

const toolCategories = [
  {
    category: "Cloud Platforms",
    tools: [
      { name: "AWS", icon: AWSIcon },
      { name: "Azure", icon: AzureIcon },
    ],
  },
  {
    category: "Infrastructure as Code",
    tools: [
      { name: "Terraform", icon: TerraformIcon },
      { name: "Ansible", icon: AnsibleIcon },
    ],
  },
  {
    category: "Containerization",
    tools: [
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Helm", icon: HelmIcon },
    ],
  },
  {
    category: "CI/CD",
    tools: [
      { name: "GitHub Actions", icon: GitHubActionsIcon },
      { name: "ArgoCD", icon: ArgoCDIcon },
    ],
  },
  {
    category: "Monitoring",
    tools: [
      { name: "Prometheus", icon: PrometheusIcon },
      { name: "Grafana", icon: GrafanaIcon },
    ],
  },
  {
    category: "Scripting",
    tools: [
      { name: "Python", icon: PythonIcon },
      { name: "Bash", icon: BashIcon },
    ],
  },
];

export function ToolsPlatforms() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Tools & Platforms
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The technologies I work with daily to build and maintain cloud
            infrastructure.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 transition-colors hover:border-primary/50"
                  >
                    <tool.icon className="h-5 w-5" />
                    <span className="text-sm font-medium text-foreground">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
