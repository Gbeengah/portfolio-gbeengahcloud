import { Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary/30" id="contact">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Let&apos;s Build Something Great
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
            Whether you need to modernize your infrastructure, implement
            DevOps practices, or optimize cloud costs, I&apos;m here to help.
            Let&apos;s discuss your next project.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <Link href="mailto:bgbenga7@gmail.com?subject=Project%20Inquiry&body=Hi%20Gbenga%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.">
                <Mail className="h-4 w-4" />
                bgbenga7@gmail.com
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

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Typically responds within 24 hours
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "8+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "99.9%", label: "Uptime Achieved" },
            { value: "$5M+", label: "Cost Savings" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
