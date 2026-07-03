import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalCard } from "@/components/terminal-card";
import { CertificationBadges } from "@/components/certification-badges";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16" id="about">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm text-primary">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Senior DevOps &{" "}
              <span className="text-primary">Cloud Infrastructure</span>{" "}
              Engineer
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              I design, automate, secure, and optimize cloud infrastructure across AWS and Azure using Terraform, CI/CD pipelines, Kubernetes, and production-ready DevOps practices.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/Balogun_Gbenga_DevOps_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/Gbeengah"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/balogun-gbenga/"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:bgbenga7@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Terminal Card */}
          <div className="flex flex-col gap-8">
            <TerminalCard />
            <CertificationBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
