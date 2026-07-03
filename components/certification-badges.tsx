import Image from "next/image";
import { TerraformIcon } from "./tech-icons";

const certifications = [
  {
    image: "/certs/aws.png",
    name: "AWS DevOps Engineer",
    level: "Professional",
  },
  {
    image: "/certs/aws.png",
    name: "AWS Solutions Architect",
    level: "Associate",
  },
  {
    image: "/certs/azure.png",
    name: "Azure Administrator",
    level: "Associate",
  },
  {
    icon: TerraformIcon,
    name: "Terraform",
    level: "Infrastructure as Code",
  },
  {
    image: "/certs/kubernetes.png",
    name: "Kubernetes",
    level: "Containerization",
  },
];

export function CertificationBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-center transition-colors hover:border-primary/50 hover:bg-card"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white p-2">
            {cert.image ? (
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={`${cert.name} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            ) : cert.icon ? (
              <cert.icon className="h-8 w-8" />
            ) : null}
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">{cert.name}</p>
            <p className="text-xs text-muted-foreground">{cert.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
