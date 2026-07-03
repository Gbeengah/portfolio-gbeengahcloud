import { Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutContact() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">
            Ready to Work Together?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
            Whether you&apos;re looking to modernize your cloud infrastructure,
            implement DevOps practices, or optimize your cloud costs, I&apos;m
            here to help. Let&apos;s discuss how I can contribute to your
            project.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <Link href="mailto:bgbenga7@gmail.com">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              <Link
                href="https://calendly.com/bgbenga7/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="hidden text-muted-foreground sm:inline">|</span>
            <Link
              href="/Balogun_Gbenga_DevOps_Resume.pdf"
              download
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Download Resume
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
