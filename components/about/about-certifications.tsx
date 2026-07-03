import Image from "next/image";
import { Award } from "lucide-react";

const certifications = [
  {
    image: "/certs/aws.png",
    name: "AWS DevOps Engineer",
    level: "Professional",
    description:
      "Expertise in provisioning, operating, and managing distributed applications on AWS.",
  },
  {
    image: "/certs/aws.png",
    name: "AWS Solutions Architect",
    level: "Associate",
    description:
      "Proficient in designing distributed systems and deploying applications on AWS.",
  },
];

export function AboutCertifications() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Certifications & Credentials
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Professional Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Industry-recognized certifications validating expertise in cloud
            platforms, infrastructure automation, and container orchestration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2.5">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} logo`}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-primary">{cert.level}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
